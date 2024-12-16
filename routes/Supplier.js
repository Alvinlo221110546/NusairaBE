import express from 'express';
import SupplierController from '../controller/SupplierController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js'; 

const supplierRoutes = express.Router();


supplierRoutes.post('/', adminAuthMiddleware, SupplierController.createSupplier);
supplierRoutes.get('/', SupplierController.getAllSuppliers);
supplierRoutes.get('/:id', SupplierController.getSupplierById);
supplierRoutes.put('/:id',adminAuthMiddleware,  SupplierController.updateSupplier);
supplierRoutes.delete('/:id',adminAuthMiddleware, SupplierController.deleteSupplier);
supplierRoutes.get('/province/:province', SupplierController.getSuppliersByProvince);
supplierRoutes.get('/location/:location', SupplierController.getSuppliersByLocation);

export default supplierRoutes;