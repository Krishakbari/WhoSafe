// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment";
// import { API } from "../constant";

// const MyOrders = () => {
//     const [orders, setOrders] = useState([]);

//     const getOrders = async () => {
//         try {
//             const res = await axios.get(`${API}/order/me`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             if (res.data.success) {
//                 setOrders(res.data.orders);
//             }
//         } catch (err) {
//             console.error("Error fetching orders:", err);
//         }
//     };
//     const handleCancel = async (orderId) => {
//         const confirm = window.confirm("Are you sure you want to cancel this order?");
//         if (!confirm) return;

//         try {
//             const res = await axios.delete(`${API}/order/cancel/${orderId}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             if (res.data.success) {
//                 alert("Order cancelled successfully");
//                 getOrders(); // refresh list
//             } else {
//                 alert(res.data.message || "Cancellation failed");
//             }
//         } catch (err) {
//             console.error("Cancel order error:", err);
//             alert("Something went wrong");
//         }
//     };


//     useEffect(() => {
//         getOrders();
//     }, []);

//     return (
//         <div className="p-6 max-w-5xl mx-auto">
//             <h1 className="text-3xl font-semibold mb-8 text-pink-600">My Orders</h1>

//             {orders.length === 0 ? (
//                 <div className="text-center text-gray-500 text-lg">
//                     You haven’t placed any orders yet.
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div
//                             key={order._id}
//                             className="border border-gray-200 rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition duration-300"
//                         >
//                             <div className="mb-4 flex flex-wrap justify-between items-center">
//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Order ID: <span className="font-medium text-gray-700">{order._id.slice(-6)}</span>
//                                     </p>
//                                     <p className="text-sm text-gray-500">
//                                         Placed on:{" "}
//                                         <span className="font-medium text-gray-700">
//                                             {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
//                                         </span>
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <span
//                                         className={`px-3 py-1 text-sm font-medium rounded-full ${order.status === "Pending"
//                                             ? "bg-yellow-100 text-yellow-700"
//                                             : order.status === "Shipped"
//                                                 ? "bg-blue-100 text-blue-700"
//                                                 : order.status === "Delivered"
//                                                     ? "bg-green-100 text-green-700"
//                                                     : "bg-red-100 text-red-700"
//                                             }`}
//                                     >
//                                         {order.status}
//                                     </span>
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <p className="font-semibold text-gray-800">Items:</p>
//                                 <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
//                                     {order.items.map((item) => (
//                                         <li key={item.product?._id || Math.random()}>
//                                             <span className="font-medium">{item.product?.name || "Product Deleted"}</span> — {item.quantity} × ₹{item.price ?? 'N/A'}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>


//                             {order.status === "Pending" && (
//                                 <div className="text-right mt-4">
//                                     <button
//                                         onClick={() => handleCancel(order._id)}
//                                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
//                                     >
//                                         Cancel Order
//                                     </button>
//                                 </div>
//                             )}

//                             <div className="text-right font-semibold text-lg text-gray-800">
//                                 Total: ₹{order.total}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );

// };

// export default MyOrders;




import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Helmet } from "react-helmet"; // ✅ Helmet import
import { API } from "../constant";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await axios.get(`${API}/order/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const handleCancel = async (orderId) => {
    const confirm = window.confirm("Are you sure you want to cancel this order?");
    if (!confirm) return;

    try {
      const res = await axios.delete(`${API}/order/cancel/${orderId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        alert("Order cancelled successfully");
        getOrders(); // refresh list
      } else {
        alert(res.data.message || "Cancellation failed");
      }
    } catch (err) {
      console.error("Cancel order error:", err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {/* ✅ Helmet SEO Tags */}
      <Helmet>
        <title>WhoSafe | My Orders </title>
        <meta name="description" content="View and manage all your previous orders placed on WhoSafe." />
        <meta name="keywords" content="WhoSafe orders, order history, cancel order, view order" />

        {/* Open Graph */}
        <meta property="og:title" content="My Orders | WhoSafe" />
        <meta property="og:description" content="Track your order history and manage deliveries easily." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/orders-og.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/my-orders" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Orders | WhoSafe" />
        <meta name="twitter:description" content="Check your placed orders and manage them from one place." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/orders-og.jpg" />
      </Helmet>

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-pink-600">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            You haven’t placed any orders yet.
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="border border-gray-200 rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition duration-300"
              >
                <div className="mb-4 flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID: <span className="font-medium text-gray-700">{order._id.slice(-6)}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Placed on:{" "}
                      <span className="font-medium text-gray-700">
                        {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
                      </span>
                    </p>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Items:</p>
                  <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
                    {order.items.map((item) => (
                      <li key={item.product?._id || Math.random()}>
                        <span className="font-medium">{item.product?.name || "Product Deleted"}</span> —{" "}
                        {item.quantity} × ₹{item.price ?? "N/A"}
                      </li>
                    ))}
                  </ul>
                </div>

                {order.status === "Pending" && (
                  <div className="text-right mt-4">
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
                    >
                      Cancel Order
                    </button>
                  </div>
                )}

                <div className="text-right font-semibold text-lg text-gray-800">
                  Total: ₹{order.total}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrders;
