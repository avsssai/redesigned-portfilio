import React from "react";
import useStyles from "./styles";
import "./blogTag.css";

const BlogTag = ({ tag }) => {
	const classes = useStyles();
	const ucfirst = (str) => {
		var firstLetter = str.substr(0, 1);
		return firstLetter.toUpperCase() + str.substr(1);
	};
	return <div className={`${classes.tag} ${tag}`}>{ucfirst(tag)}</div>;
};

export default BlogTag;
