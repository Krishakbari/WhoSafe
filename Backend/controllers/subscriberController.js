// controllers/subscriberController.js
import subscriberModel from "../models/subscribeModel.js";
import nodemailer from 'nodemailer';


export const subscribeController = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(400).json({ success: false, message: "Email is required" });

    const exists = await subscriberModel.findOne({ email });
    if (exists) return res.status(409).json({ success: false, message: "Already subscribed" });

    await subscriberModel.create({ email });
    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe Error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const sendAnnouncementController = async (req, res) => {
  const { subject, message } = req.body;

  try {
    const subscribers = await subscriberModel.find({});
    const emails = subscribers.map((s) => s.email);

    if (emails.length === 0) {
      return res.status(400).json({ success: false, message: "No subscribers to notify" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"WhoSafe" <${process.env.SMTP_USER}>`,
      to: emails,
      subject: subject,
      text: message,
    });

    res.json({ success: true, message: "Announcement sent to all subscribers" });
  } catch (error) {
    console.error("Announcement Error:", error);
    res.status(500).json({ success: false, message: "Failed to send announcement", error: error.message });
  }
};
