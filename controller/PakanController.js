import DataPakan from '../models/DataPakan.js';


class DataPakanController {
    
    static async createDataPakan(req, res) {
        try {
            const data = req.body;
            const result = await DataPakan.save(data);
            res.status(200).json({
                message: "Data Pakan entry created successfully",
                data: result
            });
        } catch (error) {
            res.status(400).json({
                message: "Failed to create Data Pakan entry",
                errors: error.message
            });
        }
    }

    
    static async getAllDataPakan(req, res) {
        try {
            const result = await DataPakan.getAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Data Pakan entries",
                errors: error.message
            });
        }
    }

    static async getDataPakanByKolamId(req, res) {
        const { kolamId } = req.params;
        try {
            const result = await DataPakan.getAllByKolamId(kolamId);
            if (result.length === 0) {
                return res.status(404).json({
                    message: `No data found for kolam ID: ${kolamId}`
                });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Data Pakan by kolam ID",
                errors: error.message
            });
        }
    }
}

export default DataPakanController;
