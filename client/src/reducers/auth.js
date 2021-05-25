import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "../actionTypes";

const auth = (state = { authData: null }, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN:
			localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
			return {
				...state,
				authData: action?.payload,
			};
		case GOOGLE_LOGOUT:
			localStorage.removeItem("profile");
			return {
				...state,
				authData: null,
			};

		default:
			return state;
	}
};

export default auth;
