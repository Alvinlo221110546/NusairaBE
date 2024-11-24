import PredictionModel from '../models/DataPrediksi.js';

class PredictionController {
  static async getPredictionsByProvince(req, res) {
    const { province } = req.query; 
    if (!province) {
      return res.status(400).json({ message: 'Province is required' });
    }

    try {
      const validProvinces = ['JAWA BARAT', 'JAWA TENGAH', 'JAWA TIMUR'];
      if (!validProvinces.includes(province)) {
        return res.status(400).json({ message: 'Invalid province' });
      }

      const predictions = await PredictionModel.getPredictionsByProvince(province);
      return res.status(200).json(predictions);
    } catch (error) {
      console.error('Error in PredictionController:', error);
      return res.status(500).json({ message: 'Failed to retrieve predictions' });
    }
  }
}

export default PredictionController;
