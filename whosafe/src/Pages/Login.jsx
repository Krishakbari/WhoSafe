// import React from 'react'
// import RightImage from '../assets/Login.png'
// import Logo from "../assets/WLogo.png"
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import toast from 'react-hot-toast'
// import { useState } from 'react'
// import { useAuth } from '../context/auth'
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// import { API } from '../constant';


// const Login = () => {
//     const [email, setEmail] = useState("")
//     const [password, setpassword] = useState("")
//     const [auth, setAuth] = useAuth()
//     const navigate = useNavigate()
//     const location = useLocation()

//     // form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`${API}/auth/login`, {
//                 email,
//                 password,
//             });
//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.message);
//                 setAuth({
//                     ...auth,
//                     user: res.data.user,
//                     token: res.data.token
//                 })
//                 localStorage.setItem("token", res.data.token);
//                 localStorage.setItem("auth", JSON.stringify(res.data));
//                 window.location.href = "/";
//                 navigate(location.state || "/")

//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-pink-50">
//             <div className="w-full max-w-6xl bg-white flex shadow-lg rounded-lg overflow-hidden">
//                 {/* Left Side */}
//                 <div className="w-full md:w-1/2 p-10">
//                     <div className="">
//                         <img src={Logo} alt="Logo" className="w-20 h-20" />
//                         <p className="text-gray-500 mt-5">Welcome back !!!</p>
//                     </div>
//                     <h2 className="text-2xl font-bold mb-4">Sign in</h2>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <div>
//                             <label className="block text-gray-700 text-sm">Email</label>
//                             <input
//                                 type="email"
//                                 value={email} onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-4 py-2  rounded-md bg-[#FFEAF5] outline-none"
//                             />
//                         </div>
//                         <div>
//                             <div className="flex justify-between items-center">
//                                 <label className="text-gray-700 text-sm">Password</label>
//                                 <Link to="/forgot-password" className="text-sm text-pink-600 hover:underline">
//                                     Forgot Password?
//                                 </Link>
//                             </div>
//                             <input
//                                 type="password"
//                                 value={password} onChange={(e) => setpassword(e.target.value)}
//                                 className="w-full px-4 py-2  rounded-md bg-[#FFEAF5] outline-none mt-1"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
//                         >
//                             SIGN IN
//                         </button>
//                     </form>

//                     <div className="my-4 flex items-center gap-4 text-gray-400">
//                         <hr className="flex-grow border-t border-gray-300" />
//                         <span className="text-sm whitespace-nowrap">Or</span>
//                         <hr className="flex-grow border-t border-gray-300" />
//                     </div>


//                     <div className="space-y-3">
//                         <div className="space-y-3">
//                             <GoogleLogin
//                                 onSuccess={async (credentialResponse) => {
//                                     const token = credentialResponse.credential;
//                                     const decoded = jwtDecode(token);

//                                     try {
//                                         const res = await axios.post(`${API}/auth/google-login`, { token });

//                                         if (res.data.success) {
//                                             toast.success("Logged in with Google");
//                                             const user = res.data.user;

//                                             setAuth({ user, token: res.data.token });
//                                             localStorage.setItem("token", res.data.token);
//                                             localStorage.setItem("auth", JSON.stringify(res.data));

//                                             // 🚨 Check for empty fields
//                                             if (!user.phone || !user.area || !user.pincode || !user.address1 || !user.address2) {
//                                                 window.location.href = "/update-profile";  // Force update
//                                             } else {
//                                                 window.location.href = "/";
//                                             }
//                                         } else {
//                                             toast.error(res.data.message);
//                                         }
//                                     } catch (err) {
//                                         toast.error("Google login failed");
//                                         console.error(err);
//                                     }
//                                 }}

//                             />
//                         </div>
//                     </div>

//                     <p className="mt-6 text-sm text-center text-gray-600">
//                         I don’t have an account? <Link to='/signup' className="text-pink-500 font-semibold">Sign up</Link>
//                     </p>
//                 </div>

//                 {/* Right Side Image */}
//                 <div className="hidden md:block md:w-1/2 bg-pink-100">
//                     <img
//                         src={RightImage}
//                         alt="Illustration"
//                         className="object-contain h-full w-full"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login




import React, { useState } from 'react';
import RightImage from '../assets/Login.png';
import Logo from "../assets/WLogo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Helmet } from "react-helmet";
import { API } from '../constant';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("auth", JSON.stringify(res.data));
        window.location.href = "/";
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>WhoSafe | Login</title>
        <meta name="description" content="Login securely to your WhoSafe account and access smart safety features." />
        <meta name="keywords" content="login, WhoSafe, safety app, smart pendant, GPS tracking" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Login | WhoSafe" />
        <meta property="og:description" content="Login to WhoSafe and experience real-time safety with GPS tracking." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/og-banner.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/login" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login | WhoSafe" />
        <meta name="twitter:description" content="Secure login to WhoSafe GPS tracking pendant system." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/twitter-banner.jpg" />
      </Helmet>

      {/* Login UI */}
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="w-full max-w-6xl bg-white flex shadow-lg rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-10">
            <div>
              <img src={Logo} alt="Logo" className="w-20 h-20" />
              <p className="text-gray-500 mt-5">Welcome back !!!</p>
            </div>
            <h2 className="text-2xl font-bold mb-4">Sign in</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#FFEAF5] outline-none"
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label className="text-gray-700 text-sm">Password</label>
                  <Link to="/forgot-password" className="text-sm text-pink-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#FFEAF5] outline-none mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
              >
                SIGN IN
              </button>
            </form>

            <div className="my-4 flex items-center gap-4 text-gray-400">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="text-sm whitespace-nowrap">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="space-y-3">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  const token = credentialResponse.credential;
                  const decoded = jwtDecode(token);
                  try {
                    const res = await axios.post(`${API}/auth/google-login`, { token });
                    if (res.data.success) {
                      toast.success("Logged in with Google");
                      const user = res.data.user;
                      setAuth({ user, token: res.data.token });
                      localStorage.setItem("token", res.data.token);
                      localStorage.setItem("auth", JSON.stringify(res.data));

                      if (!user.phone || !user.area || !user.pincode || !user.address1 || !user.address2) {
                        navigate("/update-profile");
                      } else {
                        navigate("/");
                      }
                    } else {
                      toast.error(res.data.message);
                    }
                  } catch (err) {
                    toast.error("Google login failed");
                    console.error(err);
                  }
                }}
              />
            </div>

            <p className="mt-6 text-sm text-center text-gray-600">
              I don’t have an account? <Link to='/signup' className="text-pink-500 font-semibold">Sign up</Link>
            </p>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:block md:w-1/2 bg-pink-100">
            <img
              src={RightImage}
              alt="Illustration"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;