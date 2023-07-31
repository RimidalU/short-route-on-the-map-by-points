import { configureStore } from "@reduxjs/toolkit";
import routes from "./routes";

export const store = configureStore({
	devTools: true,
	reducer: {
		routes,
	},
});

export type RootStore = ReturnType<typeof store.getState>;
