import express from "express";
import { verifyDoctor } from "../../controllers/admin/modifyDoctor.controllers.js";
const router = express.Router();


router.post("/verify", verifyDoctor);

export default router;