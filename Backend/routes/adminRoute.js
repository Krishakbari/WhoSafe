import express from "express";
import { getAllOrdersForAdmin, getAllUsers } from "../controllers/adminController.js";
import { requiredSignIn, adminOnly } from "../middlewares/authMiddleware.js";
import orderModel from "../models/orderModel.js";

const router = express.Router();

// ✅ GET /api/admin/orders - Admin can see all orders
router.get("/orders", requiredSignIn, adminOnly, getAllOrdersForAdmin);

router.put("/order/:orderId", requiredSignIn, adminOnly, async (req, res) => {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json({ success: true, message: "Order updated", order });
  } catch (err) {
    console.error("Update order error:", err);
    res.status(500).json({ success: false, message: "Failed to update order" });
  }
});

router.get("/users", requiredSignIn, adminOnly, getAllUsers);

export default router;
