import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
	}
	return req;
});

export const getAll = () => API.get("/blogs/all");
export const getBlog = (searchString) => API.get(`/blogs/blog/${searchString}`);
export const addBlog = (formData) => API.post(`/blogs/blog`, formData);
export const deleteBlog = (id) => API.delete(`/blogs/blog/${id}`);
export const updateBlog = (id, formData) => API.patch(`/blogs/blog/${id}`, formData);
export const sendEmail = (formData) => API.post("/blogs/contact", formData);
export const subscribe = (formData) => API.post("/blogs/subscribe", formData);
