import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Menu from "../Menu/Menu";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import "./styles.css";

import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { GOOGLE_LOGOUT } from "../../actionTypes";
const Navbar = ({ home }) => {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [user, location]);

	const logout = () => {
		dispatch({ type: GOOGLE_LOGOUT });
		history.push("/");
		setUser(null);
	};
	if (home) {
		return null;
	}
	return (
		<Container fluid='true'>
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
							{user ? (
								<div className={classes.nav}>
									<Button onClick={logout}>Logout</Button>
								</div>
							) : (
								""
							)}
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
