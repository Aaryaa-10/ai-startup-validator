import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);



router.get("gemini-test", async (req, res) => {
    const result = await model.generateContent("Give me 3 startup ideas");
    res.json({
        response : result.response.text(),
    });
});

export default router;

