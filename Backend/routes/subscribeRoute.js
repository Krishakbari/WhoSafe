// routes/subscriberRoute.js
import express from "express";
import { sendAnnouncementController, subscribeController } from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/", subscribeController);
router.post("/announce", sendAnnouncementController); // new

export default router;
