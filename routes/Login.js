import express from "express";
import { registerUser, loginUser } from "../controller/LoginController.js";

const router = express.Router();

// Endpoint untuk registrasi
router.post("/register", registerUser);

// Endpoint untuk login
router.post("/login", loginUser);

export default router;
