import { FETCHING_BEGIN, FETCHING_END, FETCH_ALL, ADD_BLOG, FETCH_ONE, DELETE_BLOG, UPDATE_BLOG } from "../actionTypes";

import * as api from "../api";

export const getAllBlogs = () => async (dispatch) => {
	try {
		const { data } = await api.getAll();
		console.log("hit", data);
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

// export const getOne = (id) => async (dispatch) => {
// 	try {
// 		const { data } = await api.getBlog(id);
// 		dispatch({ type: FETCH_ALL, payload: data });
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const addBlog = (formData) => async (dispatch) => {
	try {
		const { data } = await api.addBlog(formData);
		dispatch({ type: ADD_BLOG, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteBlog = (id) => async (dispatch) => {
	try {
		console.log("DELETE ACTION HIT");
		await api.deleteBlog(id);
		dispatch({ type: DELETE_BLOG, payload: id });
	} catch (error) {
		console.log(error);
	}
};
export const updateBlog = (id, formData) => async (dispatch) => {
	try {
		const { data } = await api.updateBlog(id, formData);
		dispatch({ type: UPDATE_BLOG, payload: data });
	} catch (error) {
		console.log(error);
	}
};
