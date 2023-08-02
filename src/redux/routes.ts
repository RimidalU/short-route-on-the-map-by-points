import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "../types";

const defaultPosition = { lat: 48.86064126361366, lng: 2.3376343848677816 };

const initialState: InitialState = {
	routes: [],
	activeMarkers: [],
	centerPosition: defaultPosition,
	polyline: [],
	loading: false,
	loadingPolyline: false,
};
const routesSlice = createSlice({
	name: "routes",
	initialState,
	reducers: {
		getRoutes: (state) => {
			state.loading = true;
		},
		setLoadedRoutes: (state, { payload }) => {
			state.routes = payload;
			state.loading = false;
		},
		setActiveMarkers: (state, { payload }) => {
			const activeRoutes = state.routes.find((route) => route.id === payload)?.points;

			const activeMarkers = activeRoutes?.map((point, index) => {
				return {
					id: index,
					name: `Point ${index + 1}`,
					position: {
						lat: point.lat,
						lng: point.lng,
					},
				};
			});
			if (activeMarkers) {
				state.activeMarkers = activeMarkers;
				state.centerPosition = activeMarkers[1].position;
			}
		},
		getPolyline: (state) => {
			state.loadingPolyline = true;
		},
		setLoadedPolyline: (state, { payload }) => {
			const points =
				payload.routes[0].geometry.coordinates || [];
			state.polyline = points
			state.loadingPolyline = false;
		},
	},
});

export const { getRoutes, setLoadedRoutes, setActiveMarkers, getPolyline, setLoadedPolyline } =
	routesSlice.actions;

export default routesSlice.reducer;
