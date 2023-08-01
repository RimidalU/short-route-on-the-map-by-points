import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Icon } from "leaflet";

import { RootStore } from "../redux/store";

import "leaflet/dist/leaflet.css";

const pinIcon = new Icon({
	iconUrl: "/pin.png",
	iconSize: [40, 80],
	iconAnchor: [9, 59],
	popupAnchor: [20, -58],
});

type Props = {
	lat: number;
	lng: number;
};

const Recenter = ({ lat, lng }: Props) => {
	const map = useMap();

	useEffect(() => {
		map.setView([lat, lng], 13);
	}, [lat, lng, map]);
	return null;
};

function Map() {
	const { activeMarkers, centerPosition } = useSelector((store: RootStore) => store.routes);

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
			<Recenter lat={centerPosition.lat} lng={centerPosition.lng} />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<MarkerClusterGroup chunkedLoading>

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
