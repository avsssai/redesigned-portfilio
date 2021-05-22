import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000",
});

export const getAll = () => API.get("/blogs/all");
export const getBlog = (searchString) => API.get(`/blogs/blog/${searchString}`);
export const addBlog = (formData) => API.post(`/blogs/blog`, formData);
export const sendEmail = (formData) => API.post("/blogs/contact", formData);
export const subscribe = (formData) => API.post("/blogs/subscribe", formData);
