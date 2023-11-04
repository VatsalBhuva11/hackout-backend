import express from "express";
import patientAuthRoutes from "./auth.routes.js"
import uploadPrompt from "../../controllers/patient/uploadSymptoms.controllers.js";
import patientPost from "./patientPost.routes.js"
import { patientAuthMiddleware } from "../../middlewares/auth.middleware.js"
const router = express.Router();

router.use("/auth", patientAuthRoutes);
router.use("/post", patientAuthMiddleware, patientPost);
router.post("/prompt", patientAuthMiddleware, uploadPrompt);

router.get("/check", patientAuthMiddleware, (req, res) => {
    res.send("Patient Authenticated!");
})

export default router;