import db from "../database/Nusairadb.js";
import bcrypt from 'bcryptjs'; 

const Pengguna = {
  async findOneByEmail(email) {
    if (!email) {
      throw new Error("Email tidak boleh kosong atau undefined");
    }
    const [rows] = await db.execute("SELECT * FROM pengguna WHERE email = ?", [email]);
    return rows[0]; 
  },
};

export default Pengguna;
