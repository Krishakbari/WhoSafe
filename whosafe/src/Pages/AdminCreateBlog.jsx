import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../constant';

const AdminCreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
        readTime: '',
    });
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('auth'))?.user;

    if (!user || user.email !== 'admin@gmail.com') {
        return <h2 className="text-center text-red-600 mt-20">Access Denied: Admins Only</h2>;
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return alert("Please select an image");

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => form.append(key, value));
        form.append("image", image);

        try {
            const token = JSON.parse(localStorage.getItem("auth"))?.token;

            await axios.post(`${API}/blog`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });

            setMessage("Blog created successfully!");
            setFormData({ title: '', summary: '', content: '', author: '', readTime: '' });
            setImage(null);

            setTimeout(() => navigate("/blogs"), 1500); // redirect to blog list
        } catch (error) {
            console.error(error);
            setMessage("Blog creation failed!");
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 pt-28 font-[Nunito Sans]">
            <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Create New Blog</h2>

            {message && <p className="text-center text-green-600 mb-4">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Title" required value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="summary" placeholder="Summary" required value={formData.summary} onChange={handleChange} className="w-full p-2 border rounded" />
                <textarea name="content" placeholder="Content" required value={formData.content} onChange={handleChange} rows="6" className="w-full p-2 border rounded"></textarea>
                <input type="text" name="author" placeholder="Author (optional)" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded" />
                <input type="text" name="readTime" placeholder="Read Time (optional)" value={formData.readTime} onChange={handleChange} className="w-full p-2 border rounded" />
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>

                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded shadow-sm">
                            Choose File
                            <input
                                type="file"
                                accept="image/*"
                                required
                                onChange={(e) => setImage(e.target.files[0])}
                                className="hidden"
                            />
                        </label>
                        <span className="text-sm text-gray-600">
                            {image ? image.name : "No file chosen"}
                        </span>
                    </div>

                    {image && (
                        <div className="mt-4">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="h-40 object-contain rounded shadow border"
                            />
                        </div>
                    )}
                </div>
                <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">Create Blog</button>
            </form>
        </div>
    );
};

export default AdminCreateBlog;
