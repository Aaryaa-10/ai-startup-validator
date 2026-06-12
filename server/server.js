import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import startupRoutes from "./routes/startupRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected")).catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = process.env.PORT || 5000;


app.use("/api/auth", authRoutes);
app.use("/api/startup", startupRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});