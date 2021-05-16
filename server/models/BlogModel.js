import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
	title: {
		type: String,
	},
	content: String,
	date: {
		type: Date,
		default: Date.now,
	},
	searchString: String,
	tags: [String],
});

const BlogModel = mongoose.model("Blog", BlogSchema);
export default BlogModel;
