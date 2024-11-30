// routes/AuthRoutes.js
import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

// Route untuk login
router.post('/login', AuthController.login);

export default router;