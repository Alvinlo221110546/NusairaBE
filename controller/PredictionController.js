import { predictionService } from '../models/PredictionService.js';


export const getPredictions = async (req, res) => {
  try {
    const predictions = await predictionService.getPredictions();

    res.status(200).json(predictions);
  } catch (error) {
    console.error('Error getting predictions:', error);
    res.status(500).json({ message: 'Failed to retrieve predictions' });
  }
};
