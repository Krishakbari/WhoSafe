// routes/auth.js
import express from 'express';
import { sendOtpController, verifyOtpController, resetPasswordController } from '../controllers/authController.js';

const router = express.Router();

router.post('/send-otp', sendOtpController);
router.post('/verify-otp', verifyOtpController);
router.post('/reset-password', resetPasswordController);


export default router;


