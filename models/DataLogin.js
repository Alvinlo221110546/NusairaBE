import db from "../database/Nusairadb.js";

const Pengguna = {
  /**
   * Mencari pengguna berdasarkan email
   * @param {string} email - Email pengguna
   * @returns {Promise<Object|null>} - Data pengguna atau null jika tidak ditemukan
   */
  async findOneByEmail(email) {
  console.log("Email parameter diterima:", email); // Debug log
  if (!email) {
    throw new Error("Email tidak boleh kosong atau undefined"); // Validasi tambahan
  }
  const [rows] = await db.execute("SELECT * FROM pengguna WHERE email = ?", [email]);
  return rows[0];
},


  /**
   * Membuat pengguna baru
   * @param {string} name - Nama pengguna
   * @param {string} email - Email pengguna
   * @param {string} password - Password yang sudah di-hash
   * @param {string} [role="user"] - Role pengguna (default: "user")
   * @returns {Promise<Object>} - Hasil operasi insert
   */
  async create(name, email, password, role = "user") {
    const [result] = await db.execute(
      "INSERT INTO pengguna (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role]
    );
    return result; // Mengembalikan hasil insert
  }
};

export default Pengguna;
