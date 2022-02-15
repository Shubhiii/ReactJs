import React, { useContext } from "react";
import Container from "../../shared/container";
import Layout from "../../shared/Layout";
import NoData from "../../shared/noData";
import ExpenseContext from "../../store/expenseContext";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
	const currentYear = new Date().getFullYear();

	const [showChart, setShowChart] = React.useState(true);

	const [selectedYear, setSelectedYear] = React.useState(
		currentYear.toString()
	);

	const handleChange = (year: string) => {
		setSelectedYear(year);
	};

	const ctx = useContext(ExpenseContext);

	const filteredItems = ctx.items.filter((item: any) => {
		return item.date.getFullYear().toString() === selectedYear;
	});

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
				<ExpensesFilter
					onChangeYear={handleChange}
					toggleText={showChart}
					toggleChart={toggleChart}
					selectedYear={selectedYear}
				/>

				{showChart && <ExpenseChart expenses={filteredItems} />}

				<ExpenseList onRemoveExpense={handleRemove} items={filteredItems} />
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
