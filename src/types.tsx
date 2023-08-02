import { LatLngExpression } from "leaflet";

export type Point = {
	lat: number;
	lng: number;
};

export type Route = {
	id: number;
	name: string;
	points: Point[];
};

export type Marker = {
	id: number;
	name: string;
	position: Point;
};

export type InitialState = {
	routes: Route[];
	activeMarkers: Marker[];
	centerPosition: Point;
	polyline: LatLngExpression[][];
	loading: boolean;
	loadingPolyline: boolean;
};
