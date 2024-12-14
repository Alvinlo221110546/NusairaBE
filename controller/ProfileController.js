import UserProfile from '../models/DataProfile.js';

class UserProfileController {

    static async getUserProfile(req, res) {
        const userId = req.user.id;
        try {
            const user = await UserProfile.getUserById(userId);
            if (!user) {
                return res.status(404).json({
                    message: `No user found with ID: ${userId}`
                });
            }
            res.status(200).json({
                foto_profile: user.foto_profile || '/default-profile.png', 
                name: user.name,
                pekerjaan: user.pekerjaan,
                jenis_kelamin: user.jenis_kelamin,
                lokasi: user.lokasi,
                email: user.email,
                no_hp: user.no_hp,
                created_at: user.created_at
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Failed to retrieve user profile",
                errors: error.message
            });
        }
    }

    static async updateUserProfile(req, res) {
        const userId = req.user.id;
        const { name, email, pekerjaan, jenis_kelamin, lokasi, no_hp, foto_profile, password } = req.body;
        
        console.log("Data yang Diterima untuk Update:", req.body);
        
        let formattedJenisKelamin = jenis_kelamin;
        if (jenis_kelamin === "Laki-Laki") {
            formattedJenisKelamin = "L";
        } else if (jenis_kelamin === "Perempuan") {
            formattedJenisKelamin = "P";
        }
    
        const updateData = { name, email, pekerjaan, jenis_kelamin: formattedJenisKelamin, lokasi, no_hp, foto_profile };
    
        if (password) {
            updateData.password = password;
        }
        
        try {
            const isUpdated = await UserProfile.updateUserProfile(userId, updateData);
            
            if (!isUpdated) {
                return res.status(404).json({
                    message: `User with ID ${userId} not found or no changes made.`,
                });
            }
    
            res.status(200).json({
                message: "User profile updated successfully.",
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Failed to update user profile.",
                errors: error.message,
            });
        }
    }
    
    
    static async deleteUserProfile(req, res) {
        const userId = req.user.id;
        try {
            const isDeleted = await UserProfile.deleteUserById(userId);
            if (!isDeleted) {
                return res.status(404).json({ message: `No user found with ID: ${userId}` });
            }
            res.status(200).json({ message: "User profile deleted successfully." });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Failed to delete user profile.",
                errors: error.message,
            });
        }
    }
}

export default UserProfileController;
