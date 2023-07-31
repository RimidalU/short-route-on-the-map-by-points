import { Table } from "antd";

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

type Props = {
	routes: Route[];
};

function RouteTable({ routes }: Props) {
	return <Table columns={columns} dataSource={routes} rowKey={"id"} />;
}

export default RouteTable;
