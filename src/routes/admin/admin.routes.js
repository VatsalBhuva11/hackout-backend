import modifyDoctor from "./modifyDoctor.routes.js";
import express from "express";
const router = express.Router();

router.use("/modifyDoctor", modifyDoctor);

export default router;