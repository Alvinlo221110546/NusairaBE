
import db from '../database/Nusairadb.js';

class Kolam {
    constructor(namaKolam, tipeKolam, panjang, lebar, kedalaman) {
        this.namaKolam = namaKolam;
        this.tipeKolam = tipeKolam;
        this.panjang = panjang;
        this.lebar = lebar;
        this.kedalaman = kedalaman;
        this.size = this.hitungSize(); 
    }

   
    hitungSize() {
        return this.panjang * this.lebar * this.kedalaman;
    }

    simpan() {
        const query = `INSERT INTO kolam (nama_kolam, tipe_kolam, panjang, lebar, kedalaman, size) VALUES (?, ?, ?, ?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [this.namaKolam, this.tipeKolam, this.panjang, this.lebar, this.kedalaman, this.size], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

class Tambak {
    constructor(nama, negara, provinsi, kabupaten, alamat, jumlahKolam) {
        this.nama = nama;
        this.negara = negara;
        this.provinsi = provinsi;
        this.kabupaten = kabupaten;
        this.alamat = alamat;
        this.jumlahKolam = jumlahKolam;
        this.kolamDetails = [];
    }

    
    tambahKolam(jumlahKolam) {
        this.jumlahKolam = jumlahKolam;
        this.kolamDetails = Array.from({ length: jumlahKolam }, (_, index) => new Kolam(
            `Kolam ${index + 1}`, 
            'Tipe Kolam Default', 
            10, 
            5, 
            2  
        ));
    }

   
    simpan() {
        const query = `INSERT INTO tambak (nama, negara, provinsi, kabupaten, alamat, jumlah_kolam) VALUES (?, ?, ?, ?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [this.nama, this.negara, this.provinsi, this.kabupaten, this.alamat, this.jumlahKolam], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

   
    simpanKolam() {
        return Promise.all(this.kolamDetails.map(kolam => kolam.simpan()));
    }
}

export { Kolam, Tambak };
