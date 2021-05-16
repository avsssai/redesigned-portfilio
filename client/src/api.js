import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000",
});

export const getAll = () => API.get("/blogs/all");
export const getBlog = (id) => API.get(`/blogs/blog/${id}`);
export const addBlog = (formData) => API.post(`/blogs/blog`, formData);
