import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../constant';

const AnnouncementPage = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth?.user?.email?.toLowerCase() === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      navigate("/"); // Redirect non-admins
    }
  }, [navigate]);

  const handleSend = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const res = await axios.post(`${API}/subscribe/announce`, {
        subject,
        message,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      alert(res.data.message);
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error("Announcement error:", err);
      alert("Failed to send announcement");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Send Announcement</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          placeholder="Enter announcement subject"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
          rows="6"
          placeholder="Enter your message here..."
        />
      </div>

      <button
        onClick={handleSend}
        className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700"
      >
        Send to All Subscribers
      </button>
    </div>
  );
};

export default AnnouncementPage;
