import {
	FETCHING_BEGIN,
	FETCHING_END,
	FETCH_ALL,
	ADD_BLOG,
} from "../actionTypes";

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
