import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	blogHome: {
		fontFamily: theme.typography.fontFamily,
	},
	backToHome: {
		textAlign: "center",
		width: "100%",
		fontSize: theme.typography.h6.fontSize,
		marginTop: theme.spacing(3),
		"& a": {
			color: theme.palette.secondary.main,
			textDecoration: "none",
		},
	},
}));

export default styles;
