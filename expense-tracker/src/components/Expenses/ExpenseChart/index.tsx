import React from "react";
import Card from "../../../shared/Card";
import Chart from "./Chart";
import classes from "./chart.module.scss";

const chartDataPoints = [
	{ label: "Jan", value: 0 },
	{ label: "Feb", value: 0 },
	{ label: "Mar", value: 0 },
	{ label: "Apr", value: 0 },
	{ label: "May", value: 0 },
	{ label: "Jun", value: 0 },
	{ label: "Jul", value: 0 },
	{ label: "Aug", value: 0 },
	{ label: "Sep", value: 0 },
	{ label: "Oct", value: 0 },
	{ label: "Nov", value: 0 },
	{ label: "Dec", value: 0 },
];

const ExpenseChart = ({ expenses }: any) => {
	expenses.forEach((expense: any) => {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	});

	return (
		<Card>
			<div className={classes["chart-wrap"]}>
				<Chart chartDataPoints={chartDataPoints} />
			</div>
		</Card>
	);
};

export default ExpenseChart;
