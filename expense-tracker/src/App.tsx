import React from "react";
import "./App.scss";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from "react-router-dom";
import CreateExpense from "./components/CreateExpense";
import Expenses from "./components/Expenses";
import Header from "./shared/Header";
import Wrapper from "./shared/Wrapper";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import ExpenseProvider from "./store/expenseContextProvider";

function App() {
	const loginStatus = localStorage.getItem("isLoggedIn");

	return (
		<ExpenseProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />

					<Route path="/register" element={<Register />} />

					<Route path="/expenses" element={<Expenses />} />

					<Route
						path="/"
						element={
							<Navigate
								replace
								to={loginStatus === "1" ? "/expenses" : "/login"}
							/>
						}
					/>

					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</ExpenseProvider>
	);
}

export default App;
