// utils/smsService.js
import axios from "axios";

// Contoh pengiriman SMS menggunakan API eksternal
export const sendVerificationCode = async (phone, otp) => {
  try {
    const message = `Kode verifikasi Anda adalah: ${otp}`;
    
    // Kirim SMS menggunakan API pengirim SMS (misalnya Twilio, Nexmo, atau API SMS lainnya)
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
