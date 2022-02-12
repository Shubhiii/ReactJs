import React from "react";
import classes from "./bar.module.scss";

interface IBar {
	label: string;
	value: number;
}

const Bar: React.FC<IBar> = ({ label, value }) => {
	const height = value + "%";
	return (
		<div className={classes.wrap}>
			<div className={classes.bar}>
				<span style={{ height }} />
			</div>
			<p>{label}</p>
		</div>
	);
};

export default Bar;
