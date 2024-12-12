import express from 'express';
import UserProfileController from '../controller/ProfileController.js';
import verifyToken from '../middleware/authMiddleware.js';
import multer from 'multer';

// Setup multer untuk upload gambar profil
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/profile', verifyToken, UserProfileController.getUserProfile);
router.put('/profile', verifyToken, upload.single('foto_profile'), UserProfileController.updateUserProfile); // Ganti profilePicture dengan foto_profile
router.delete('/profile', verifyToken, UserProfileController.deleteUserProfile);

export default router;
