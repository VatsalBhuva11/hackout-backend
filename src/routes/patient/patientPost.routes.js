import { createPost, upvoteAnswer } from "../../controllers/patient/post.controllers.js";
import { patientOrDoctorAuthMiddleware, patientAuthMiddleware } from "../../middlewares/auth.middleware.js"

import express from "express";
const router = express.Router();

router.post("/create",patientAuthMiddleware ,createPost);
router.post("/:answerId/upvote", patientOrDoctorAuthMiddleware, upvoteAnswer);

export default router;