import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	blogHome: {
		fontFamily: theme.typography.fontFamily,
		minHeight: "70vh",
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
		[theme.breakpoints.down("xs")]: {
			textAlign: "start",
		},
	},
	paper: {
		padding: theme.spacing(3),
	},
	blogTitle: {
		fontSize: theme.typography.h5.fontSize,
		fontWeight: theme.typography.fontWeightBold,

		"& a": {
			textDecoration: "none",
			color: "inherit",
		},
		"& a:hover": {
			borderBottom: "1px dotted white",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.h6.fontSize,
		},
	},
	blogInfo: {
		display: "flex",
		flexDirection: "column-reverse",
		justifyContent: "flex-end",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			alignItems: "flex-start",
			flexDirection: "row-reverse",
			justifyContent: "space-between",
		},
	},
	blogDate: {
		marginBottom: theme.spacing(2),
		color: theme.palette.secondary.main,
	},
	blogTag: {
		display: "flex",
	},
}));

export default styles;
