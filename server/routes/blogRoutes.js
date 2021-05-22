import express from "express";
import { allBlogs, getBlog, addBlog, sendEmail, subscribeToEmail } from "../controllers/blogController.js";

const router = express.Router();

router.get("/all", allBlogs);
router.get("/blog/:searchString", getBlog);
router.post("/blog", addBlog);
router.post("/contact", sendEmail);
router.post("/subscribe", subscribeToEmail);

export default router;
