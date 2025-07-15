import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config(); // make sure env vars are loaded

const otpStore = {}; // In-memory store (you can replace with Redis or DB later)

// 1. Send OTP to email
export const sendOtpController = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000);
        otpStore[email] = otp;

        // Configure Gmail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        });

        // Send OTP
        await transporter.sendMail({
            from: `"WhoSafe OTP" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "WhoSafe - OTP for Password Reset",
            text: `Hello,\n\nYour OTP for password reset is: ${otp}\n\nThis OTP will expire in 5 minutes.\n\nThanks,\nWhoSafe Team`
        });

        res.status(200).json({ success: true, message: "OTP sent to your email" });

    } catch (error) {
        console.error("Error sending OTP:", error.message);
        res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
};

// 2. Verify OTP
export const verifyOtpController = (req, res) => {
    const { email, otp } = req.body;
    if (otpStore[email] && otpStore[email].toString() === otp.toString()) {
        return res.json({ success: true, message: "OTP verified" });
    }
    return res.status(400).json({ success: false, message: "Invalid OTP" });
};

// 3. Reset password after OTP verification
export const resetPasswordController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        await userModel.findOneAndUpdate({ email }, { password: hash });

        delete otpStore[email];

        res.status(200).json({ success: true, message: "Password reset successfully" });
    } catch (error) {
        console.error("Error resetting password:", error.message);
        res.status(500).json({ success: false, message: "Error resetting password" });
    }
};
