import dotenv from "dotenv";
import express, { urlencoded } from "express";
import cors from 'cors';
import router from '../src/routes/index.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}! 🚀`);
})