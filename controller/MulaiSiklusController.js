import Siklus from '../models/DataMulaiSiklus.js';

class SiklusController {
    
    async addSiklus(req, res) {
        const data = req.body;

        try {
            
            const result = await Siklus.save(data);
            res.status(201).json({ message: 'Siklus berhasil ditambahkan', result });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    
    async getAllSiklus(req, res) {
        try {
            const siklus = await Siklus.getAll();
            res.status(200).json(siklus);
        } catch (err) {
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

export default new SiklusController();
