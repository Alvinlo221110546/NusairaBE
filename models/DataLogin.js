import db from "../database/Nusairadb.js";

const Pengguna = {
  /**
   * @param {string} email 
   * @returns {Promise<Object|null>} 
   */
  async findOneByEmail(email) {
  console.log("Email parameter diterima:", email); 
  if (!email) {
    throw new Error("Email tidak boleh kosong atau undefined"); 
  }
  const [rows] = await db.execute("SELECT * FROM pengguna WHERE email = ?", [email]);
  return rows[0];
},


  /**
   * @param {string} name 
   * @param {string} email 
   * @param {string} password 
   * @param {string} [role="user"] 
   * @returns {Promise<Object>} 
   */
  async create(name, email, password, role = "user", no_hp, occupation) {
    const [result] = await db.execute(
      "INSERT INTO pengguna (name, email, password, role, no_hp, occupation) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, password, role, no_hp, occupation]
    );
    return result;
  }
  
};

export default Pengguna;
