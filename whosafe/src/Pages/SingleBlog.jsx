import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../constant';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`${API}/blog/${id}`);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center mt-20">Loading...</div>;

  // Process content into structured format
  const renderContent = (text) => {
    const lines = text.split('\n').filter(Boolean);

    return lines.map((line, index) => {
      // Blockquote detection
      if (line.startsWith('"') || line.startsWith('“')) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-pink-400 pl-4 italic text-pink-800 bg-pink-50 rounded-md py-2"
          >
            {line.replace(/^["“]+|["”]+$/g, '')}
          </blockquote>
        );
      }

      // Heading detection (e.g., "1. ", "2. ")
      if (/^\d+\./.test(line.trim())) {
        return (
          <h2 key={index} className="text-xl font-semibold mt-6">
            {line}
          </h2>
        );
      }

      // Normal paragraph
      return (
        <p key={index} className="text-gray-800 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-[Nunito Sans] mt-24">

      <img
        src={`${API}${blog.image}`}
        alt={blog.title}
        className="w-full h-80 object-contain rounded-xl shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-pink-600">{blog.title}</h1>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <span>{blog.author || 'ResQ Team'}</span>
        <span>{blog.date} • {blog.readTime}</span>
      </div>
      <div className="space-y-4">{renderContent(blog.content)}</div>
    </div>
  );
};

export default SingleBlog;
