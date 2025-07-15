// utils/sendAnnouncement.js
import nodemailer from "nodemailer";
import subscriberModel from "../models/subscribeModel";

export const sendAnnouncementToAll = async (subject, message) => {
  const subscribers = await subscriberModel.find({});
  const emails = subscribers.map((sub) => sub.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: `"WhoSafe" <${process.env.SMTP_USER}>`,
    to: emails, // Use BCC for privacy in production
    subject,
    text: message
  });
};
