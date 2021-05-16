import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import { getAllBlogs } from "../../actions/blogs";

const BlogHome = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBlogs());
	}, []);
	const blogs = useSelector((state) => state.blogs);
	console.log(blogs);
	return (
		<div>
			<div>
				<Container>
					<Typography variant='h3'>Blog Home</Typography>
				</Container>
			</div>
		</div>
	);
};

export default BlogHome;
