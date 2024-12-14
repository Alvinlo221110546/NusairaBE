import express from "express";
import TagihanController from "../controller/TagihanController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/tagihan", authMiddleware, TagihanController.addTagihan);
router.get("/tagihan", TagihanController.getAllTagihan);
router.get("/tagihan/:id", authMiddleware, TagihanController.getTagihanById);
router.put("/tagihan/:id", authMiddleware, TagihanController.updateTagihan);
router.delete("/tagihan/:id", authMiddleware, TagihanController.deleteTagihan);

export default router;
