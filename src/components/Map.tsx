import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const position = { lat: 48.8566, lng: 2.3522 };

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
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			></TileLayer>
		</MapContainer>
	);
}

export default Map;
