import express from "express";
import patientAuthRoutes from "./auth.routes.js"
import { patientAuthMiddleware } from "../../middlewares/auth.middleware.js"
const router = express.Router();

router.use("/auth", patientAuthRoutes);
router.get("/check", patientAuthMiddleware, (req, res) => {
    res.send("Patient Authenticated!");
})

export default router;