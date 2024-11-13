import AncoModel from '../models/DataAnco.js';

class AncoController {
  
  async addAnco(req, res) {
    try {
      const { pilihKolam, tanggalPanenParsial, waktuPemberianPakan, waktuCekAnco, catatan } = req.body;

      if (!pilihKolam || !tanggalPanenParsial || !waktuPemberianPakan || !waktuCekAnco || !catatan) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const newAnco = await AncoModel.save({
        pilihKolam,
        tanggalPanenParsial,
        waktuPemberianPakan,
        waktuCekAnco,
        catatan
      });

      return res.status(201).json(newAnco);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

 
  async getAllAncos(req, res) {
    try {
      const ancos = await AncoModel.getAll();
      return res.status(200).json(ancos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  
  async getAncoById(req, res) {
    try {
      const { id } = req.params;
      const anco = await AncoModel.getById(Number(id));

      if (!anco) {
        return res.status(404).json({ error: 'Anco not found' });
      }

      return res.status(200).json(anco);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }
}

export default new AncoController();
