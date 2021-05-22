import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	workTitle: {
		color: theme.palette.secondary.main,
		fontFamily: theme.typography.importedFontFamily,
		display: "flex",
		marginBottom: theme.spacing(5),
	},
	projectImage: {
		maxWidth: "100%",
		maxHeight: "100%",
		boxShadow: theme.shadows[5],
		borderRadius: theme.shape.borderRadius,
	},
	projectDetails: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(3),
		},
	},
	projectTitle: {
		fontSize: theme.typography.h4.fontSize,
		textDecoration: "underline",
		marginBottom: theme.spacing(2),
	},
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	projectItem: {
		margin: `${theme.spacing(5)} 0`,
	},
}));

export default styles;
