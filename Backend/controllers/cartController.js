import cartModel from "../models/cartModel.js";
import productModel from "../models/productModel.js";

// Get user's cart
export const getCartController = async (req, res) => {
  try {
    const cart = await cartModel
      .findOne({ user: req.user._id })
      .populate({
        path: "items.product",
        populate: {
          path: "images",
          model: "ProductImage",
        },
      });

    if (!cart) return res.status(200).json({ items: [], total: 0 });

    // Filter out invalid products (missing or malformed)
    const cleanedItems = cart.items.filter(
      (item) => item.product && typeof item.product.price === "number"
    );

    if (cleanedItems.length !== cart.items.length) {
      cart.items = cleanedItems;
      await cart.save();
    }

    const total = cleanedItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    return res.status(200).json({ items: cleanedItems, total });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to fetch cart",
      message: err.message,
    });
  }
};

// Add item to cart
export const addToCartController = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      cart = new cartModel({ user: req.user._id, items: [] });
    }

    const existingItem = cart.items.find((item) =>
      item.product.equals(productId)
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, message: "Cart updated", cart });
  } catch (err) {
    res.status(500).json({ error: "Could not add to cart" });
  }
};

// Remove item from cart
export const removeFromCartController = async (req, res) => {
  const { productId } = req.params;

  try {
    const cart = await cartModel.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => !item.product.equals(productId)
    );
    await cart.save();

    res.status(200).json({ success: true, message: "Item removed", cart });
  } catch (err) {
    res.status(500).json({ error: "Could not remove item" });
  }
};

// Update quantity of cart item
export const updateQuantityController = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await cartModel.findOne({ user: req.user._id }).populate({
      path: "items.product",
      populate: {
        path: "images",
        model: "ProductImage",
      },
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.product && item.product._id.equals(productId)
    );

    if (!item || !item.product) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    item.quantity = quantity < 1 ? 1 : quantity;
    await cart.save();

    const total = cart.items.reduce(
      (acc, item) => acc + (item.product?.price || 0) * item.quantity,
      0
    );

    res.status(200).json({ success: true, message: "Quantity updated", cart, total });
  } catch (err) {
    res.status(500).json({ error: "Could not update quantity" });
  }
};
