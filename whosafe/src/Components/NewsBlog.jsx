import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth'; // import useAuth
import { API } from '../constant';

const NewsBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [auth] = useAuth(); // destructure auth

  // isAdmin logic same as AdminRoute
  const isAdmin = auth?.user?.email?.toLowerCase() === "admin@gmail.com";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/blog`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto font-[Nunito Sans]">
      <h2 className="text-2xl font-semibold text-center mb-2">News Blog</h2>
      <p className="text-sm text-center text-gray-500 mb-10">
        Stay informed with the latest headlines, real stories, and timely updates. Stay updated. Stay empowered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-[#FFE8F0] rounded-xl overflow-hidden shadow-md hover:scale-[1.01] transition-transform">
            <img
              src={`${API}${blog.image}`}
              alt={blog.title}
              className="w-full h-[220px] object-contain"
            />
            <div className="bg-white p-4 space-y-2">
              <h3 className="text-sm font-semibold">{blog.title}</h3>
              <p className="text-xs text-gray-500">{blog.summary}</p>
              <div className="flex items-center justify-between text-sm mt-4">
                <Link
                  to={`/blogs/${blog._id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-pink-600 font-semibold flex items-center gap-1"
                >
                  <span className="hover:underline">Read More</span>
                  <span className="text-xl leading-none">→</span>
                </Link>

                <span className="text-gray-400 text-xs">{blog.date} / {blog.readTime}</span>
              </div>

              {/* ✅ Only show if admin */}
              {isAdmin && (
                <div className="mt-4 flex justify-end gap-2">
                  <Link
                    to={`/admin/update-blog/${blog._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md transition"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    onClick={async () => {
                      if (window.confirm("Are you sure you want to delete this blog?")) {
                        try {
                          const token = JSON.parse(localStorage.getItem("auth"))?.token;
                          const res = await axios.delete(`${import.meta.env.VITE_API}/blog/${blog._id}`, {
                            headers: {
                              Authorization: `Bearer ${token}`
                            }
                          });
                          if (res.data.success) {
                            alert("Blog deleted");
                            setBlogs(blogs.filter(b => b._id !== blog._id)); // remove from UI
                          } else {
                            alert("Delete failed");
                          }
                        } catch (err) {
                          console.error("Delete blog error:", err);
                          alert("Something went wrong");
                        }
                      }
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md transition"
                  >
                    🗑 Delete
                  </button>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsBlog;
