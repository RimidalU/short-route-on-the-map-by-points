import { takeEvery, put, call, spawn } from "redux-saga/effects";
import { getPolyline, getRoutes, setLoadedRoutes, setLoadedPolyline } from "../routes";

import { Route } from "../../types";
import { fetchPolyline, fetchRoutes } from "../../api";

export function* handleGetAllRoutes() {
	const routes: Route[] = yield call(fetchRoutes);
	yield put(setLoadedRoutes(routes.length ? routes : []));
}

export function* handleGetPolyline() {
	const polyline: undefined[] = yield call(fetchPolyline);
	yield put(setLoadedPolyline(polyline));
}

export function* watchClickSaga() {
	yield takeEvery(getRoutes, handleGetAllRoutes);
}

export function* watchClickSag1() {
	yield takeEvery(getPolyline, handleGetPolyline);
}

export default function* rootSaga() {
	yield spawn(watchClickSaga);
	yield spawn(watchClickSag1);
}
