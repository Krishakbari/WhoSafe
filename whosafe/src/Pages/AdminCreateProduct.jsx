import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../constant';

const CreateProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        rating: '',
        reviews: '',
    });
    const [photos, setPhotos] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        for (let i = 0; i < photos.length; i++) {
            data.append("photos", photos[i]);
        }

        try {
            console.log([...data.entries()]);
            const res = await axios.post(`${API}/product/create-product`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`
                }
            });

            alert("Product created!");
            navigate("/"); // redirect to home or product list
        } catch (err) {
            console.error("Create product error:", err);
            alert("Error creating product");
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-24 p-6 shadow-md bg-white rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Create New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "description", "price", "rating", "reviews"].map((field) => (
                    <div key={field}>
                        <label className="block text-sm font-medium capitalize">{field}</label>
                        <input
                            type={["price", "rating", "reviews"].includes(field) ? "number" : "text"}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                ))}
                <div>
                    <label className="block text-sm font-medium mb-2">Upload Photos</label>

                    {/* Hidden file input */}
                    <input
                        id="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => setPhotos(Array.from(e.target.files))}
                        className="hidden"
                    />

                    {/* Styled custom button */}
                    <label
                        htmlFor="photos"
                        className="inline-block cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md"
                    >
                        Choose Photos
                    </label>

                    {/* Show selected file names (optional) */}
                    {photos.length > 0 && (
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                            {photos.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-md">
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
