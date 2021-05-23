import express from "express";
import {
	allBlogs,
	getBlog,
	addBlog,
	sendEmail,
	subscribeToEmail,
	updateBlog,
	deleteBlog,
} from "../controllers/blogController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/all", allBlogs);
router.get("/blog/:searchString", getBlog);
router.post("/blog", auth, addBlog);
router.patch("/blog/:id", auth, updateBlog);
router.delete("/blog/:id", deleteBlog);
router.post("/contact", sendEmail);
router.post("/subscribe", subscribeToEmail);

export default router;
