import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import routes from "./routes";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	devTools: true,
	reducer: {
		routes,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootStore = ReturnType<typeof store.getState>;
