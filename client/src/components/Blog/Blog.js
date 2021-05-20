import { Container, Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBlog } from "../../actions/blog";
import { REMOVE_BLOG } from "../../actionTypes";
import BlogTag from "./BlogTag/BlogTag";
import draftToHtml from "draftjs-to-html";
import parse, { domToReact } from "html-react-parser";
import useStyles from "./styles";
import moment from "moment";
import Prism from "prismjs";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./prism.css";

const Blog = () => {
	const { searchString } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();
	const location = useLocation();
	useEffect(() => {
		console.log("FETCH HIT");
		dispatch(getBlog(searchString));
		return () => {
			console.log("REMOVE HIT");

			dispatch({ type: REMOVE_BLOG });
		};
	}, [location]);
	const blog = useSelector((state) => state.blog.blog.blog);
	useEffect(() => {
		Prism.hooks.add("before-sanity-check", function (env) {
			env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, "\n");
			env.code = env.element.textContent;
		});

		setTimeout(() => Prism.highlightAll(), 0);
	}, [blog]);

	const options = {
		replace: ({ attribs, children, name }) => {
			if (attribs && name === "pre") {
				return (
					<pre className='line-numbers'>
						<code className='language-js'>{domToReact(children, options)}</code>
					</pre>
				);
			}
		},
	};

	return (
		<div>
			{blog ? (
				<Container fixed className={classes.blogContainer} maxWidth='md'>
					<div className={classes.goBack}>
						<Link to='/blog'>
							<ArrowBackIcon />
							Go back to all blogs
						</Link>
					</div>
					<div className={classes.blogTitle}>{blog.title}</div>
					<div className={classes.blogDetails}>
						<div className={classes.blogDate}>Published {moment(blog.date).fromNow()}</div>
						<div className={classes.blogTags}>
							{blog.tags.map((tag) => (
								<BlogTag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<Divider />
					<div className={classes.blogContent}>{parse(draftToHtml(JSON.parse(blog.content)), options)}</div>
				</Container>
			) : (
				"Loading..."
			)}
		</div>
	);
};

// setTimeout(() => Prism.highlightAll(), 0);

export default Blog;

//{parse(draftToHtml(JSON.parse(blog.content)), options)}
//						{/* dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(blog.content)) }} */}

//{parse(draftToHtml(JSON.parse(blog.content, options)))}

// Prism.hooks.add("before-sanity-check", function (env) {
// 	env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, "\n");
// 	env.code = env.element.textContent;
// });
