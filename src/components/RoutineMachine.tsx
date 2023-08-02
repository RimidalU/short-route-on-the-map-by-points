import { createControlComponent } from "@react-leaflet/core";
import { useSelector } from "react-redux";
import "leaflet-routing-machine";
import L from "leaflet";

import { RootStore } from "../redux/store";

function RoutingMachineContainer() {
	const { activeMarkers } = useSelector((store: RootStore) => store.routes);

	const createRoutineMachineLayer = () => {
		const instance = L.Routing.control({
			waypoints: [
				L.latLng(activeMarkers[0]?.position.lat, activeMarkers[0]?.position.lng),
				L.latLng(activeMarkers[1]?.position.lat, activeMarkers[1]?.position.lng),
				L.latLng(activeMarkers[2]?.position.lat, activeMarkers[2]?.position.lng),
			],
			autoRoute: true,

			lineOptions: {
				styles: [{ color: "#6FA1EC" }, { weight: 4 }],
				missingRouteTolerance: 1,
				extendToWaypoints: true,
			},
			show: false,
			addWaypoints: false,
			routeWhileDragging: true,
			fitSelectedRoutes: true,
			showAlternatives: false,
		});

		return instance;
	};

	const RoutingMachine = createControlComponent(createRoutineMachineLayer);

	return <RoutingMachine />;
}

export default RoutingMachineContainer;
