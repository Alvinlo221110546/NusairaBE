import express from 'express';
import ProductController from '../controller/ProductController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const productRoutes = express.Router();

productRoutes.post('/',adminAuthMiddleware, ProductController.createProduct);
productRoutes.get('/:supplierId', ProductController.getProductsBySupplierId);
productRoutes.get('/', ProductController.getAllProducts);  
productRoutes.put('/:id',adminAuthMiddleware, ProductController.updateProduct);
productRoutes.delete('/:id',adminAuthMiddleware, ProductController.deleteProduct);

export default productRoutes;
