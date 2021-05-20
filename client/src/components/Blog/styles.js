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
			fontSize: theme.typography.h4.fontSize,
		},
	},
	blogDetails: {
		marginTop: theme.spacing(3),
		marginBottom: "4rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "baseline",
	},
	goBack: {
		textAlign: "center",
		marginBottom: theme.spacing(5),

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
	},
	blogDate: {
		alignSelf: "baseline",
		color: theme.palette.grey["200"],
		fontWeight: theme.typography.fontWeightBold,
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
