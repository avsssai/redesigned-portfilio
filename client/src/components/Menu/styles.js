import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	paper: {
		marginRight: theme.spacing(2),
	},
	link: {
		"& a": {
			color: "inherit",
			textDecoration: "none",
		},
	},
}));

export default styles;
