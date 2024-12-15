import Contact from '../models/DataContact.js';

class ContactController {
  static async createMessage(req, res) {
    try {
      const { nama, email, subjek, pesan } = req.body;

      const validationErrors = Contact.validate({ nama, email, subjek, pesan });
      if (validationErrors.length > 0) {
        return res.status(400).json({
          status: 'error',
          message: 'Validasi gagal',
          errors: validationErrors
        });
      }

      const result = await Contact.save({
        nama,
        email,
        subjek,
        pesan
      });

      res.status(200).json({
        status: 'success',
        message: 'Pesan berhasil dikirim',
        data: result
      });
    } catch (error) {
      console.error('Error creating message:', error);
      res.status(500).json({
        status: 'error',
        message: 'Gagal mengirim pesan',
        error: error.message
      });
    }
  }

  static async getAllMessages(req, res) {
    try {
      const messages = await Contact.getAll();
      res.status(200).json({
        status: 'success',
        data: messages
      });
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({
        status: 'error',
        message: 'Gagal mengambil pesan',
        error: error.message
      });
    }
  }

  static async getUnreadMessages(req, res) {
    try {
      const unreadMessages = await Contact.getUnreadMessages();
      res.status(200).json({
        status: 'success',
        data: unreadMessages
      });
    } catch (error) {
      console.error('Error fetching unread messages:', error);
      res.status(500).json({
        status: 'error',
        message: 'Gagal mengambil pesan yang belum dibaca',
        error: error.message
      });
    }
  }

  static async markMessageAsRead(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          status: 'error',
          message: 'ID pesan diperlukan'
        });
      }

      const result = await Contact.markAsRead(id);
      
      res.status(200).json({
        status: 'success',
        message: 'Pesan berhasil ditandai sebagai sudah dibaca',
        data: result
      });
    } catch (error) {
      console.error('Error marking message as read:', error);
      res.status(500).json({
        status: 'error',
        message: 'Gagal menandai pesan',
        error: error.message
      });
    }
  }


  static async deleteMessage(req, res) {
    try {
      const { id } = req.params; 
      if (!id) {
        return res.status(400).json({
          status: 'error',
          message: 'ID pesan diperlukan untuk menghapus pesan',
        });
      }

      const result = await Contact.delete(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({
          status: 'error',
          message: `Pesan dengan ID ${id} tidak ditemukan`,
        });
      }

      res.status(200).json({
        status: 'success',
        message: `Pesan dengan ID ${id} berhasil dihapus`,
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({
        status: 'error',
        message: 'Gagal menghapus pesan',
        error: error.message,
      });
    }
  }

}

export default ContactController;