import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { API } from '../constant';

const AdminUsers = () => {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API}/admin/users`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await res.json();
      if (data.success) setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      fetchUsers();
    }
  }, [auth]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 font-[Nunito Sans] mt-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Registered Users</h2>
        <div className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
          Total Users: {users.length}
        </div>
      </div>

      {/* TABLE for medium and larger screens */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-pink-600 text-white text-left">
              {["#", "Name", "Email", "Phone", "Address1", "Address2", "Area", "Created At"].map((heading, idx) => (
                <th key={idx} className="px-4 py-2 border whitespace-nowrap">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u._id} className="text-gray-800 text-left">
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{u.name}</td>
                <td className="border px-4 py-2">{u.email}</td>
                <td className="border px-4 py-2">{u.phone}</td>
                <td className="border px-4 py-2">{u.address1}</td>
                <td className="border px-4 py-2">{u.address2}</td>
                <td className="border px-4 py-2">{u.area}</td>
                <td className="border px-4 py-2">{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD view for small screens */}
      <div className="block md:hidden space-y-4">
        {users.map((u, i) => (
          <div key={u._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <p className="font-semibold text-pink-600">User #{i + 1}</p>
            <p><span className="font-semibold">Name:</span> {u.name}</p>
            <p><span className="font-semibold">Email:</span> {u.email}</p>
            <p><span className="font-semibold">Phone:</span> {u.phone}</p>
            <p><span className="font-semibold">Address1:</span> {u.address1}</p>
            <p><span className="font-semibold">Address2:</span> {u.address2}</p>
            <p><span className="font-semibold">Area:</span> {u.area}</p>
            <p><span className="font-semibold">Created At:</span> {new Date(u.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
