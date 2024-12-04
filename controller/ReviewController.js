import Review from '../models/DataReview.js';

class ReviewController {
  static async createReview(req, res) {
    try {
      const reviewData = req.body;
      const newReview = await Review.save(reviewData);
      res.status(200).json({
        status: 'success',
        message: 'Review berhasil disimpan',
        data: newReview,
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getReviewsBySupplierId(req, res) {
    try {
      const { supplierId } = req.params;
      const reviews = await Review.getBySupplierId(supplierId);
      if (reviews.length === 0) {
        return res.status(404).json({
          status: 'error',
          message: `Tidak ada review ditemukan untuk supplier dengan ID ${supplierId}.`,
        });
      }
      res.status(200).json({
        status: 'success',
        total: reviews.length,
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  static async getAllReviews(req, res) {
    try {
      const reviews = await Review.getAll();
      res.status(200).json({
        status: 'success',
        total: reviews.length,
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Gagal mengambil semua review.',
      });
    }
  }

  static async deleteReview(req, res) {
    try {
      const { id } = req.params;
      await Review.delete(id);
      res.status(200).json({
        status: 'success',
        message: 'Review berhasil dihapus',
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default ReviewController;
