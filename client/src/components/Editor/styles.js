import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	mainContainer: {
		fontFamily: theme.typography.fontFamily,
	},
	input: {
		marginBottom: theme.spacing(3),
	},
	editor: {
		color: theme.palette.grey["200"],
		fontSize: theme.typography.body1.fontSize,
		"& pre": {
			color: "black",
		},
	},
}));

export default styles;
