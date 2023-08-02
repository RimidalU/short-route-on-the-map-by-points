import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLngBoundsExpression } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { RootStore } from "../redux/store";

import RoutingMachineContainer from "./RoutineMachine";

import "leaflet/dist/leaflet.css";

const pinIcon = new Icon({
	iconUrl: "/pin.png",
	iconSize: [40, 80],
	iconAnchor: [9, 59],
	popupAnchor: [20, -58],
});

type Props = {
	bounds: LatLngBoundsExpression;
};

const Recenter = ({ bounds }: Props) => {
	const map = useMap();

	useEffect(() => {
		map.fitBounds(bounds || []);
	}, [bounds, map]);
	return null;
};

function Map() {
	const { activeMarkers, centerPosition } = useSelector((store: RootStore) => store.routes);

	const bounds: LatLngBoundsExpression = activeMarkers.map((item) => {
		return [item.position.lat, item.position.lng];
	});

	return (
		<MapContainer
			style={{
				height: "80vh",
				width: "100%",
				margin: "0 auto",
			}}
			center={centerPosition}
			zoom={13}
		>
			{activeMarkers.length && <Recenter bounds={bounds} />}

			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<RoutingMachineContainer />

			<MarkerClusterGroup chunkedLoading zoomToBoundsOnClick>
				{activeMarkers?.map((marker) => (
					<Marker position={marker.position} icon={pinIcon} key={marker.id}>
						<Popup>{marker.name}</Popup>
					</Marker>
				))}
			</MarkerClusterGroup>
		</MapContainer>
	);
}

export default Map;
