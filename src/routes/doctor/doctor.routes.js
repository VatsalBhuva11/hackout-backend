import express from "express";
import doctorAuthRoutes from "./auth.routes.js"
import { doctorAuthMiddleware } from "../../middlewares/auth.middleware.js"
const router = express.Router();

router.use("/auth", doctorAuthRoutes);
router.get("/check", doctorAuthMiddleware, (req, res) => {
    res.send("Doctor Authenticated!");
})

export default router;