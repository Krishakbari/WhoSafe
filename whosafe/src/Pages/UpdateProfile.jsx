// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/auth';
// import { API } from '../constant';

// const UpdateProfile = () => {
//   const [auth, setAuth] = useAuth();
//   const [formData, setFormData] = useState({
//     name: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     area: '',
//     pincode: '',
//   });

//   useEffect(() => {
//     if (auth?.user) {
//       setFormData({ ...auth.user });
//     }
//   }, [auth]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put(`${API}/auth/update-profile`, formData, {
//         headers: {
//           Authorization: `Bearer ${auth.token}`
//         }
//       });

//       if (res.data.success) {
//         alert("Profile updated");
//         const updatedUser = res.data.updatedUser;
//         setAuth({ ...auth, user: updatedUser });
//         localStorage.setItem("auth", JSON.stringify({ ...auth, user: updatedUser }));
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error updating profile");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-32 p-6 bg-white shadow-md rounded-xl">
//       <h2 className="text-2xl font-semibold mb-4 text-pink-600">Update Profile</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["name", "lastName", "email", "phone", "address1", "address2", "area", "pincode"].map(field => (
//           <input
//             key={field}
//             type={field === "email" ? "email" : "text"}
//             name={field}
//             placeholder={field}
//             value={formData[field] || ""}
//             onChange={handleChange}
//             required
//             className="w-full border rounded px-4 py-2"
//           />
//         ))}
//         <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;



import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // ✅ Import Helmet
import axios from 'axios';
import { useAuth } from '../context/auth';
import { API } from '../constant';

const UpdateProfile = () => {
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    area: '',
    pincode: '',
  });

  useEffect(() => {
    if (auth?.user) {
      setFormData({ ...auth.user });
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${API}/auth/update-profile`, formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      });

      if (res.data.success) {
        alert("Profile updated");
        const updatedUser = res.data.updatedUser;
        setAuth({ ...auth, user: updatedUser });
        localStorage.setItem("auth", JSON.stringify({ ...auth, user: updatedUser }));
      }
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  return (
    <>
      {/* ✅ Helmet SEO tags */}
      <Helmet>
        <title>WhoSafe | Update Your Profile</title>
        <meta
          name="description"
          content="Keep your WhoSafe account details up to date. Edit your name, address, and contact information securely."
        />
        <meta name="keywords" content="WhoSafe profile, user account, update details, address change, profile settings" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Update Profile | WhoSafe Account" />
        <meta property="og:description" content="Edit your personal details and keep your WhoSafe profile up-to-date." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/profile-update.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/update-profile" />
        <meta property="og:type" content="website" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Update Profile | WhoSafe" />
        <meta name="twitter:description" content="Easily update your WhoSafe account and address information." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/profile-update.jpg" />
      </Helmet>

      {/* Page Content */}
      <div className="max-w-xl mx-auto mt-32 p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "lastName", "email", "phone", "address1", "address2", "area", "pincode"].map(field => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field}
              value={formData[field] || ""}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
          ))}
          <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
