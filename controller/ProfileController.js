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
            console.log(user); 
            res.status(200).json({
                profilePicture: user.profilePicture || '/default-profile.png',
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
