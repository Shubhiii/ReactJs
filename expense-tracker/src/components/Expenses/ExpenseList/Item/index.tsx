import React from "react";
import Date from "../Date";
import Description from "../Description";

interface IItem {
	data: any;
	onRemoveExpense: any;
}

const Item: React.FC<IItem> = ({ data }) => {
	return (
		<>
			<li>
				<Date date={data.date} />
				<Description title={data.title} price={data.amount} id={data.id} />
			</li>
		</>
	);
};

export default Item;
