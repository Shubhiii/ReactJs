import React from "react";
import SelectBox from "../../../shared/SelectBox";
import classes from "./filter.module.scss";

interface IExpensesFilter {
	toggleChart?: React.MouseEventHandler<HTMLButtonElement>;
	toggleText: boolean;
}

const ExpensesFilter: React.FC<IExpensesFilter> = ({
	toggleChart,
	toggleText,
}) => {
	return (
		<div className={classes.filter}>
			<p>Filter by year</p>

			<div className={classes.wrap}>
				<button onClick={toggleChart}>
					{toggleText ? "Hide" : "Show"} Chart
				</button>
				<SelectBox />
			</div>
		</div>
	);
};

export default ExpensesFilter;
