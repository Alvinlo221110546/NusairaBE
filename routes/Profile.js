import express from 'express';
import UserProfileController from '../controller/ProfileController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', verifyToken, UserProfileController.getUserProfile);
router.put('/profile', verifyToken, UserProfileController.updateUserProfile);
router.delete('/profile', verifyToken, UserProfileController.deleteUserProfile);

export default router;
