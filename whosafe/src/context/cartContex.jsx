import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../constant";
import { useAuth } from "./auth";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [auth] = useAuth();
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const calculateTotal = (items) => {
    const newTotal = items.reduce((acc, item) => {
      const price = item.product?.price || 0;
      const quantity = item.quantity || 1;
      return acc + price * quantity;
    }, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    if (auth?.token) fetchCart();
  }, [auth?.token]);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${auth?.token}` },
      });
      const items = data.items || [];
      setCart(items);
      calculateTotal(items);
    } catch (error) {
      console.error("Fetch cart failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const { data } = await axios.post(
        `${API}/cart`,
        { productId, quantity },
        {
          headers: { Authorization: `Bearer ${auth?.token}` },
        }
      );
      const items = data.cart.items || [];
      setCart(items);
      calculateTotal(items);
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const { data } = await axios.delete(`${API}/cart/${productId}`, {
        headers: { Authorization: `Bearer ${auth?.token}` },
      });
      const items = data.cart.items || [];
      setCart(items);
      calculateTotal(items);
    } catch (error) {
      console.error("Remove from cart failed:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const { data } = await axios.patch(
        `${API}/cart/${productId}`,
        { quantity },
        {
          headers: { Authorization: `Bearer ${auth?.token}` },
        }
      );
      const items = data.cart.items || [];
      setCart(items);
      calculateTotal(items);
    } catch (error) {
      console.error("Update quantity failed:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
