import React from "react";
import { Container, Toolbar, AppBar, Grid } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
						<IconButton color='inherit'>
							<MenuIcon />
						</IconButton>
					</div>
				</Grid>
			</Grid>
			{/* <AppBar>
				<Toolbar>
					<AcUnitIcon
						edge='start'
						color='inherit'
						aria-label='menu'
					/>
				</Toolbar>
			</AppBar>
			<Toolbar /> */}
		</Container>
	);
};

export default Navbar;
