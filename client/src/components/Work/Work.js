import React from "react";
import { Container, Typography, Grid, Divider, Link } from "@material-ui/core";
import useStyles from "./styles";
import Paletter from "./images/paletter.PNG";
import HackerNews from "./images/hacker_news.PNG";
import todoMVC from "./images/todoMVC.PNG";

const projects = [
	{
		name: "Paletter",
		content: "A Palette picker app made with React JS.",
		image: Paletter,
		link: "http://paletter.herokuapp.com/",
	},
	{
		name: "Hacker News Clone",
		content: "A Hacker News Clone made with React JS and hacker news API.",
		image: HackerNews,
		link: "http://newshn.herokuapp.com/",
	},
	{
		name: "todoMVC",
		content: "An MVC todo implementation.",
		image: todoMVC,
		link: "https://avsssai.github.io/todoMVC/",
	},
];

const Work = () => {
	const classes = useStyles();
	return (
		<div>
			<Container>
				<Typography variant='h3' className={classes.workTitle}>
					My Work
				</Typography>
				<Grid container direction='column' spacing={5}>
					{projects.map((item) => {
						return (
							<Grid container item className={classes.projectItem} key={item.name}>
								<Divider className={classes.divider} />
								<Grid item xs={12} md={6} className={classes.projectDetails}>
									<Typography variant='h4' className={classes.projectTitle}>
										<Link href={`${item.link}`} color='inherit'>
											{item.name}
										</Link>
									</Typography>
									<Typography variant='body1'>{item.content}</Typography>
								</Grid>
								<Grid item xs={12} md={6}>
									<img src={item.image} className={classes.projectImage} />
								</Grid>
							</Grid>
						);
					})}
				</Grid>
				<Typography variant='h6' className={classes.moreText}>
					This list will be perpetually expanding, keep visiting to new projects I am working on.
				</Typography>
			</Container>
		</div>
	);
};

export default Work;
