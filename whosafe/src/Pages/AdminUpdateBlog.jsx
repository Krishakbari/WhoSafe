import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../constant';

const AdminUpdateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
        readTime: '',
    });
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState('');
    const [message, setMessage] = useState('');
    const [accessDenied, setAccessDenied] = useState(false); // ✅ new state

    const { id } = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('auth'))?.user;

    useEffect(() => {
        if (!user || user.email !== 'admin@gmail.com') {
            setAccessDenied(true);
            return;
        }

        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`${API}/blog/${id}`);
                setFormData({
                    title: data.title,
                    summary: data.summary,
                    content: data.content,
                    author: data.author,
                    readTime: data.readTime,
                });
                setExistingImage(data.image);
            } catch (err) {
                console.error("Failed to load blog:", err);
            }
        };

        fetchBlog();
    }, [id, user]);

    if (accessDenied) {
        return <h2 className="text-center text-red-600 mt-20">Access Denied: Admins Only</h2>;
    }


    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => form.append(key, value));
        if (image) form.append("image", image);

        try {
            const token = JSON.parse(localStorage.getItem("auth"))?.token;

            await axios.put(`${API}/blog/${id}`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });

            setMessage("Blog updated successfully!");
            setTimeout(() => navigate("/blogs"), 1500);
        } catch (err) {
            console.error(err);
            setMessage("Failed to update blog.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-2 font-[Nunito Sans] mt-24">
            <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Update Blog</h2>
            {message && <p className="text-center text-green-600 mb-4">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Title" required value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="summary" placeholder="Summary" required value={formData.summary} onChange={handleChange} className="w-full p-2 border rounded" />
                <textarea name="content" placeholder="Content" required value={formData.content} onChange={handleChange} rows="6" className="w-full p-2 border rounded"></textarea>
                <input type="text" name="author" placeholder="Author (optional)" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="readTime" placeholder="Read Time (optional)" value={formData.readTime} onChange={handleChange} className="w-full p-2 border rounded" />

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload New Image (optional)</label>
                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded shadow-sm">
                            Choose File
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="hidden"
                            />
                        </label>
                        <span className="text-sm text-gray-600">
                            {image ? image.name : "No file chosen"}
                        </span>
                    </div>
                    {existingImage && !image && (
                        <div className="mt-4">
                            <img
                                src={`${API}${existingImage}`}
                                alt="Current"
                                className="h-40 object-contain rounded shadow border"
                            />
                        </div>
                    )}
                </div>

                <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">Update Blog</button>
            </form>
        </div>
    );
};

export default AdminUpdateBlog;
