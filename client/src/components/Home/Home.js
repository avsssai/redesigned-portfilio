import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
	const [blogs, setBlogs] = useState([]);
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Container fixed>
				<div className={classes.intro}>Hi, I am Siva,</div>
				<div className={classes.job}>I make websites.</div>
				<div className={classes.subText}>
					UI/UX developer, tech enthusiast and movie buff. <br />
					<span className={classes.highLight}>I make stunning and accessible interfaces.</span>
				</div>
				<div className={classes.buttonTray}>
					<Link to='/blog'>
						<Button variant='contained' color='secondary' className={classes.homePageButton} size='medium'>
							Read my blog
						</Button>
					</Link>
					<Button variant='contained' color='secondary' size='medium' className={classes.homePageButton}>
						Hire me
					</Button>
				</div>
			</Container>
			<div className={classes.addInfo}>
				<Container fixed>
					<div className={classes.subscribe}>Subscribe to my weekly newsletter!</div>
					<div className={classes.blogTitleContainer}>
						My aim is to blog daily. This way I would be able to cement my learning as well as share my
						knowledge.
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;
