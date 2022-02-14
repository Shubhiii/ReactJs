import React, { useContext } from "react";
import Container from "../../shared/container";
import Layout from "../../shared/Layout";
import ExpenseContext from "../../store/expenseContext";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
	const ctx = useContext(ExpenseContext);

	const handleRemove = (id: number) => {
		ctx.removeItem(id);
	};

	return (
		<Layout>
			<Container>
				<ExpensesFilter />

				<ExpenseChart />

				<ExpenseList onRemoveExpense={handleRemove} items={ctx.items} />
			</Container>
		</Layout>
	);
};

export default Expenses;
