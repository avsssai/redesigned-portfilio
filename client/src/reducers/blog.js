import { FETCHING_BEGIN, FETCHING_END, FETCH_ONE, REMOVE_BLOG } from "../actionTypes";

const initialState = {
	loading: false,
	blog: {},
	error: null,
};

const blog = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ONE:
			return {
				...state,
				loading: false,
				blog: action.payload,
			};
		case FETCH_ONE:
			return {
				...state,
				loading: false,
				blog: action.payload,
			};
		default:
			return state;
	}
};

export default blog;
