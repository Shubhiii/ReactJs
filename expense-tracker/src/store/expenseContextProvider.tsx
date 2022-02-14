import React from "react";
import ExpenseContext from "./expenseContext";

const DUMMY_EXPENSES = [
	{
		id: 0,
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 1, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 2,
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 3,
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const defaultExpense = {
	items: [],
	// items: DUMMY_EXPENSES,
};

const expenseReducer = (state: any, action: any) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item);

		// const updatedItems = [...state.items, action.item];

		return {
			items: updatedItems,
		};
	}

	if (action.type === "REMOVE") {
		const updatedItems = state.items.filter(
			(item: { id: number }) => item.id !== action.id
		);

		return {
			items: updatedItems,
		};
	}

	return defaultExpense;
};

const ExpenseProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(expenseReducer, defaultExpense);

	const onAddExpense = (item: any) => {
		dispatch({ type: "ADD", item: item });
	};

	const onRemoveExpense = (id: number) => {
		dispatch({ type: "REMOVE", id: id });
	};

	const expenseCtx = {
		items: state.items,
		addItem: onAddExpense,
		removeItem: onRemoveExpense,
	};

	return (
		<ExpenseContext.Provider value={expenseCtx}>
			{children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseProvider;
