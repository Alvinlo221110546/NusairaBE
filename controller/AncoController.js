import AncoModel from '../models/DataAnco.js'; 
class AncoController {
  
  static async saveAnco(req, res) {
    try {
      const data = req.body; 
      const savedAnco = await AncoModel.save(data);

     
      res.status(201).json({
        message: 'Data Anco berhasil disimpan',
        data: savedAnco
      });
    } catch (error) {
    
      console.error('Error saving Anco data:', error);
      res.status(400).json({
        message: 'Gagal menyimpan data Anco',
        error: error.message
      });
    }
  }

 
  static async getAllAnco(req, res) {
    try {
      const ancoData = await AncoModel.getAll();
      res.status(200).json(ancoData);
    } catch (error) {
      console.error('Error fetching Anco data:', error);
      res.status(400).json({
        message: 'Gagal mengambil data Anco',
        error: error.message
      });
    }
  }

  static async getAncoById(req, res) {
    const { id } = req.params; 
    try {
      const anco = await AncoModel.getById(id);
      
      if (!anco) {
        return res.status(404).json({ message: 'Data Anco tidak ditemukan' });
      }

      res.status(200).json(anco);
    } catch (error) {
      console.error('Error fetching Anco data by ID:', error);
      res.status(400).json({
        message: 'Gagal mengambil data Anco',
        error: error.message
      });
    }
  }
}

export default AncoController;
