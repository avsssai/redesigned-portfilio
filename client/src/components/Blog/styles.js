import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	blogContainer: {
		marginTop: theme.spacing(6),
	},
	blogTitle: {
		fontFamily: theme.typography.importedFontFamily,
		color: theme.palette.secondary.main,
		fontSize: theme.typography.h3.fontSize,
	},
	blogDetails: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		display: "flex",
		justifyContent: "space-between",
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
