import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyEditor from "./components/Editor/Editor";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Container maxWidth='lg'>
					<Route exact path='/' component={Home} />
					<Route exact path='/editor' component={MyEditor} />
				</Container>
			</Router>
		</>
	);
};

export default App;
