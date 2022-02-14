import React from "react";
import SelectBox from "../../../shared/SelectBox";
import classes from "./filter.module.scss";

const ExpensesFilter = () => {
	return (
		<div className={classes.filter}>
			<p>Filter by year</p>

			<div className={classes.wrap}>
				<button>Hide Chart</button>
				<SelectBox />
			</div>
		</div>
	);
};

export default ExpensesFilter;
