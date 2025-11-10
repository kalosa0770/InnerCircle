import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    const user = await userModel.findById(userId).select("firstName lastName email");

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      userData: user
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
