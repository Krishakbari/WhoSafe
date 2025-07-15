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
          path: "images", // populate images of the product
          model: "ProductImage",
        },
      });

    if (!cart) return res.status(200).json({ items: [], total: 0 });

    const total = cart.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    res.status(200).json({ items: cart.items, total });
  } catch (err) {
    console.error("Fetch cart error:", err);
    res.status(500).json({ error: "Failed to fetch cart" });
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

    const existingItem = cart.items.find((item) => item.product.equals(productId));

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

    cart.items = cart.items.filter((item) => !item.product.equals(productId));
    await cart.save();

    res.status(200).json({ success: true, message: "Item removed", cart });
  } catch (err) {
    res.status(500).json({ error: "Could not remove item" });
  }
};

// PATCH /cart/:productId – update quantity
export const updateQuantityController = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await cartModel.findOne({ user: req.user._id }).populate({
      path: "items.product",
      populate: {
        path: "images", // ✅ nested populate
        model: "ProductImage",
      },
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const item = cart.items.find((item) => item.product._id.equals(productId));

    if (!item) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    item.quantity = quantity < 1 ? 1 : quantity;
    await cart.save();

    // ✅ Recalculate total
    const total = cart.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    res.status(200).json({ success: true, message: "Quantity updated", cart, total });
  } catch (err) {
    console.error("Quantity update error:", err);
    res.status(500).json({ error: "Could not update quantity" });
  }
};