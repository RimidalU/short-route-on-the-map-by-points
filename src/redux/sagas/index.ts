import { takeEvery, put, call } from "redux-saga/effects";
import { getRoutes, setLoadedRoutes } from "../routes";

import { Route } from "../../types";
import { fetchRoutes } from "../../api";

export function* handleGetAllRoutes() {
	const routes: Route[] = yield call(fetchRoutes);
	yield put(setLoadedRoutes(routes));
}
export function* watchClickSaga() {
	yield takeEvery(getRoutes, handleGetAllRoutes);
}
export default function* rootSaga() {
	yield watchClickSaga();
}
