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
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.grey["500"],
		[theme.breakpoints.down("xs")]: {
			marginTop: "15vh",
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
		fontFamily: theme.typography.fontFamily,
		fontWeight: theme.typography.fontWeightMedium,
		marginBottom: theme.spacing(3),
		marginTop: theme.spacing(3),
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.h2.fontSize,
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
	},
	homePageButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			marginRight: theme.spacing(1),
		},
	},
	highLight: {
		color: theme.palette.grey["200"],
	},
}));

export default styles;
