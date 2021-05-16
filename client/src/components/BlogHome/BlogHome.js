import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import { getAllBlogs } from "../../actions/blogs";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const BlogHome = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBlogs());
	}, []);
	const classes = useStyles();
	const blogs = useSelector((state) => state.blogs.blogs.blogs);
	console.log("blogs", blogs);
	return (
		<div className={classes.blogHome}>
			<Container>
				<div className={classes.backToHome}>
					<Link to='/'>&#8592; Return to 🏡 Home</Link>
				</div>
				<Typography variant='h3'>Blog Home</Typography>
				<div className={classes.blogsContainer}>
					<Grid container spacing={3}>
						{!blogs
							? "Loading..."
							: blogs.map((blog) => (
									<Grid item xs={10} md={8}>
										<Paper className={classes.paper}>
											{blog.title}
										</Paper>
									</Grid>
							  ))}
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default BlogHome;
