import express from "express";
import patientRoutes from "./patient/patient.routes.js"
import doctorRoutes from "./doctor/doctor.routes.js"
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Working!");
})

router.use("/patient", patientRoutes);
router.use("/doctor", doctorRoutes);

export default router;