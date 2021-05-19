import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../../actions/blog";
import { REMOVE_BLOG } from "../../actionTypes";
import BlogTag from "./BlogTag/BlogTag";
import draftToHtml from "draftjs-to-html";
import useStyles from "./styles";
import moment from "moment";

const Blog = () => {
	const { searchString } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();
	useEffect(() => {
		dispatch(getBlog(searchString));
		return () => {
			dispatch({ type: REMOVE_BLOG });
		};
	}, []);
	const blog = useSelector((state) => state.blog.blog.blog);

	console.log(blog);
	return (
		<div>
			{blog ? (
				<Container fixed className={classes.blogContainer} maxWidth='md'>
					<div className={classes.blogTitle}>{blog.title}</div>
					<div className={classes.blogDetails}>
						<div className={classes.blogDate}>Published {moment(blog.date).fromNow()}</div>
						<div className={classes.blogTags}>
							{blog.tags.map((tag) => (
								<BlogTag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div
						className={classes.blogContent}
						dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(blog.content)) }}></div>
				</Container>
			) : (
				"Loading..."
			)}
		</div>
	);
};

export default Blog;
