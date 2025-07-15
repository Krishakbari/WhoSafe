import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth'; // Adjust the path if needed

const MyProfile = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (!auth?.user) return null;

  const user = auth.user;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center mt-8">
      <div className="bg-white shadow-xl rounded-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h2>

        <div className="space-y-3">
          <div>
            <p className="text-gray-500 text-sm">Name</p>
            <p className="text-lg font-semibold">{user.name || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Last Name</p>
            <p className="text-lg font-semibold">{user.lastName || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-lg font-semibold">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="text-lg font-semibold">{user.phone || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Address1</p>
            <p className="text-lg font-semibold">{user.address1 || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Address2</p>
            <p className="text-lg font-semibold">{user.address2 || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Area</p>
            <p className="text-lg font-semibold">{user.area || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Pincode</p>
            <p className="text-lg font-semibold">{user.pincode || "N/A"}</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/update-profile")}
          className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
