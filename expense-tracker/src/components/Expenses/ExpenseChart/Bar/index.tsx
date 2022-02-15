import React from "react";
import classes from "./bar.module.scss";

interface IBar {
	label: string;
	value: number;
	maxValue: number;
}

const Bar: React.FC<IBar> = ({ label, maxValue, value }) => {
	// let height = "0%";

	let maxHeight =
		maxValue > 0 ? Math.round((value / maxValue) * 100) + "%" : "0%";

	// if (maxValue > 0) {
	// 	height = Math.round((value / maxValue) * 100) + "%";
	// }

	// console.log(height, "height");
	return (
		<div className={classes.wrap}>
			<div className={classes.bar}>
				<span style={{ height: maxHeight }} />
			</div>
			<p>{label}</p>
		</div>
	);
};

export default Bar;
