//Masih Tahap Pengembangan
import axios from "axios";

export const sendVerificationCode = async (phone, otp) => {
  try {
    const message = `Kode verifikasi Anda adalah: ${otp}`;
    

    await axios.post("https://api.twillo.com/send", {
      phone,
      message,
    });

    console.log(`Kode OTP ${otp} telah dikirim ke ${phone}`);
  } catch (error) {
    console.error("Error saat mengirim OTP:", error);
    throw new Error("Gagal mengirim OTP");
  }
};
