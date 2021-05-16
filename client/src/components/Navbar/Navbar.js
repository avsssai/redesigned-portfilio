import React from "react";
import { Container, Grid } from "@material-ui/core";
import Menu from "../Menu/Menu";

import useStyles from "./styles.js";
const Navbar = () => {
	const classes = useStyles();
	return (
		<Container>
			<Grid container>
				<Grid item xs={12} className={classes.navbar}>
					<div className={classes.iconName}>Siva Sesha Sai</div>
					<div className={classes.aboveSmall}>
						<div className={classes.navCluster}>
							<div className={classes.nav}>Contact</div>
							<div className={classes.nav}>My Work</div>
							<div className={classes.nav}>Blog</div>
						</div>
					</div>
					<div className={classes.belowSmall}>
						<Menu />
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Navbar;
