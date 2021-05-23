import React from "react";
import { Container, Grid } from "@material-ui/core";
import Menu from "../Menu/Menu";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

import useStyles from "./styles.js";
const Navbar = ({ home }) => {
	const classes = useStyles();
	if (home) {
		return null;
	}
	return (
		<Container fluid>
			<Grid container>
				<Grid item xs={12} className={classes.navbar}>
					<div className={classes.iconName}>
						<Link to='/'>Siva Sesha Sai</Link>
					</div>
					<div className={classes.aboveSmall}>
						<div className={classes.navCluster}>
							<div className={classes.nav}>
								<NavLink to='/contact'>Contact</NavLink>
							</div>
							<div className={classes.nav}>
								<NavLink to='/my-work'>My Work</NavLink>
							</div>
							<div className={classes.nav}>
								<NavLink to='/blog'>Blog</NavLink>
							</div>
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
