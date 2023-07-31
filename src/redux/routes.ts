import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";

const initialState: InitialState = {
	routes: [],
	loading: false,
};
const routesSlice = createSlice({
	name: "routes",
	initialState,
	reducers: {},
});

export default routesSlice.reducer;
