import { FETCHING_BEGIN, FETCHING_END, FETCH_ONE } from "../actionTypes";

import * as api from "../api";

export const getBlog = (searchString) => async (dispatch) => {
	try {
		const { data } = await api.getBlog(searchString);
		dispatch({ type: FETCH_ONE, payload: data });
	} catch (error) {
		console.log(error);
	}
};
