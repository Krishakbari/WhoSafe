// import React, { useEffect } from 'react';
// import { useCart } from '../context/cartContex';
// import { FiTrash2 } from 'react-icons/fi';
// import { Minus, Plus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../context/auth';
// import toast from 'react-hot-toast';
// import { API } from '../constant';

// const CartPage = () => {
//   const { cart, total, updateQuantity, removeFromCart, loading, fetchCart } = useCart();
//   const [auth] = useAuth()
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const handleDecrease = (productId, currentQty) => {
//     if (currentQty > 1) updateQuantity(productId, currentQty - 1);
//   };

//   const handleIncrease = (productId, currentQty) => {
//     updateQuantity(productId, currentQty + 1);
//   };

//   // const handlePlaceOrder = async () => {
//   //   if (!auth?.user) {
//   //     alert("Please login to place your order.");
//   //     navigate("/login");
//   //     return;
//   //   }

//   //   try {
//   //     const { data } = await axios.post(`${API}/order/place`);
//   //     alert("Order placed successfully!");
//   //     fetchCart(); // Refresh the cart after placing order
//   //     navigate("/my-orders"); // Go to order history
//   //   } catch (err) {
//   //     console.error("Order error", err);
//   //     alert("Failed to place order. Try again later.");
//   //   }
//   // };
//   const handlePlaceOrder = async () => {
//     try {
//       const res = await axios.post(`${API}/order/place`);

//       if (res.data.success) {
//         toast.success("Order placed successfully!");
//         fetchCart(); // refresh cart
//         navigate("/my-orders");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         console.warn("Handled 400:", error.response.data.message);
//         toast.error(error.response.data.message);
//       } else {
//         console.error("Unexpected error:", error);
//         toast.error("Something went wrong.");
//       }
//     }
//   };


//   if (loading) return <div className="text-center mt-32">Loading...</div>;

//   if (cart.length === 0) {
//     return (
//       <section className="py-20 px-4 text-center max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-semibold mb-2">Your Cart is Empty!</h2>
//         <p className="text-gray-600 text-sm mb-10">Looks like you haven’t added anything yet.</p>
//         <button
//           onClick={() => navigate('/')}
//           className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
//         >
//           Go to Homepage
//         </button>
//       </section>
//     );
//   }
//   const loadRazorpay = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleRazorpayPayment = async () => {
//     if (!auth?.user) {
//       alert("Please login to continue.");
//       navigate("/login");
//       return;
//     }

//     const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
//     if (!res) {
//       alert("Razorpay SDK failed to load.");
//       return;
//     }

//     try {
//       const { data } = await axios.post(`${API}/payment/create-order`, {
//         amount: total,
//       });

//       const options = {
//         key: "rzp_test_ACrwlMcZqRoIq4", // replace with public key
//         amount: data.order.amount,
//         currency: "INR",
//         name: "Who Safe",
//         description: "Order Payment",
//         order_id: data.order.id,
//         handler: async function (response) {
//           const verifyRes = await axios.post(`${API}/payment/verify`, response);
//           if (verifyRes.data.success) {
//             alert("Payment Successful!");
//             await axios.post(`${API}/order/place`); // place actual order
//             fetchCart();
//             navigate("/my-orders");
//           } else {
//             alert("Payment verification failed.");
//           }
//         },
//         prefill: {
//           name: auth.user.name,
//           email: auth.user.email,
//         },
//         notes: {
//           address: "Who Safe - Surat",
//         },
//         theme: {
//           color: "#ED0E64",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       alert("Payment failed.");
//       console.error(err);
//     }
//   };

//   return (
//     <section className="px-6 py-24 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//       <div className="space-y-6">
//         {cart.map((item) => (
//           <div
//             key={`${item.product?._id || item._id}-${item.quantity}`}
//             className="flex items-center justify-between border rounded-xl p-4 shadow-sm"
//           >
//             <div className="flex items-center gap-4 w-2/3">
//               <img
//                 src={`${API}${item.product?.images?.[0]?.url || '/img/default.jpg'}`}
//                 alt={item.product.name}
//                 className="w-20 h-20 object-contain bg-gray-100 rounded-lg"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.product.name}</h2>
//                 <p className="text-sm text-gray-600">₹{item.product.price}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <button onClick={() => handleDecrease(item.product._id, item.quantity)} className="p-1 border rounded hover:bg-gray-100">
//                 <Minus size={16} />
//               </button>
//               <span className="px-3">{item.quantity}</span>
//               <button onClick={() => handleIncrease(item.product._id, item.quantity)} className="p-1 border rounded hover:bg-gray-100">
//                 <Plus size={16} />
//               </button>
//             </div>

//             <div className="text-right">
//               <p className="font-bold">₹{item.product.price * item.quantity}</p>
//               <button onClick={() => removeFromCart(item.product._id)} className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                 <FiTrash2 /> Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total & Place Order */}
//       <div className="text-right mt-10">
//         <h2 className="text-xl font-semibold mb-4">
//           Total: <span className="text-pink-600">₹{total}</span>
//         </h2>
//         <div className="flex flex-col md:flex-row gap-4 mt-6">
//           <button
//             onClick={handlePlaceOrder}
//             className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md"
//           >
//             Place Order (Cash on Delivery)
//           </button>

//           <button
//             onClick={handleRazorpayPayment}
//             className="bg-[#ED0E64] hover:bg-pink-700 text-white px-6 py-2 rounded-md"
//           >
//             Pay ₹{total} with Razorpay
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartPage;





import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // ✅ Add Helmet
import { useCart } from '../context/cartContex';
import { FiTrash2 } from 'react-icons/fi';
import { Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import { API } from '../constant';

const CartPage = () => {
  const { cart, total, updateQuantity, removeFromCart, loading, fetchCart } = useCart();
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const handleDecrease = (productId, currentQty) => {
    if (currentQty > 1) updateQuantity(productId, currentQty - 1);
  };

  const handleIncrease = (productId, currentQty) => {
    updateQuantity(productId, currentQty + 1);
  };

  const handlePlaceOrder = async () => {
    try {
      const res = await axios.post(`${API}/order/place`);
      if (res.data.success) {
        toast.success("Order placed successfully!");
        fetchCart();
        navigate("/my-orders");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    }
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    if (!auth?.user) {
      alert("Please login to continue.");
      navigate("/login");
      return;
    }

    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      const { data } = await axios.post(`${API}/payment/create-order`, {
        amount: total,
      });

      const options = {
        key: "rzp_test_ACrwlMcZqRoIq4",
        amount: data.order.amount,
        currency: "INR",
        name: "Who Safe",
        description: "Order Payment",
        order_id: data.order.id,
        handler: async function (response) {
          const verifyRes = await axios.post(`${API}/payment/verify`, response);
          if (verifyRes.data.success) {
            alert("Payment Successful!");
            await axios.post(`${API}/order/place`);
            fetchCart();
            navigate("/my-orders");
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: auth.user.name,
          email: auth.user.email,
        },
        notes: {
          address: "Who Safe - Surat",
        },
        theme: {
          color: "#ED0E64",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment failed.");
      console.error(err);
    }
  };

  if (loading) return <div className="text-center mt-32">Loading...</div>;

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>WhoSafe | Your Cart is Empty</title>
          <meta name="description" content="You haven’t added anything to your cart yet. Explore our products and shop now!" />
        </Helmet>
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">Your Cart is Empty!</h2>
          <p className="text-gray-600 text-sm mb-10">Looks like you haven’t added anything yet.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
          >
            Go to Homepage
          </button>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>WhoSafe | Your Shopping Cart</title>
        <meta name="description" content="Review the items in your cart, update quantities, and proceed to checkout." />
        <meta name="keywords" content="WhoSafe cart, order checkout, shopping cart, product summary" />

        {/* Open Graph */}
        <meta property="og:title" content="Your Shopping Cart | WhoSafe" />
        <meta property="og:description" content="Complete your purchase securely with WhoSafe. View and manage your cart." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/cart-og.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/cart" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Shopping Cart | WhoSafe" />
        <meta name="twitter:description" content="Complete your purchase securely with WhoSafe." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/cart-og.jpg" />
      </Helmet>

      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item.product?._id || item._id}-${item.quantity}`}
              className="flex items-center justify-between border rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-4 w-2/3">
                <img
                  src={`${API}${item.product?.images?.[0]?.url || '/img/default.jpg'}`}
                  alt={item.product.name}
                  className="w-20 h-20 object-contain bg-gray-100 rounded-lg select-none pointer-events-none"
                  draggable="false"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-sm text-gray-600">₹{item.product.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => handleDecrease(item.product._id, item.quantity)} className="p-1 border rounded hover:bg-gray-100">
                  <Minus size={16} />
                </button>
                <span className="px-3">{item.quantity}</span>
                <button onClick={() => handleIncrease(item.product._id, item.quantity)} className="p-1 border rounded hover:bg-gray-100">
                  <Plus size={16} />
                </button>
              </div>

              <div className="text-right">
                <p className="font-bold">₹{item.product.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.product._id)} className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiTrash2 /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total & Place Order */}
        <div className="text-right mt-10">
          <h2 className="text-xl font-semibold mb-4">
            Total: <span className="text-pink-600">₹{total}</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md"
            >
              Place Order (Cash on Delivery)
            </button>

            <button
              onClick={handleRazorpayPayment}
              className="bg-[#ED0E64] hover:bg-pink-700 text-white px-6 py-2 rounded-md"
            >
              Pay ₹{total} with Razorpay
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
