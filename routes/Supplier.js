import express from 'express';
import SupplierController from '../controller/SupplierController.js';

const supplierRoutes = express.Router();


supplierRoutes.post('/',  SupplierController.createSupplier);
supplierRoutes.get('/', SupplierController.getAllSuppliers);
supplierRoutes.get('/:id', SupplierController.getSupplierById);
supplierRoutes.put('/:id',  SupplierController.updateSupplier);
supplierRoutes.delete('/:id', SupplierController.deleteSupplier);
supplierRoutes.get('/province/:province', SupplierController.getSuppliersByProvince);
supplierRoutes.get('/location/:location', SupplierController.getSuppliersByLocation);

export default supplierRoutes;