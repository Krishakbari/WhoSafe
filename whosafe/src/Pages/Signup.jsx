// import React from 'react'
// import RightImage from '../assets/Login.png'
// import Logo from '../assets/WLogo.png'
// import { Link, useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast'
// import axios from "axios"
// import { useState } from 'react'
// import { Helmet } from 'react-helmet'
// import { API } from '../constant'

// const Signup = () => {
//     const [name, setName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setpassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [phone, setPhone] = useState("")
//     const [address1, setAddress1] = useState("")
//     const [address2, setAddress2] = useState("")
//     const [area, setArea] = useState("")
//     const [pincode, setPincode] = useState("")
//     const navigate = useNavigate()


//     // form function
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             if (password !== confirmPassword) {
//                 toast.error("Passwords do not match");
//                 return;
//             }
//             const res = await axios.post("${API}/auth/register", { name, email, password, phone, address1, address2, lastName, pincode, area })

//             if (res && res.data.success) {
//                 toast.success(res.data.message)
//                 navigate("/login")
//             }
//             else {
//                 toast.error(res.data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error("Something went wrong")
//         }
//     }
//     return (
//         <>
//             <Helmet>
//                 <title>WhoSafe | Register</title>
//                 <meta name="description" content="Create your WhoSafe account to get started with smart safety features." />
//                 <meta name="keywords" content="register, sign up, WhoSafe, GPS pendant, safety device" />

//                 {/* Open Graph */}
//                 <meta property="og:title" content="Register | WhoSafe" />
//                 <meta property="og:description" content="Sign up to WhoSafe and start protecting yourself with smart safety solutions." />
//                 <meta property="og:image" content="https://whosafe.vercel.app/assets/og-banner.jpg" />
//                 <meta property="og:url" content="https://whosafe.vercel.app/signup" />
//                 <meta property="og:type" content="website" />

//                 {/* Twitter Card */}
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:title" content="Register | WhoSafe" />
//                 <meta name="twitter:description" content="Create your WhoSafe account to start using GPS tracking and smart safety tools." />
//                 <meta name="twitter:image" content="https://whosafe.vercel.app/assets/twitter-banner.jpg" />
//             </Helmet>

//             <div className="min-h-screen flex items-center justify-center bg-pink-50">
//                 <div className="w-full max-w-7xl bg-white mt-5 flex shadow-lg rounded-lg overflow-hidden">
//                     {/* Left Side */}
//                     <div className="w-full md:w-1/2 p-10">
//                         <p className="text-gray-500 ">Welcome back !!!</p>
//                         <h2 className="text-3xl font-bold mb-6">Sign up</h2>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             {/* Name Fields */}
//                             <div className="flex gap-4">
//                                 <div className="w-1/2">
//                                     <label className="block text-sm text-gray-700">Name</label>
//                                     <input
//                                         type="text"
//                                         value={name} onChange={(e) => setName(e.target.value)}
//                                         className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                     />
//                                 </div>
//                                 <div className="w-1/2">
//                                     <label className="block text-sm text-gray-700">Last Name</label>
//                                     <input
//                                         type="text"
//                                         value={lastName} onChange={(e) => setLastName(e.target.value)}
//                                         className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Mobile */}
//                             <div>
//                                 <label className="block text-sm text-gray-700">Mobile</label>
//                                 <input
//                                     type="text"
//                                     value={phone} onChange={(e) => setPhone(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>

//                             {/* Email */}
//                             <div>
//                                 <label className="block text-sm text-gray-700">E-mail</label>
//                                 <input
//                                     type="email"
//                                     value={email} onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>

//                             {/* Password Fields */}
//                             {/* Password */}
//                             <div>
//                                 <label className="block text-sm text-gray-700">Password</label>
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setpassword(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>

//                             {/* Re-enter Password */}
//                             <div>
//                                 <label className="block text-sm text-gray-700">Re-enter Password</label>
//                                 <input
//                                     type="password"
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>
//                             {/* Address 1 & 2 */}
//                             <div>
//                                 <label className="block text-sm text-gray-700">Address 1</label>
//                                 <input
//                                     type="text"
//                                     value={address1} onChange={(e) => setAddress1(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm text-gray-700">Address 2</label>
//                                 <input
//                                     type="text"
//                                     value={address2}
//                                     onChange={(e) => setAddress2(e.target.value)}
//                                     className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                 />
//                             </div>

//                             {/* Area and Pincode */}
//                             <div className="flex gap-4">
//                                 <div className="w-1/2">
//                                     <label className="block text-sm text-gray-700">Area</label>
//                                     <input
//                                         type="text"
//                                         value={area} onChange={(e) => setArea(e.target.value)}
//                                         className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                     />
//                                 </div>
//                                 <div className="w-1/2">
//                                     <label className="block text-sm text-gray-700">Pincode</label>
//                                     <input
//                                         type="text"
//                                         value={pincode} onChange={(e) => setPincode(e.target.value)}
//                                         className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition mt-4"
//                             >
//                                 SUBMIT
//                             </button>
//                             <p className="mt-6 text-sm text-center text-gray-600">
//                                 I don’t have an account? <Link to="/login" className="text-pink-500 font-semibold">Login</Link>

//                             </p>
//                         </form>
//                     </div>

//                     {/* Right Side Image */}
//                     <div className="hidden md:block md:w-1/2 bg-pink-100">
//                         <img
//                             src={RightImage}
//                             alt="Illustration"
//                             className="object-contain h-full w-full"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <br />
//         </>
//     )
// }

// export default Signup




import React from 'react'
import RightImage from '../assets/Login.png'
import Logo from '../assets/WLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from "axios"
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { API } from '../constant'

const Signup = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [area, setArea] = useState("")
    const [pincode, setPincode] = useState("")
    const navigate = useNavigate()


    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }
            const res = await axios.post(`${API}/auth/register`, { name, email, password, phone, address1, address2, lastName, pincode, area })

            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }
    return (
        <>
            <Helmet>
                <title>WhoSafe | Register</title>
                <meta name="description" content="Create your WhoSafe account to get started with smart safety features." />
                <meta name="keywords" content="register, sign up, WhoSafe, GPS pendant, safety device" />

                {/* Open Graph */}
                <meta property="og:title" content="Register | WhoSafe" />
                <meta property="og:description" content="Sign up to WhoSafe and start protecting yourself with smart safety solutions." />
                <meta property="og:image" content="https://whosafe.vercel.app/assets/og-banner.jpg" />
                <meta property="og:url" content="https://whosafe.vercel.app/signup" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Register | WhoSafe" />
                <meta name="twitter:description" content="Create your WhoSafe account to start using GPS tracking and smart safety tools." />
                <meta name="twitter:image" content="https://whosafe.vercel.app/assets/twitter-banner.jpg" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-pink-50">
                <div className="w-full max-w-7xl bg-white mt-5 flex shadow-lg rounded-lg overflow-hidden">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 p-10">
                        <p className="text-gray-500 ">Welcome back !!!</p>
                        <h2 className="text-3xl font-bold mb-6">Sign up</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Fields */}
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-sm text-gray-700">Mobile</label>
                                <input
                                    type="text"
                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-gray-700">E-mail</label>
                                <input
                                    type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>

                            {/* Password Fields */}
                            {/* Password */}
                            <div>
                                <label className="block text-sm text-gray-700">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>

                            {/* Re-enter Password */}
                            <div>
                                <label className="block text-sm text-gray-700">Re-enter Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>
                            {/* Address 1 & 2 */}
                            <div>
                                <label className="block text-sm text-gray-700">Address 1</label>
                                <input
                                    type="text"
                                    value={address1} onChange={(e) => setAddress1(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700">Address 2</label>
                                <input
                                    type="text"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                />
                            </div>

                            {/* Area and Pincode */}
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-700">Area</label>
                                    <input
                                        type="text"
                                        value={area} onChange={(e) => setArea(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm text-gray-700">Pincode</label>
                                    <input
                                        type="text"
                                        value={pincode} onChange={(e) => setPincode(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#FFEAF5] rounded-md outline-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition mt-4"
                            >
                                SUBMIT
                            </button>
                            <p className="mt-6 text-sm text-center text-gray-600">
                                I don’t have an account? <Link to="/login" className="text-pink-500 font-semibold">Login</Link>

                            </p>
                        </form>
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
            <br />
        </>
    )
}

export default Signup
