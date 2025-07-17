import orderModel from "../models/orderModel.js";

export const getAllOrdersForAdmin = async (req, res) => {
    try {
        const orders = await orderModel
            .find({})
            .sort({ createdAt: -1 }) // ✅ Orders appear with newest first
            .populate("items.product", "name price")
            .populate("user", "name lastName email phone address1 address2 area pincode");
        res.json({ success: true, orders });
    } catch (error) {
        console.error("Admin fetch orders error:", error);
        res.status(500).json({ success: false, message: "Failed to fetch orders" });
    }
};



export const updateOrderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating order status",
    });
  }
};



import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude password
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

