import { createSlice } from "@reduxjs/toolkit";

import { InitialState } from "../types";

const initialState: InitialState = {
	routes: [],
	loading: false,
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
	},
});

export const { getRoutes, setLoadedRoutes } = routesSlice.actions;

export default routesSlice.reducer;
