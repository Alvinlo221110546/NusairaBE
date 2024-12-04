import Pengguna from '../models/DataPengguna.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class PenggunaController {
  async addPengguna(req, res) {
    const { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = req.body;

    if (!name || !email || !role || !password || !pekerjaan || !jenis_kelamin || !no_hp || !lokasi || !foto_profile) {
      return res.status(400).json({ message: 'Semua kolom harus diisi!' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const pengguna = { name, email, role, password: hashedPassword, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile };
      await Pengguna.save(pengguna);
      res.status(201).json({ message: 'Pengguna berhasil ditambahkan!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam menambahkan pengguna', error: err.message });
    }
  }

  async getAllPengguna(req, res) {
    try {
      const penggunaData = await Pengguna.getAll();
      if (penggunaData.length === 0) {
        return res.status(404).json({ message: 'Tidak ada pengguna yang ditemukan' });
      }
      res.status(200).json(penggunaData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengguna', error: err.message });
    }
  }

  async getPenggunaById(req, res) {
    const penggunaId = req.params.id;
    try {
      const pengguna = await Pengguna.getById(penggunaId);
      if (!pengguna) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }
      res.status(200).json(pengguna);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data pengguna', error: err.message });
    }
  }

  async updatePengguna(req, res) {
    const penggunaId = req.params.id;
    const { name, email, role, password, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile } = req.body;

    if (!name || !email || !role || !pekerjaan || !jenis_kelamin || !no_hp || !lokasi || !foto_profile) {
      return res.status(400).json({ message: 'Semua kolom harus diisi!' });
    }

    try {
      const updatedPengguna = { name, email, role, pekerjaan, jenis_kelamin, no_hp, lokasi, foto_profile };
      if (password) {
        updatedPengguna.password = await bcrypt.hash(password, 10);
      }
      await Pengguna.update(penggunaId, updatedPengguna);
      res.status(200).json({ message: 'Pengguna berhasil diperbarui!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam mengupdate pengguna', error: err.message });
    }
  }

  async deletePengguna(req, res) {
    const penggunaId = req.params.id;
    try {
      await Pengguna.delete(penggunaId);
      res.status(200).json({ message: 'Pengguna berhasil dihapus!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus pengguna', error: err.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email dan kata sandi harus diisi!' });
    }

    try {
      const pengguna = await Pengguna.getByEmail(email);
      if (!pengguna) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }

      const isMatch = await bcrypt.compare(password, pengguna.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Kata sandi salah' });
      }

      const token = jwt.sign({ id: pengguna.id, email: pengguna.email }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login berhasil', token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan saat autentikasi', error: err.message });
    }
  }
}

export default new PenggunaController();