import Supplier from '../models/DataSupplier.js';

class SupplierController {
  static async createSupplier(req, res) {
    try {
      const supplierData = req.body;
      
      if (req.file) {
        supplierData.image = req.file.path;
      }

      const newSupplier = await Supplier.save(supplierData);
      res.status(200).json({
        status: 'success',
        message: 'Supplier berhasil dibuat',
        data: newSupplier
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getAllSuppliers(req, res) {
    try {
      const suppliers = await Supplier.getAll();
      res.status(200).json({
        status: 'success',
        total: suppliers.length,
        data: suppliers
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getSupplierById(req, res) {
    try {
      const { id } = req.params;
      const supplier = await Supplier.getById(id);
      res.status(200).json({
        status: 'success',
        data: supplier
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async updateSupplier(req, res) {
    try {
      const { id } = req.params;
      const supplierData = req.body;
      
      if (req.file) {
        supplierData.image = req.file.path;
      }

      await Supplier.update(id, supplierData);
      res.status(200).json({
        status: 'success',
        message: 'Supplier berhasil diperbarui'
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async deleteSupplier(req, res) {
    try {
      const { id } = req.params;
      await Supplier.delete(id);
      res.status(200).json({
        status: 'success',
        message: 'Supplier berhasil dihapus'
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getSuppliersByProvince(req, res) {
    try {
      const { province } = req.params;
      const suppliers = await Supplier.getByProvince(province);
      res.status(200).json({
        status: 'success',
        total: suppliers.length,
        data: suppliers
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getSuppliersByLocation(req, res) {
    try {
      const { location } = req.params;
      const suppliers = await Supplier.getByLocation(location);
      res.status(200).json({
        status: 'success',
        total: suppliers.length,
        data: suppliers
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }
}

export default SupplierController;