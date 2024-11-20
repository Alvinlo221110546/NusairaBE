class Kematian {
    constructor(data) {
        this.kolam_id = data.kolam_id;
        this.tanggal_tebar = data.tanggal_tebar;
        this.umur = data.umur;
        // Memastikan jika data kosong, kita kirim null
        this.jumlah_ekor = data.jumlah_ekor === '' ? null : data.jumlah_ekor;
        this.total_berat = data.total_berat === '' ? null : data.total_berat;
        this.multiplier = data.multiplier === '' ? null : data.multiplier;
        this.size = this.calculateSize();
    }

    calculateSize() {
        // Jika total_berat atau multiplier kosong, kembalikan 0
        if (this.total_berat && this.multiplier) {
            return this.total_berat * this.multiplier;
        }
        return 0; // kembalikan 0 jika tidak ada total_berat atau multiplier
    }

    static async validate(data) {
        const errors = [];

        if (!data.tanggal_tebar) {
            errors.push("Tanggal tebar harus diisi.");
        }

        if (data.umur <= 0) {
            errors.push("Umur harus lebih dari 0.");
        }

        // Validasi jumlah_ekor atau total_berat + multiplier
        if (data.jumlah_ekor && (data.total_berat || data.multiplier)) {
            errors.push("Hanya salah satu dari Jumlah Ekor atau Total Berat dan Multiplier yang boleh diisi.");
        }

        if (!data.jumlah_ekor && !data.total_berat && !data.multiplier) {
            errors.push("Salah satu dari Jumlah Ekor atau Total Berat dan Multiplier harus diisi.");
        }

        // Validasi jika total_berat dan multiplier diisi
        if (data.total_berat && data.multiplier && data.total_berat <= 0) {
            errors.push("Total Berat harus lebih dari 0.");
        }

        if (data.total_berat && data.multiplier && data.multiplier <= 0) {
            errors.push("Multiplier harus lebih dari 0 saat Total Berat diisi.");
        }

        return errors;
    }

    static async save(data) {
        try {
            const validationErrors = await Kematian.validate(data);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(", "));
            }

            let size = 0; // Default size 0
            if (data.total_berat && data.multiplier) {
                size = data.total_berat * data.multiplier;
            }

            // Pastikan hanya salah satu yang diisi
            if (data.jumlah_ekor && (data.total_berat || data.multiplier)) {
                throw new Error("Hanya salah satu dari Jumlah Ekor atau Total Berat dan Multiplier yang boleh diisi.");
            }

            const query = `
                INSERT INTO kematian (kolam_id, tanggal_tebar, umur, jumlah_ekor, total_berat, multiplier, size)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [
                data.kolam_id,
                data.tanggal_tebar,
                data.umur,
                data.jumlah_ekor,
                data.total_berat === '' ? null : data.total_berat, // Kirim null jika kosong
                data.multiplier === '' ? null : data.multiplier, // Kirim null jika kosong
                size  
            ];

            const [result] = await db.execute(query, values);

            return {
                ...data,
                size,  
                id: result.insertId
            };
        } catch (error) {
            throw new Error(`Gagal menyimpan data kematian: ${error.message}`);
        }
    }

    static async getAll() {
        try {
            const query = 'SELECT * FROM kematian';
            const [result] = await db.execute(query);
            return result;
        } catch (error) {
            throw new Error(`Gagal mengambil data kematian: ${error.message}`);
        }
    }

    static async getById(id) {
        try {
            const query = 'SELECT * FROM kematian WHERE id = ?';
            const [result] = await db.execute(query, [id]); 
            return result[0]; 
        } catch (error) {
            throw new Error(`Gagal mengambil data kematian dengan ID ${id}: ${error.message}`);
        }
    }
}


export default Kematian;
