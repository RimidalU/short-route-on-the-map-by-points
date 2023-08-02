import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { setActiveMarkers } from "../redux/routes";
import { RootStore } from "../redux/store";

import { Route } from "../types";

const columns = [
	{
		title: "ID",
		dataIndex: "id",
	},
	{
		title: "Name",
		dataIndex: "name",
	},
	{
		title: "Points",
		children: [
			{
				title: "Point 1 (lat, lng)",
				dataIndex: "points",
				render: (_: unknown, { points }: Route) => (
					<>
						<div>{points[0].lat},</div>
						<div>{points[0].lng}</div>
					</>
				),
			},
			{
				title: "Point 2 (lat, lng)",
				dataIndex: "points",
				render: (_: unknown, { points }: Route) => (
					<>
						<div>{points[1].lat},</div>
						<div>{points[1].lng}</div>
					</>
				),
			},
			{
				title: "Point 3 (lat, lng)",
				dataIndex: "points",
				render: (_: unknown, { points }: Route) => (
					<>
						<div>{points[2].lat},</div>
						<div>{points[2].lng}</div>
					</>
				),
			},
		],
	},
];

function RouteTable() {
	const { loading, routes } = useSelector((store: RootStore) => store.routes);
	const dispatch = useDispatch();

	const handleSetActiveMarkers = (routeId: number) => {
		dispatch(setActiveMarkers(routeId));
	};

	return (
		<Table
			columns={columns}
			dataSource={routes}
			rowKey={(record) => record.id}
			loading={loading}
			rowSelection={{ type: "radio" }}
			onRow={(record) => {
				return {
					onChange: () => {
						handleSetActiveMarkers(record.id);
					},
				};
			}}
		/>
	);
}

export default RouteTable;
