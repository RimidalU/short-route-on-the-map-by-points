import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import { useEffect } from "react";

import RouteTable from "./components/RouteTable";

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
				<Col span={12}>
					<RouteTable routes={routes} />
				</Col>
				<Col span={12} />
			</Row>
		</>
	);
}

export default App;
