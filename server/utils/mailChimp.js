import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";
import dotenv from "dotenv";
dotenv.config();

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER,
});

const listId = process.env.MAILCHIMP_LIST_ID;

export const run = async () => {
	const response = await mailchimp.ping.get();
	console.log(response);
};

const userExists = async (email) => {
	try {
		const user = await mailchimp.lists.getListMember(listId, md5(email.toLowerCase()));
		if (user.status === "subscribed") return true;
	} catch (error) {
		if (error.status === 404) return false;
	}
};

export const addContact = async ({ firstName, lastName, email }) => {
	/* 
	TODO
	1. check if the email already exists
	2. if the user exists, send response saying, user already exists
	3. else add user to mail list.
	*/
	try {
		const user = await userExists();
		if (user) {
			console.log("user exists.", user);
			return "User's email already exists.";
		} else {
			const response = await mailchimp.lists.addListMember(listId, {
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			});

			console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
			return "User subscribed successfully!";
		}
	} catch (error) {
		console.log("USER EXISTS");
		return "User already exists.";
	}
};

export const unsubscribe = async (subscriberHash) => {
	const response = await mailchimp.lists.updateListMember(listId, subscriberHash, {
		status: "unsubscribed",
	});

	console.log(`This user is now ${response.status}.`);
};
