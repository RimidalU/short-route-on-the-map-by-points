import { Route } from "../types";

export const getPoints = async (): Promise<Route[]> => {
	return fetch("./routes.json")
		.then((response) => (response.ok ? response.json() : Promise.reject(response)))
		.catch((res) => Promise.resolve({ status: res.status, message: res.statusText }));
};
