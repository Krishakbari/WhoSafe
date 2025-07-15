import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../controllers/blogController.js";
import {upload} from "../middlewares/uploadMiddleware.js"
import { adminOnly, requiredSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/",requiredSignIn,adminOnly, upload.single("image"), createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", requiredSignIn, adminOnly, upload.single("image"), updateBlog);
router.delete("/:id", requiredSignIn, adminOnly, deleteBlog);


export default router;
