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
	},
	blogDetails: {
		marginTop: theme.spacing(3),
		marginBottom: "4rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "baseline",
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
