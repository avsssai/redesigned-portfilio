import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	utilityContainer: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		display: "flex",
	},
	main: {
		minHeight: "70vh",
		display: "flex",
		marginTop: "20vh",
		flexDirection: "column",
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.grey["500"],

		[theme.breakpoints.down("lg")]: {
			marginTop: "10vh",
		},
	},
	intro: {
		fontSize: theme.typography.h4.fontSize,
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.h6.fontSize,
		},
	},
	job: {
		fontSize: theme.typography.h1.fontSize,
		color: theme.palette.secondary.main,
		fontFamily: theme.typography.importedFontFamily,
		fontWeight: theme.typography.fontWeightMedium,
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
		textShadow: "0px 0px 0 #f50057, -3px 0px 10px #0a0e27",

		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.h2.fontSize,
			lineHeight: "1.1",
		},
	},
	subText: {
		fontSize: theme.typography.h5.fontSize,
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.body2.fontSize,
		},
	},
	buttonTray: {
		marginTop: theme.spacing(5),
		"& a": {
			color: "inherit",
			textDecoration: "none",
		},
	},
	homePageButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			marginRight: theme.spacing(1),
		},
		"& a:hover": {
			textDecoration: "none",
		},
	},
	highLight: {
		color: theme.palette.grey["200"],
	},
	addInfo: {
		marginTop: theme.spacing(10),
	},
	blogTitleContainer: {
		color: theme.palette.grey["600"],
		fontSize: theme.typography.h6.fontSize,
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.body2.fontSize,
		},
	},
	subscribe: {
		color: theme.palette.grey["200"],
		fontFamily: theme.typography.importedFontFamily,

		borderBottom: `1px dotted ${theme.palette.secondary.main}`,
		width: "fit-content",
		marginBottom: theme.spacing(1),
		fontSize: theme.typography.h5.fontSize,
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.h6.fontSize,
		},
		"& a, & a:hover": {
			color: "inherit",
			textDecoration: "none",
		},
	},
	twitter: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
}));

export default styles;
