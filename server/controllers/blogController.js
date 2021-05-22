import express from "express";
import Blog from "../models/BlogModel.js";
import { addContact } from "../utils/mailChimp.js";

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
		const { searchString } = req.params;
		console.log(req.params);
		const blog = await Blog.findOne({ searchString });
		if (!blog) {
			return res.status(404).json({
				message: "No Blog found",
			});
		}
		return res.status(200).json({
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

export const sendEmail = async (req, res) => {
	try {
		const data = req.body;
		console.log("hit", data);
		res.send("email sending successful.");
	} catch (error) {
		console.log(error);
	}
};

export const subscribeToEmail = async (req, res) => {
	try {
		await addContact(req.body);
		res.status(200).json({
			message: "Email added to the mail list.",
		});
	} catch (error) {
		console.log(error);
	}
};
