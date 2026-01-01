import express from "express";
import upload from "../middleware/upload.js";
import protect from "../middleware/authMiddleware.js";
import { register, login, updateProfile } from "../controllers/userControl.js";

const router = express.Router();

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
// Update Profile
router.put("/profile/:id", upload.single("profileImage"), updateProfile);

export default router;
