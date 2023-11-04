import createPost from "../../controllers/patient/post.controllers.js";
import express from "express";
const router = express.Router();

router.post("/create", createPost);

export default router;