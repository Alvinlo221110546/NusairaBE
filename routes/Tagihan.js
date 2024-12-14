import express from "express";
import TagihanController from "../controller/TagihanController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/tagihan", authMiddleware, TagihanController.addTagihan);
router.get("/tagihan", authMiddleware, TagihanController.getAllTagihan);
router.get("/semua/tagihan", TagihanController.getAllTagihan);
router.get("/tagihan/:id", authMiddleware, TagihanController.getTagihanById);
router.get("/tagihan/user/:user_id", authMiddleware, TagihanController.getTagihanByUserId);
router.put("/tagihan/:id", authMiddleware, TagihanController.updateTagihan);
router.delete("/tagihan/:id", authMiddleware, TagihanController.deleteTagihan);

export default router;
