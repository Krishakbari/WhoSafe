// controllers/googleLoginController.js
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const client = new OAuth2Client(); // no clientId needed for verification

export const googleLoginController = async (req, res) => {
  try {
    const { token } = req.body;

    // 1. Verify the token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // must match the frontend
    });

    const payload = ticket.getPayload(); // Get user info from Google
    const { email, name, sub: googleId } = payload;

    // 2. Find existing user
    let user = await userModel.findOne({ email });

    // 3. If not exist, create one
    if (!user) {
      user = new userModel({
        googleId,
        name,
        email,
        password: '', // not required for Google
      });
      await user.save();
    }

    // 4. Generate your JWT
    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({
      success: true,
      message: 'Google login successful',
      user,
      token: jwtToken,
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({
      success: false,
      message: 'Google login failed',
    });
  }
};
