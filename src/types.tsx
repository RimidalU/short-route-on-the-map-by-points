export type Point = {
	lat: number;
	lng: number;
};

export type Route = {
	id: number;
	name: string;
	points: Point[];
};

export type InitialState = {
	routes: Route[];
	loading: boolean;
};
