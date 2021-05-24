import { makeStyles } from "@material-ui/core";
const styles = makeStyles((theme) => ({
	blogContainer: {
		marginTop: theme.spacing(6),
		fontFamily: theme.typography.fontFamily,
	},
	blogTitle: {
		fontFamily: theme.typography.importedFontFamily,
		color: theme.palette.secondary.main,
		fontSize: theme.typography.h3.fontSize,
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.h3.fontSize,
			textAlign: "center",
		},
	},
	blogDetails: {
		marginTop: theme.spacing(3),
		marginBottom: "4rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "baseline",
		[theme.breakpoints.down("xs")]: {
			alignItems: "center",
			flexDirection: "column",
			alignItems: "center",
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(2),
		},
	},
	goBack: {
		textAlign: "center",
		marginBottom: theme.spacing(5),
		color: theme.palette.grey["400"],

		"& a": {
			color: "inherit",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "fit-content",
			textDecoration: "none",
			paddingBottom: theme.spacing(0.5),
			borderBottom: `1px dotted ${theme.palette.secondary.main}`,
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: theme.spacing(2),
			// fontSize: theme.typography.body2.fontSize,
			fontSize: "14px",
		},
	},
	editLink: {
		...theme.button,
		color: theme.palette.secondary.main,
	},
	blogDate: {
		alignSelf: "baseline",
		color: theme.palette.grey["400"],
		fontWeight: theme.typography.fontWeightBold,
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			textAlign: "center",
			fontSize: theme.typography.body2.fontSize,
			marginBottom: theme.spacing(1),
		},
	},
	blogTags: {
		display: "flex",
		justifyContent: "space-between",
	},
	blogContent: {
		color: theme.palette.grey["200"],
		fontFamily: theme.typography.fontFamily,
	},
}));

export default styles;
