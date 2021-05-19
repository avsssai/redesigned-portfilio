import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
	typography: {
		importedFontFamily: '"Rozha One", serif',
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif,"Segoe UI"`,
		body2: {
			fontSize: "16px",
		},
	},
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,

	document.getElementById("root")
);
