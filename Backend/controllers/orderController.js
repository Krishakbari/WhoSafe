import cartModel from "../models/cartModel.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

export const placeOrderController = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await userModel.findById(userId);
    if (!user || !user.address1 || !user.address2 || !user.area || !user.pincode) {
      return res.status(400).json({
        success: false,
        message: "Please update your address before placing an order.",
      });
    }

    const cart = await cartModel.findOne({ user: userId }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: "Your cart is empty" });
    }

    const total = cart.items.reduce((acc, item) => {
      if (!item.product || typeof item.product.price !== "number") {
        throw new Error("Invalid product or missing price in cart.");
      }
      return acc + item.product.price * item.quantity;
    }, 0);

    const order = await orderModel.create({
      user: userId,
      items: cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      total,
    });

    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    console.error("Place order error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};




export const getUserOrdersController = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await orderModel
      .find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("items.product", "name price");

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (err) {
    console.error("Get user orders error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};



export const cancelOrderController = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.user._id;

    const order = await orderModel.findOne({ _id: orderId, user: userId });

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    if (order.status !== "Pending") {
      return res.status(400).json({ success: false, message: "Only pending orders can be cancelled" });
    }

    await orderModel.findByIdAndDelete(orderId);

    res.status(200).json({ success: true, message: "Order cancelled successfully" });
  } catch (error) {
    console.error("Cancel order error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};