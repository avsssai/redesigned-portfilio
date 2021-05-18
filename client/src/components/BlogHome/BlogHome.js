import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import { getAllBlogs } from "../../actions/blogs";
import { Link } from "react-router-dom";
import moment from "moment";
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
				<div className={classes.blogsContainer}>
					<Grid container spacing={3} justify='center' alignItems='stretch'>
						{!blogs
							? "Loading..."
							: blogs.map((blog) => (
									<Grid item xs={12} md={8} key={blog.searchString}>
										<Paper className={classes.paper}>
											<Grid container justify='space-between' alignItems='stretch' spacing={2}>
												<Grid item xs={11} sm={8}>
													<div className={classes.blogTitle}>
														<Link to={`/blog/${blog.searchString}`}>{blog.title}</Link>
													</div>
												</Grid>
												<Grid item xs={11} sm={3} className={classes.blogInfo}>
													<div className={classes.blogTag}>{blog.tags[1]}</div>
													<div className={classes.blogDate}>
														{moment(blog.date).fromNow()}
													</div>
												</Grid>
											</Grid>
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
