import React, { useState } from "react";
import { Container, Button, Grid, Menu, Link as Anchor } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
const Home = () => {
	const [blogs, setBlogs] = useState([]);
	const classes = useStyles();
	return (
		<div id='main'>
			<div className={classes.main}>
				<Container fixed maxWidth='lg'>
					<div className={classes.intro}>Hi👋, I am Siva,</div>
					<div className={classes.job}>I make websites.</div>
					<div className={classes.subText}>
						UI/UX developer, tech enthusiast and movie buff. <br />
						<span className={classes.highLight}>I make stunning and accessible interfaces.</span>
					</div>
					<div className={classes.buttonTray}>
						<Link to='/blog'>
							<Button
								variant='contained'
								color='secondary'
								className={classes.homePageButton}
								size='medium'>
								Read my blog
							</Button>
						</Link>
						<Button variant='contained' color='secondary' size='medium' className={classes.homePageButton}>
							<Anchor
								href='https://drive.google.com/file/d/17nHLMAt0Z4gwLAM0xO8l5d-Ye4-npYao/view?usp=sharing'
								className={classes.buttonLink}
								rel='noopener noreferrer'
								target='_blank'>
								Resume
							</Anchor>
						</Button>
					</div>
				</Container>
				<div className={classes.addInfo}>
					<Container fixed>
						<div className={classes.subscribe}>
							<Link to='/subscribe' className={classes.anchor}>
								Subscribe to my weekly newsletter!
							</Link>
						</div>
						<div className={classes.blogTitleContainer}>
							I write a blog daily, subscribe to get weekly updates!
						</div>
					</Container>
					<Container fixed className={classes.twitter}>
						<div className={classes.subscribe}>
							<Anchor
								href='https://twitter.com/shiva_seshasai'
								className={classes.anchor}
								target='_blank'>
								Follow me on Twitter.
							</Anchor>
						</div>
						<div className={classes.blogTitleContainer}>
							I post some interesting content, well you be the judge of that.
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default Home;
