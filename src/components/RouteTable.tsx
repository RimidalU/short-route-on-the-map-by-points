import { Table } from "antd";

import { Route } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { setActiveMarkers } from "../redux/routes";

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
			rowKey={"id"}
			loading={loading}
			onRow={(record) => {
				return {
					onClick: () => {
						handleSetActiveMarkers(record.id);
					},
				};
			}}
		/>
	);
}

export default RouteTable;
