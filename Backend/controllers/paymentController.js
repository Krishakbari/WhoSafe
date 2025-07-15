import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createRazorpayOrder = async (req, res) => {
    try {
        const { amount } = req.body; // amount in rupees
        const options = {
            amount: amount * 100, // Razorpay needs paise
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`,
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json({ success: true, order });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create Razorpay order", error: err });
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            // save order or mark it as paid
            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            res.status(400).json({ success: false, message: "Payment verification failed" });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
