import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles.js";

const Footer = ({ home }) => {
	const classes = useStyles();
	if (home) {
		return null;
	}
	return (
		<Container className={classes.footer} fixed>
			<Grid container direction='row' justify='center' alignItems='center'>
				<Grid item>
					<div className={classes.iconName}>
						<Typography variant='body1' color='secondary'>
							Siva Sesha Sai &#169; 2021
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
