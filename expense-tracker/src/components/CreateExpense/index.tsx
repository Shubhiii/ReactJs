import React from "react";
import Button from "../../shared/Button";
import Card from "../../shared/Card";
import Input from "../../shared/Input";
import classes from "./createExpense.module.scss";

const CreateExpense = () => {
	return (
		<Card>
			<form>
				<div className={classes["input-wrapper"]}>
					<Input
						label="Title"
						onBlur={() => null}
						onChange={() => null}
						value=""
					/>
					<Input
						label="Amount"
						type="number"
						onBlur={() => null}
						onChange={() => null}
						value=""
					/>
					<Input
						label="Date"
						type="date"
						onBlur={() => null}
						onChange={() => null}
						value=""
					/>
				</div>
			</form>

			<div className={classes["button-group"]}>
				<Button isDisable>Add Expense</Button>
			</div>
		</Card>
	);
};

export default CreateExpense;
