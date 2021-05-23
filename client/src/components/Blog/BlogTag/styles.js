import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
	tag: {
		marginLeft: theme.spacing(1),
		padding: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		fontWeight: theme.typography.fontWeightBold,
		fontFamily: theme.typography.fontFamily,
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0.4),
		},
	},
}));

export default styles;
