import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../../actions/blog";
import { REMOVE_BLOG } from "../../actionTypes";

const Blog = () => {
	const { searchString } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBlog(searchString));
		return () => {
			dispatch({ type: REMOVE_BLOG });
		};
	}, []);
	const blog = useSelector((state) => state);
	console.log(blog);
	return <div></div>;
};

export default Blog;
