import React from "react";
import { Container, Toolbar, AppBar } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Navbar = () => {
	return (
		<>
			<AppBar>
				<Toolbar>
					<AcUnitIcon
						edge='start'
						color='inherit'
						aria-label='menu'
					/>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default Navbar;
