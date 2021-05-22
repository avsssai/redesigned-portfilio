import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
	apiKey: "58633249a0a583727405a4381fb9b2c4-us6",
	server: "us6",
});

const listId = "dc1b527c49";

export const run = async () => {
	const response = await mailchimp.ping.get();
	console.log(response);
};

export const addContact = async ({ firstName, lastName, email }) => {
	/* 
	TODO
	1. check if the email already exists
	2. if the user exists, send response saying, user already exists
	3. else add user to mail list.
	*/
	const response = await mailchimp.lists.addListMember(listId, {
		email_address: email,
		status: "subscribed",
		merge_fields: {
			FNAME: firstName,
			LNAME: lastName,
		},
	});

	console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
};

export const unsubscribe = async (subscriberHash) => {
	const response = await mailchimp.lists.updateListMember(listId, subscriberHash, {
		status: "unsubscribed",
	});

	console.log(`This user is now ${response.status}.`);
};
