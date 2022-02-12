import React from "react";
import classes from "./select.module.scss";

interface ISelectBox {
	options?: {
		id: number;
		value: string;
	}[];
	selected?: string;
	dropdownChangeHandler?: () => void;
}

const DUMMY_OPTIONS = [
	{ id: 0, value: "2021" },
	{ id: 1, value: "2022" },
];

const SelectBox: React.FC<ISelectBox> = ({
	options,
	selected,
	dropdownChangeHandler,
}) => {
	options = DUMMY_OPTIONS;
	return (
		<select
			className={classes.select}
			value={selected}
			onChange={dropdownChangeHandler}
		>
			{options &&
				options.map((option: { id: number; value: string }) => (
					<option key={option.id} value={option.value}>
						{option.value}
					</option>
				))}
		</select>
	);
};

export default SelectBox;
