import Penyakit from '../models/DataPenyakit.js';


class PenyakitController {
    
    static async createPenyakit(req, res) {
        try {
            const data = req.body;
            const result = await Penyakit.save(data);
            res.status(201).json({
                message: "Penyakit entry created successfully",
                data: result
            });
        } catch (error) {
            res.status(400).json({
                message: "Failed to create Penyakit entry",
                errors: error.message
            });
        }
    }

   
    static async getAllPenyakit(req, res) {
        try {
            const result = await Penyakit.getAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                message: "Failed to retrieve Penyakit entries",
                errors: error.message
            });
        }
    }
}

export default PenyakitController;
