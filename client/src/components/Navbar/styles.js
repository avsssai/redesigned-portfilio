import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	navbar: {
		display: "flex",
		justifyContent: "space-between",
		padding: theme.spacing(3),
		alignContent: "center",
		color: theme.palette.grey["100"],
		fontFamily: theme.typography.fontFamily,
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(1),
		},
	},
	iconName: {
		fontSize: theme.typography.h6.fontSize,
		display: "flex",
		alignItems: "center",
	},
	navCluster: {
		display: "flex",
		justifyContent: "space-between",
		alignContent: "center",
	},
	nav: {
		paddingRight: theme.spacing(4),
	},
	aboveSmall: {
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	belowSmall: {
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export default styles;
