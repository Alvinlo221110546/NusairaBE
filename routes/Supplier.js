import express from 'express';
import SupplierController from '../controller/SupplierController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 
import authMiddleware from "../middleware/authMiddleware.js";

const supplierRoutes = express.Router();


supplierRoutes.post('/', adminAuthMiddleware, SupplierController.createSupplier);
supplierRoutes.get('/',adminAuthMiddleware, SupplierController.getAllSuppliers);
supplierRoutes.get('/:id',adminAuthMiddleware, SupplierController.getSupplierById);
supplierRoutes.get('/',authMiddleware, SupplierController.getAllSuppliers);
supplierRoutes.get('/:id',authMiddleware, SupplierController.getSupplierById);
supplierRoutes.put('/:id',adminAuthMiddleware,  SupplierController.updateSupplier);
supplierRoutes.delete('/:id',adminAuthMiddleware, SupplierController.deleteSupplier);
supplierRoutes.get('/province/:province', SupplierController.getSuppliersByProvince);
supplierRoutes.get('/location/:location', SupplierController.getSuppliersByLocation);

export default supplierRoutes;