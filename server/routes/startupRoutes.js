import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import model from "../services/geminiService.js";

import {
  analyzeStartup,
  getStartupHistory,
  deleteStartup,
  getStartupById,
} from "../controllers/startupController.js";

const router = express.Router();

router.get("/test", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

router.get("/gemini-test", async (req, res) => {
  try {
    const result = await model.generateContent("Hello");

    res.json({
      response: result.response.text(),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/analyze", protect, analyzeStartup);

router.get("/history", protect, getStartupHistory);

router.delete("/:id", protect, deleteStartup);

router.get("/:id", protect, getStartupById);

export default router;