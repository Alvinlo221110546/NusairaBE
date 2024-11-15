import Kematian from '../models/DataKematian.js';

class KematianController {
    
    static async tambahDataKematian(req, res) {
      console.log('Data received:', req.body);
      const data = req.body;
        try {
          
            const result = await Kematian.save(data);
            res.status(200).json({ message: 'Data kematian berhasil ditambahkan.', result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllDataKematian(req, res) {
        try {
            const results = await Kematian.getAll();
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default KematianController;
