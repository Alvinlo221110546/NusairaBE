const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/Nusairadb.js');

const Buku = sequelize.define('Buku', {
    judul: { type: DataTypes.STRING, allowNull: false },
    penulis: { type: DataTypes.STRING, allowNull: false },
    kategori: { type: DataTypes.STRING },
    tahun_terbit: { type: DataTypes.INTEGER },
    deskripsi: { type: DataTypes.TEXT },
    cover: { type: DataTypes.STRING },
    file_baca: { type: DataTypes.STRING },
    isi: { type: DataTypes.TEXT('long') }, // Untuk konten buku langsung
}, { tableName: 'buku' });

module.exports = Buku;
