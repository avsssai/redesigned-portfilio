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
		marginBottom: theme.spacing(3),
		"& a": {
			color: theme.palette.secondary.main,
			textDecoration: "none",
		},
	},
	paper: {
		padding: theme.spacing(3),
	},
	blogTitle: {
		fontSize: theme.typography.h6.fontSize,
		fontWeight: theme.typography.fontWeightBold,
	},
	blogInfo: {
		display: "flex",
		flexDirection: "column-reverse",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	blogDate: {
		marginBottom: theme.spacing(2),
		color: theme.palette.secondary.main,
	},
}));

export default styles;
