import userModel from '../models/userModel.js';

export const getMeController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select('-password -__v');

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("GET /auth/me error:", err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
