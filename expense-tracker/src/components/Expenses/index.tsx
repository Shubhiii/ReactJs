import React, { useContext } from "react";
import Container from "../../shared/container";
import Layout from "../../shared/Layout";
import NoData from "../../shared/noData";
import ExpenseContext from "../../store/expenseContext";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
	const [showChart, setShowChart] = React.useState(true);
	const ctx = useContext(ExpenseContext);

	const handleRemove = (id: number) => {
		ctx.removeItem(id);
	};

	const toggleChart = () => {
		setShowChart((prevState) => !prevState);
	};

	let expenses = <NoData />;

	if (ctx.items.length) {
		expenses = (
			<>
				<ExpensesFilter toggleText={showChart} toggleChart={toggleChart} />

				{showChart && <ExpenseChart />}

				<ExpenseList onRemoveExpense={handleRemove} items={ctx.items} />
			</>
		);
	}

	return (
		<Layout>
			<Container>{expenses}</Container>
		</Layout>
	);
};

export default Expenses;
