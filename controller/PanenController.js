import DataPanen from '../models/DataPanen.js';


class DataPanenController {
  
    static async createDataPanen(req, res) {
        try {
            const data = req.body;
            const result = await DataPanen.save(data);
            res.status(201).json({
                message: "Data Panen entry created successfully",
                data: result
            });
        } catch (error) {
            res.status(400).json({
                message: "Failed to create Data Panen entry",
                errors: error.message
            });
        }
    }

    
    static async getAllDataPanen(req, res) {
        try {
            const result = await DataPanen.getAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Data Panen entries",
                errors: error.message
            });
        }
    }
}

export default DataPanenController;
