import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row } from "antd";

import RouteTable from "./components/RouteTable";
import Map from "./components/Map";

import { getRoutes } from "./redux/routes";
import { RootStore } from "./redux/store";

function App() {
	const { routes } = useSelector((store: RootStore) => store.routes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRoutes());
	}, [dispatch]);

	return (
		<>
			<h1>Route on the map by points.</h1>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<RouteTable routes={routes} />
				</Col>
				<Col span={16}>
					<Map />
				</Col>
			</Row>
		</>
	);
}

export default App;
