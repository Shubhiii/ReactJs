import React from "react";
import classes from "./header.module.scss";
import LOGO from "../../images/logo.png";
import USER from "../../images/user.jpg";
import Button from "../Button";
import Container from "../container";

const Header = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.logo}>
					<img src={LOGO} alt="Logo" height="30" />
					<span>Expense Tracker</span>
				</div>

				<div className={classes.wrap}>
					<Button>Create New Expense</Button>

					<div className={classes.user}>
						<img src={USER} height="39" alt="user" />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
