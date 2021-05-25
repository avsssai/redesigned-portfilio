import { Button, Container, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getBlog } from "../../actions/blog";
import { deleteBlog } from "../../actions/blogs";
import { GOOGLE_LOGOUT, REMOVE_BLOG } from "../../actionTypes";
import BlogTag from "./BlogTag/BlogTag";
import draftToHtml from "draftjs-to-html";
import parse, { domToReact } from "html-react-parser";
import useStyles from "./styles";
import moment from "moment";
import Prism from "prismjs";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useDocumentTitle from "../../useDocumentTitle";

import decode from "jwt-decode";

import "./prism.css";

const Blog = () => {
	const { searchString } = useParams();
	useDocumentTitle(`${searchString} - Siva's Blog`);
	const dispatch = useDispatch();
	const classes = useStyles();
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		console.log("FETCH HIT");
		dispatch(getBlog(searchString));
		return () => {
			console.log("REMOVE HIT");

			dispatch({ type: REMOVE_BLOG });
		};
	}, [location]);

	const blog = useSelector((state) => state.blog.blog.blog);

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	const currentUser = useSelector((state) => state.auth);
	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [currentUser, location]);

	const logout = () => {
		dispatch({ type: GOOGLE_LOGOUT });
		history.push("/");
		setUser(null);
	};

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

	const deleteThisBlog = () => {
		dispatch(deleteBlog(blog._id));
		history.push("/blog");
	};

	const editThisBlog = () => {};
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
							{blog.tags.split(",").map((tag) => (
								<BlogTag key={tag} tag={tag} />
							))}
						</div>
					</div>
					{user && (
						<div>
							<Link
								to={{
									pathname: "/editor",
									state: blog,
								}}
								className={classes.editLink}>
								Edit
							</Link>
							<Button onClick={deleteThisBlog} color='secondary'>
								Delete
							</Button>
						</div>
					)}
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
