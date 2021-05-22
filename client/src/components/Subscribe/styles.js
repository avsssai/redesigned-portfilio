import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	contactHeader: {
		marginBottom: theme.spacing(3),
		fontFamily: theme.typography.importedFontFamily,
		color: theme.palette.secondary.main,
	},
	contactBody: {
		marginBottom: theme.spacing(3),
	},
	form: {
		marginBottom: theme.spacing(3),

		"& *": {
			marginBottom: theme.spacing(1),
		},
	},
	submitButton: {
		"& span.MuiButton-label": {
			marginBottom: "0px",
		},
	},
}));

export default styles;
