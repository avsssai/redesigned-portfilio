import express from "express";
import { allBlogs, getBlog, addBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/all", allBlogs);
router.get("/blog/:id", getBlog);
router.post("/blog", addBlog);

export default router;
