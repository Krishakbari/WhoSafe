import React, { useEffect, useState } from 'react';
import { FiSearch, FiUser, FiShoppingBag, FiX, FiMenu } from 'react-icons/fi';
import WLogo from "../assets/WLogo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContex';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart()
  const [showDropdown, setShowDropdown] = useState(false);
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const user = parsed.user || {};
        setAuth(user);
        if (user?.email?.toLowerCase() === "admin@gmail.com") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Failed to parse auth from localStorage", err);
      }
    }
  }, []);

  const handleLogout = () => {
    const stored = JSON.parse(localStorage.getItem("auth"));
    const userId = stored?.user?._id;

    localStorage.removeItem("auth");
    localStorage.setItem("guestId", userId); // optional: persist guestId for next login

    setAuth(null);
    setIsAdmin(false);
    navigate("/");
    window.location.reload(); // optional force refresh to re-render navbar
  };

  return (
    <>
      {/* Top Search Bar Overlay */}
      {showSearch && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 lg:px-20 py-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-pink-300 rounded-full text-lg outline-none"
            autoFocus
          />
          <FiX
            className="ml-4 text-2xl text-gray-600 cursor-pointer hover:text-pink-500"
            onClick={() => setShowSearch(false)}
          />
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-white z-40 px-6 py-4 shadow-md">
          <nav className="flex flex-col space-y-4 text-[16px] font-medium">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/collection"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Collection
            </NavLink> */}
            <NavLink
              to="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/custom"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Customize
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}

      <header className="fixed top-0 left-0 w-full h-20 z-20 px-6 lg:px-20 flex items-center bg-transparent backdrop-blur-md">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <Link to={'/'}><img src={WLogo} alt="" /></Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex space-x-6 text-[16px] font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Collection
            </NavLink> */}
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Customize
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600 underline"
                  : "text-gray-700 hover:text-pink-600 transition"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Icons + Mobile Hamburger */}
          <div className="flex items-center space-x-4 text-gray-700">
            <div className="relative">
              <FiUser
                className="text-lg cursor-pointer hover:text-pink-600"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
                  {auth ? (
                    <>
                      {isAdmin ? (
                        <>
                          <button
                            onClick={() => {
                              setShowDropdown(false);
                              navigate('/admin/orders');
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                          >
                            Manage Orders
                          </button>
                          <button
                            onClick={() => {
                              setShowDropdown(false);
                              navigate('/admin/users'); // 👈 New route
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                          >
                            View Users
                          </button>
                          <button
                            onClick={() => {
                              setShowDropdown(false);
                              navigate('/admin/create-blog');
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                          >
                            Create Blog
                          </button>
                          <button
                            onClick={() => {
                              setShowDropdown(false);
                              navigate('/admin/announcement');
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                          >
                            Send Announcement
                          </button>
                          <button
                            onClick={() => {
                              setShowDropdown(false);
                              navigate('/admin/create-product');
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                          >
                            Create Product
                          </button>

                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setShowDropdown(false);
                            navigate('/my-orders');
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                        >
                          My Orders
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          navigate('/update-profile');
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                      >
                        Update Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          navigate('/my-profile');
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                      >
                        My Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowDropdown(false);
                          handleLogout();
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => navigate('/login')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-100"
                    >
                      Login
                    </button>
                  )}

                </div>
              )}
            </div>


            <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
              <FiShoppingBag className="text-lg hover:text-pink-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Hamburger Icon (Mobile only) */}
            <div className="lg:hidden">
              {mobileMenuOpen ? (
                <FiX
                  className="text-2xl cursor-pointer hover:text-pink-600"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ) : (
                <FiMenu
                  className="text-2xl cursor-pointer hover:text-pink-600"
                  onClick={() => setMobileMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
