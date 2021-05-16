import express from "express";
import Blog from "../models/BlogModel.js";

export const allBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.status(200).json({
			message: "All the blogs",
			blogs,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getBlog = async (req, res) => {
	try {
		const { id } = req.params;
		const blog = await Blog.findById(id);
		if (!blog) {
			res.status(404).json({
				message: "No Blog found",
			});
		}
		res.status(200).json({
			message: "Blog Found.",
			blog,
		});
	} catch (error) {
		console.log(error);
	}
};

export const addBlog = async (req, res) => {
	try {
		const blog = req.body;
		const newBlog = new Blog(blog);
		await newBlog.save();
		res.status(201).json({
			message: "New Blog created successfully.",
			blog: newBlog,
		});
	} catch (error) {
		console.log(error);
	}
};
