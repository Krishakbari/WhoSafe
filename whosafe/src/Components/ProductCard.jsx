import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContex';
import { API } from '../constant';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const authData = JSON.parse(localStorage.getItem("auth"));
  const isAdmin = authData?.user?.email?.toLowerCase() === "admin@gmail.com";

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const res = await fetch(`${API}/product/delete/${product.slug}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${authData?.token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          alert("Product deleted");
          window.location.reload();
        } else {
          alert("Delete failed");
        }
      } catch (err) {
        console.error("Delete error:", err);
        alert("Something went wrong");
      }
    }
  };
  console.log("Image URL:", product.images[0].url);
  return (
    <div className="bg-white p-4 sm:p-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center xl:gap-20">
      {/* Product Image */}
      <div
        className="relative w-full sm:w-1/2 cursor-pointer bg-[#ED0E641A] rounded-lg overflow-hidden"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`/single/${product.slug}`);
        }}
      >
        <span className="absolute top-3 left-3 bg-[#ED0E64] text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
          -40%
        </span>

        <img
          src={
            product?.images?.[0]?.url
              ? product.images[0].url.startsWith('http')
                ? product.images[0].url
                : `${API}${product.images[0].url}`
              : '/default-product.jpg'
          }
          alt={product?.images?.[0]?.alt || product.name}
          className="w-full h-auto object-contain sm:h-[260px] p-4"
        />

      </div>

      {/* Product Info */}
      <div className="w-full sm:w-1/2 flex flex-col justify-between h-full">
        <p className="text-sm text-gray-500 mb-1">Pendant</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h2>
        <p className="text-base text-gray-600 mb-4">
          A smart and stylish way to stay safe and connected at all times with real-time tracking features.

        </p>

        <div className="mb-3">
          <span className="text-pink-600 text-lg font-bold">₹{product.price}</span>
          <span className="text-gray-400 text-lg line-through ml-2">₹{Math.floor(product.price * 1.6)}</span>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={16}
              className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-gray-500 text-base">({product.reviews || 0} reviews)</span>
        </div>

        <div className="flex gap-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product._id, 1);
            }}
            className="bg-[#ED0E64] text-white py-2 px-4 rounded-md text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-fit"
          >
            <FiShoppingCart />
            Add to Cart
          </button>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`/single/${product.slug}`);
            }}
            className="bg-[#767676] cursor-pointer text-white py-2 px-4 rounded-md text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-fit"
          >
            <Info />
            Product Info
          </button>
        </div>

        {/* Admin Actions */}
        {isAdmin && (
          <div className="mt-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/admin/update-product/${product.slug}`);
              }}
              className="text-white bg-blue-500 px-3 py-1 rounded text-xs"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="text-white bg-red-500 px-3 py-1 rounded text-xs"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
