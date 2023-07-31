import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	devTools: true,
	reducer: {},
});

export type RootStore = ReturnType<typeof store.getState>;
