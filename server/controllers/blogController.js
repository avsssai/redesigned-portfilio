import express from "express";
import mongoose from "mongoose";
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
		const blogToSave = {
			...blog,
			author: req.userId,
		};
		const newBlog = new Blog(blogToSave);
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
		res.status(400).json({
			message: "Error sending email",
			error,
		});
	}
};

export const updateBlog = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedBlog = req.body;
		const blog = await Blog.findById(id);
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(404).send("No post with that ID.");
		}
		if (req.userId !== blog.author) {
			res.status(403).json({
				message: "You are not the author of the post.",
			});
		}

		await Blog.findByIdAndUpdate(id, updatedBlog, {
			new: true,
		});
		res.status(201).json({
			message: "Updated blog successfully.",
			updatedBlog,
		});
	} catch (error) {
		res.status(400).json({
			message: "Error Updating blog.",
			error,
		});
	}
};

export const deleteBlog = async (req, res) => {
	try {
		const { id } = req.params;
		const blog = await Blog.findById(id);
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(404).send("No post with that ID.");
		}
		if (req.userId !== blog.author) {
			res.status(403).json({
				message: "You are not the author of the post.",
			});
		}

		await Blog.findByIdAndDelete(id);
		res.status(201).json({
			message: "Deleted blog successfully.",
		});
	} catch (error) {
		res.status(400).json({
			message: "Error Deleting blog.",
			error,
		});
	}
};

export const subscribeToEmail = async (req, res) => {
	try {
		const message = await addContact(req.body);
		res.status(200).json({
			message,
		});
	} catch (error) {
		console.log(error);
	}
};
