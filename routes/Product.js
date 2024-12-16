import express from 'express';
import ProductController from '../controller/ProductController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 
import authMiddleware from "../middleware/authMiddleware.js";

const productRoutes = express.Router();

productRoutes.post('/',adminAuthMiddleware, ProductController.createProduct);
productRoutes.get('/:supplierId',adminAuthMiddleware, ProductController.getProductsBySupplierId);
productRoutes.get('/',adminAuthMiddleware, ProductController.getAllProducts);  
productRoutes.get('/:supplierId',authMiddleware, ProductController.getProductsBySupplierId);
productRoutes.get('/',authMiddleware, ProductController.getAllProducts); 
productRoutes.put('/:id',adminAuthMiddleware, ProductController.updateProduct);
productRoutes.delete('/:id',adminAuthMiddleware, ProductController.deleteProduct);

export default productRoutes;
