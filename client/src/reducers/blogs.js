import { FETCHING_BEGIN, FETCHING_END, FETCH_ALL, ADD_BLOG, DELETE_BLOG, UPDATE_BLOG } from "../actionTypes";

let initialState = {
	loading: false,
	blogs: [],
	error: null,
};

const blogs = (state = initialState, action) => {
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
		case DELETE_BLOG:
			const blogsAfterDelete = state.blogs.blogs.filter((blog) => blog._id !== action.payload);
			console.log("DELETED?", state.blogs, action.payload);
			return {
				...state,
				blogsAfterDelete,
				loading: false,
			};
		case UPDATE_BLOG:
			const blogsAfterUpdate = state.blogs.filter((blog) =>
				blog._id === action.payload._id ? action.payload : blog
			);
			return {
				...state,
				blogs: blogsAfterUpdate,
				loading: false,
			};

		default:
			return state;
	}
};

export default blogs;
