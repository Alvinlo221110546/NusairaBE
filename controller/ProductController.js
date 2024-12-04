import Product from '../models/DataProduct.js';

class ProductController {
  static async createProduct(req, res) {
    try {
      const productData = req.body;
      
      if (req.file) {
        productData.image = req.file.path;
      }

      const newProduct = await Product.save(productData);
      res.status(200).json({
        status: 'success',
        message: 'Produk berhasil dibuat',
        data: newProduct
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getProductsBySupplierId(req, res) {
    try {
      const { supplierId } = req.params;
      const products = await Product.getProductsBySupplierId(supplierId);
      res.status(200).json({
        status: 'success',
        total: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await Product.getAll();
      res.status(200).json({
        status: 'success',
        total: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const productData = req.body;
      
      if (req.file) {
        productData.image = req.file.path;
      }

      await Product.updateProduct(id, productData);
      res.status(200).json({
        status: 'success',
        message: 'Produk berhasil diperbarui'
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await Product.deleteProduct(id);
      res.status(200).json({
        status: 'success',
        message: 'Produk berhasil dihapus'
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message
      });
    }
  }
}

export default ProductController;
