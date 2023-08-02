import { Route } from "../types";

export const fetchRoutes = async (): Promise<Route[]> => {
	return fetch("./routes.json")
		.then((response) => (response.ok ? response.json() : Promise.reject(response)))
		.catch((res) => Promise.resolve({ status: res.status, message: res.statusText }));
};

export const fetchPolyline = async (): Promise<Route[]> => {
	const points = [
		[59.84660399, 30.29496392],
		[59.82934196, 30.42423701],
		[59.83567701, 30.38064206],
	];

	return fetch(
		"https://router.project-osrm.org/route/v1/driving/" + points.join(";") + "?geometries=geojson"
	)
		.then((response) => (response.ok ? response.json() : Promise.reject(response)))
		.catch((res) => Promise.resolve({ status: res.status, message: res.statusText }));
};
