class Siklus {
  constructor({
    kolamId,
    lamaPersiapan,
    totalTebar,
    metodePenebaranBenih,
    umurAwal,
    batasBiomassPerLuas,
    targetSize,
    targetSR,
    targetFCR,
    hargaPakan,
    jumlahAnco,
    metodePrediksiSR,
    catatan,
    tanggal,
  }) {
    this.kolamId = kolamId;
    this.lamaPersiapan = lamaPersiapan;
    this.totalTebar = totalTebar;
    this.metodePenebaranBenih = metodePenebaranBenih;
    this.umurAwal = umurAwal;
    this.batasBiomassPerLuas = batasBiomassPerLuas;
    this.targetSize = targetSize;
    this.targetSR = targetSR;
    this.targetFCR = targetFCR;
    this.hargaPakan = hargaPakan;
    this.jumlahAnco = jumlahAnco;
    this.metodePrediksiSR = metodePrediksiSR;
    this.catatan = catatan;
    this.tanggal = tanggal;
  }

  static validate(data) {
    const errors = [];
    if (!data.kolamId) errors.push("Kolam harus dipilih.");
    if (data.lamaPersiapan <= 0) errors.push("Lama persiapan harus lebih dari 0.");
    if (data.totalTebar <= 0) errors.push("Total tebar harus lebih dari 0.");
    if (data.jumlahAnco < 0) errors.push("Jumlah anco tidak boleh negatif.");
    if (!data.tanggal) errors.push("Tanggal harus diisi.");
    return errors;
  }

  static async save(data, pool) {
    const validationErrors = Siklus.validate(data);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(", "));
    }

    const result = await pool.promise().execute(
      'INSERT INTO lele_seger (kolamId, lamaPersiapan, totalTebar, metodePenebaranBenih, umurAwal, batasBiomassPerLuas, targetSize, targetSR, targetFCR, hargaPakan, jumlahAnco, metodePrediksiSR, catatan, tanggal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        data.kolamId,
        data.lamaPersiapan,
        data.totalTebar,
        data.metodePenebaranBenih,
        data.umurAwal,
        data.batasBiomassPerLuas,
        data.targetSize,
        data.targetSR,
        data.targetFCR,
        data.hargaPakan,
        data.jumlahAnco,
        data.metodePrediksiSR,
        data.catatan,
        data.tanggal
      ]
    );

    return result;
  }

  static async getAll(pool) {
    const [results] = await pool.promise().query('SELECT * FROM lele_seger');
    return results;
  }
}

export default Siklus;
