import express from 'express';
import ProductController from '../controller/ProductController.js';

const productRoutes = express.Router();

productRoutes.post('/:supplierId', ProductController.createProduct);
productRoutes.get('/:supplierId', ProductController.getProductsBySupplierId);
productRoutes.get('/', ProductController.getAllProducts);  
productRoutes.put('/:id', ProductController.updateProduct);
productRoutes.delete('/:id', ProductController.deleteProduct);

export default productRoutes;
