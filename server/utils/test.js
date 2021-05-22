import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER,
});

const userExists = async (email) => {
	try {
		const user = await mailchimp.lists.getListMember(process.env.MAILCHIMP_LIST_ID, md5(email.toLowerCase()));
		// if (user.status === "subscribed") return true;
		console.log(user);
	} catch (error) {
		console.log(error);
	}
};

userExists("test@user.com");
