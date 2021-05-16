import React, { useState } from "react";
import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
	const [blogs, setBlogs] = useState([]);
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Container fixed maxWidth='lg'>
				<Typography variant='h2'>Shiva profile page</Typography>
				<Grid container>
					<Grid item xs={10} sm={8}>
						<Card></Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
