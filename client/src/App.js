import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyEditor from "./components/Editor/Editor";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import BlogHome from "./components/BlogHome/BlogHome";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Container maxWidth='lg'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/editor' component={MyEditor} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/my-work' component={Work} />
						<Route exact path='/blog' component={BlogHome} />
					</Switch>
				</Container>
			</Router>
		</>
	);
};

export default App;
