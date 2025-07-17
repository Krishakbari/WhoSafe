import express from 'express';
import { requiredSignIn } from '../middlewares/authMiddleware.js';
import { getMeController } from '../controllers/referalController.js';

const router = express.Router();

router.get('/me', requiredSignIn, getMeController); // 👈 This is the route you're asking for

export default router;