import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	tag: {
		marginLeft: theme.spacing(2),
		padding: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		fontWeight: theme.typography.fontWeightBold,
		fontFamily: theme.typography.fontFamily,
	},
}));

export default styles;
