import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { API } from "../constant";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const res = await axios.get(`${API}/admin/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (err) {
      console.error("Error fetching admin orders:", err);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await axios.put(
        `${API}/admin/order/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        getAllOrders(); // refresh
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-pink-600">All Orders (Admin)</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-5 rounded-xl shadow-sm bg-white space-y-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Order ID: <strong>{order._id.slice(-6)}</strong></p>
                  <p className="text-gray-600 text-sm">
                    Date: {moment(order.createdAt).format("MMMM Do YYYY, h:mm A")}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Customer:</strong> {order.user?.name} {order.user?.lastName}<br />
                    <strong>Phone:</strong> {order.user?.phone}<br />
                    <strong>Address:</strong> {order.user?.address1}, {order.user?.address2}, {order.user?.area} - {order.user?.pincode}
                  </p>
                </div>

                <div className="text-right">
                  <select
                    className="border px-3 py-1 rounded bg-gray-100 text-sm"
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <p className="mt-2 font-bold text-pink-600 text-lg">₹{order.total}</p>
                </div>
              </div>

              <div>
                <p className="font-medium mb-1">Items:</p>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.product?.name || "Deleted Product"} — {item.quantity} × ₹{item.price ?? "N/A"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
