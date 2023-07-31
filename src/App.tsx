import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Col, Layout, Typography, Row } from "antd";

import RouteTable from "./components/RouteTable";
import Map from "./components/Map";

import { getRoutes } from "./redux/routes";

const { Title, Link } = Typography;
const { Content, Footer } = Layout;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRoutes());
	}, [dispatch]);

	return (
		<Layout style={{ minHeight: "100vh", textAlign: "center", margin: "0 20px" }}>
			<Title>Route on the map by points.</Title>

			<Content>
				<Title level={3}>To build a motion track, select a route from the table.</Title>
				<Row>
					<Col span={8}>
						<RouteTable />
					</Col>
					<Col span={16}>
						<Map />
					</Col>
				</Row>
			</Content>

			<Footer style={{ textAlign: "center" }}>
				<Link href="https://github.com/RimidalU" target="_blank">
					<span>&copy; Copyright 2023 </span>
					RimidalU
				</Link>
			</Footer>
		</Layout>
	);
}

export default App;
