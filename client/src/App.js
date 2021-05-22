import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyEditor from "./components/Editor/Editor";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import BlogHome from "./components/BlogHome/BlogHome";
import Blog from "./components/Blog/Blog";
import useStyles from "./AppStyles";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
	const classes = useStyles();
	return (
		<>
			<Router>
				<Navbar />
				<Container maxWidth='lg' className={classes.body}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/editor' component={MyEditor} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/my-work' component={Work} />
						<Route exact path='/subscribe' component={Subscribe} />
						<Route exact path='/blog' component={BlogHome} />
						<Route exact path='/blog/:searchString' component={Blog} />
					</Switch>
				</Container>
				<Footer />
			</Router>
		</>
	);
};

export default App;
