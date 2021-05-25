import { SEND_CONTACT_EMAIL } from "../actionTypes";
import * as api from "../api";

export const sendEmail = (formData) => async (dispatch) => {
	try {
		const { data } = await api.sendEmail(formData);
	} catch (error) {
		console.log(error);
	}
};
