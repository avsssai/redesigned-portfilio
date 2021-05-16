import {
	FETCHING_BEGIN,
	FETCHING_END,
	FETCH_ALL,
	ADD_BLOG,
} from "../actionTypes";

let initialState = {
	loading: false,
	blogs: [],
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_BEGIN:
			return { ...state, loading: true };
		case FETCHING_END:
			return { ...state, loading: false };
		case FETCH_ALL:
			return { ...state, blogs: action.payload, loading: false };
		case ADD_BLOG:
			return {
				...state,
				blogs: [...state.blogs, action.payload],
				loading: false,
			};
		default:
			return state;
	}
};
