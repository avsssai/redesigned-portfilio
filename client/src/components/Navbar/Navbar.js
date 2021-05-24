import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Menu from "../Menu/Menu";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";
import decode from "jwt-decode";

import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { GOOGLE_LOGOUT } from "../../actionTypes";

const Navbar = ({ home }) => {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const currentUser = useSelector((state) => state.auth);

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			console.log(decodedToken.exp * 1000, new Date().getTime());
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [currentUser, location]);

	const logout = () => {
		dispatch({ type: GOOGLE_LOGOUT });
		history.push("/");
		setUser(null);
	};
	if (home) {
		return null;
	}
	return (
		<Grid container>
			<Grid item xs={12} className={classes.navbar}>
				<div className={classes.iconName}>
					<Link to='/'>Siva Sesha Sai</Link>
				</div>
				<div className={classes.aboveSmall}>
					<div className={classes.navCluster}>
						{/* <div className={classes.nav}>
							<NavLink to='/contact'>Contact</NavLink>
						</div> */}
						<div className={classes.nav}>
							<NavLink to='/my-work'>My Work</NavLink>
						</div>
						<div className={classes.nav}>
							<NavLink to='/blog'>Blog</NavLink>
						</div>
						{user ? (
							<div className={classes.nav}>
								<Link to='/' onClick={logout}>
									Logout
								</Link>
							</div>
						) : (
							""
						)}
					</div>
				</div>
				<div className={classes.belowSmall}>
					<Menu logout={logout} user={user} />
				</div>
			</Grid>
		</Grid>
	);
};

export default Navbar;
