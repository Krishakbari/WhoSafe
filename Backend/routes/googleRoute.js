import express from 'express';
import { googleLoginController } from '../controllers/googleController.js';

const router = express.Router();

router.post('/auth/google-login', googleLoginController);

export default router;
