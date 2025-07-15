import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../constant';

const UpdateProduct = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    reviews: '',
  });

  const [existingImages, setExistingImages] = useState([]);
  const [newPhotos, setNewPhotos] = useState([]);

  // Fetch existing product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API}/product/get-product/${slug}`);
        const p = data.product;
        setFormData({
          name: p.name,
          description: p.description,
          price: p.price,
          rating: p.rating,
          reviews: p.reviews,
        });
        setExistingImages(p.images || []);
      } catch (err) {
        console.error("Failed to load product", err);
        alert("Failed to load product");
      }
    };
    fetchProduct();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    for (let i = 0; i < newPhotos.length; i++) {
      data.append('photos', newPhotos[i]);
    }

    try {
      const res = await axios.put(`${API}/product/update-product/${slug}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`,
        },
      });

      alert("Product updated!");
      navigate("/");
    } catch (err) {
      console.error("Update error", err);
      alert("Failed to update product");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-24 p-6 shadow-md bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Update Product</h2>
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

        {/* Existing Images Preview */}
        {existingImages.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-1">Existing Images</label>
            <div className="flex flex-wrap gap-2">
              {existingImages.map((img, index) => (
                <img
                  key={index}
                  src={`${API}${img.url}`}
                  alt={img.alt}
                  className="h-20 w-20 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}

        {/* Upload New Photos */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload New Photos</label>
          <input
            id="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setNewPhotos(Array.from(e.target.files))}
            className="hidden"
          />
          <label
            htmlFor="photos"
            className="inline-block cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Choose Photos
          </label>
          {newPhotos.length > 0 && (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
              {newPhotos.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
