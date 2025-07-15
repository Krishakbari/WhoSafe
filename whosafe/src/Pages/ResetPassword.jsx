import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../constant';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const email = localStorage.getItem("resetEmail");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/auth/reset-password`, { email, password });
      if (res.data.success) {
        alert("Password reset successful!");
        localStorage.removeItem("resetEmail");
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to reset password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#fce4ec] via-[#f3e5f5] to-[#e3f2fd] px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 sm:p-10 animate-fade-in transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Reset Password</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your new password below to secure your account.
        </p>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-md transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>

  );
};

export default ResetPassword;
