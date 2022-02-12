import React from "react";
import classes from "./description.module.scss";

interface IDescription {
	title?: string;
	price?: number;
	id?: number;
}

const Description: React.FC<IDescription> = ({ title, price, id }) => {
	const handleDelete = () => {
		console.log(id, "id");
	};
	return (
		<div className={classes.description}>
			<h2>
				{title}
				<p>{`$${price}`}</p>
			</h2>
			{/* <div className={classes.price}></div> */}
			<button type="button" onClick={handleDelete}>
				Remove
			</button>
		</div>
	);
};

export default Description;
