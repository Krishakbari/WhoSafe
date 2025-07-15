import nodemailer from 'nodemailer';

export const handleContactForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,     // e.g., whosafeindia@gmail.com
                pass: process.env.SMTP_PASS,     // this is your App Password from Gmail
            },
        });

        // Email content
        const mailOptions = {
            from: email,
            to: process.env.SMTP_USER,  // Admin gets the message
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h3>Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "Failed to send message", error });
    }
};
