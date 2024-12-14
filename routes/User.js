import express from 'express';
import UserController from '../controller/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/change-password', authMiddleware, UserController.changePassword);

export default router;
