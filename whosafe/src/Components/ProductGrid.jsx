import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API } from '../constant';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${API}/product/get-products`);
      setProducts(data?.products || []);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while fetching products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="py-12 px-6 text-center">
      <Link to={'#product'}>
        <h2 className="text-2xl font-bold mb-2" id="product">Our Product</h2>
      </Link>
      <p className="text-sm text-gray-600 mb-8">Let me know your specific product category</p>

      <div className="grid   mx-auto xl:max-w-7xl md:max-w-2xl gap-10 justify-center">
        {products.map((product, i) => (
          <ProductCard key={product._id || i} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
