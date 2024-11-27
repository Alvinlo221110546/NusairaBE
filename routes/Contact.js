import express from 'express';
import ContactController from '../controller/ContactController.js';

const router = express.Router();


router.post('/send', ContactController.createMessage);
router.get('/messages', ContactController.getAllMessages);
router.get('/unread', ContactController.getUnreadMessages);
router.put('/mark-read/:id', ContactController.markMessageAsRead);
router.delete('/messages/:id', ContactController.deleteMessage);

export default router;