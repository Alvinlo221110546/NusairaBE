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
  
};

export default Pengguna;
