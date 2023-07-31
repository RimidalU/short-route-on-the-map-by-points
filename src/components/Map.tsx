import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const position = { lat: 48.86064126361366, lng: 2.3376343848677816 };

const markers = [
	{
		geocode: { lat: 48.86064126361366, lng: 2.3376343848677816 },
	},
	{
		geocode: { lat: 48.85, lng: 2.3522 },
	},
	{
		geocode: { lat: 48.855, lng: 2.34 },
	},
];

const pinIcon = new Icon({
	iconUrl: "/pin.png",
	iconSize: [40, 80],
	iconAnchor: [9, 59],
	popupAnchor: [20, -58],
});

function Map() {
	return (
		<MapContainer
			style={{
				height: "80vh",
				width: "100%",
				margin: "0 auto",
			}}
			center={position}
			zoom={13}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markers.map((marker, index) => (
				<Marker position={marker.geocode} icon={pinIcon} key={index}>
					<Popup>{`Point ${index + 1}`}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

export default Map;
