import React from "react";
import "./App.scss";
import CreateExpense from "./components/CreateExpense";
import Expenses from "./components/Expenses";
import Header from "./shared/Header";
import Wrapper from "./shared/Wrapper";

function App() {
	return (
		<>
			<Header />
			<Wrapper>
				{/* <h1>Let's get started!</h1> */}
				{/* <CreateExpense /> */}
				<Expenses />
			</Wrapper>
		</>
	);
}

export default App;
