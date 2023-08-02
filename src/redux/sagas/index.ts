import { takeEvery, put, call } from "redux-saga/effects";

import { getRoutes, setLoadedRoutes } from "../routes";
import { fetchRoutes } from "../../api";
import { Route } from "../../types";

export function* handleGetAllRoutes() {
	const routes: Route[] = yield call(fetchRoutes);
	yield put(setLoadedRoutes(routes.length ? routes : []));
}

export function* watchClickSaga() {
	yield takeEvery(getRoutes, handleGetAllRoutes);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
