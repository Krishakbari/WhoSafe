import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaStarHalfAlt, FaRegStar, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Bookmark, Heart, MessageCircleMore, Share2, ShoppingBag, Star, Truck } from 'lucide-react';
import { useCart } from '../context/cartContex';
import { Helmet } from 'react-helmet';
import { API } from '../constant';

const SingleProduct = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewImg, setPreviewImg] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [thumbStartIndex, setThumbStartIndex] = useState(0); // to control visible thumbs


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`${API}/product/get-product/${slug}`);
                const fetchedProduct = data?.product;
                setProduct(fetchedProduct);

                // Set initial preview image
                if (fetchedProduct?.images?.[0]?.url) {
                    setPreviewImg(`${API}${fetchedProduct.images[0].url}`);
                }
            } catch (error) {
                console.error("Failed to fetch product", error);
            }
        };
        fetchProduct();
    }, [slug]);

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        setCurrentIndex(newIndex);
        setPreviewImg(`${API}${product.images[newIndex].url}`);
        if (newIndex < thumbStartIndex) {
            setThumbStartIndex(Math.max(0, newIndex - 3));
        }
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % product.images.length;
        setCurrentIndex(newIndex);
        setPreviewImg(`${API}${product.images[newIndex].url}`);
        if (newIndex >= thumbStartIndex + 4) {
            setThumbStartIndex(newIndex - 3);
        }
    };


    const renderStars = () => {
        const rating = product?.rating || 0;
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < full) stars.push(<FaStar key={i} className="text-yellow-500" />);
            else if (i === full && half) stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
        }

        return stars;
    };

    if (!product || !product.images) {
        return <div className="text-center py-20 text-gray-500 text-lg">Loading Product...</div>;
    }

    const handleShare = async () => {
        const shareUrl = `${window.location.href}`;
        const shareText = `Check out this product: ${product.name} for ₹${product.price}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: shareText,
                    url: shareUrl,
                });
                console.log("Shared successfully");
            } catch (error) {
                console.error("Share failed:", error);
            }
        } else {
            // Fallback: copy to clipboard
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert("Link copied to clipboard!");
            } catch (err) {
                alert("Failed to copy link");
            }
        }
    };
    const fullImageUrl = `${API}${product.images[0]?.url}`;
    const pageUrl = `https://whosafe.vercel.app/product/${product.slug}`;

    return (
        <>
            <br /><br /><br />
            <Helmet>
                <title>{`WhoSafe | ${product.name} `}</title>
                <meta name="description" content={product.description?.slice(0, 150)} />
                <meta name="keywords" content={`buy ${product.name}, WhoSafe product, wearable safety, smart pendant`} />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={`${product.name} | WhoSafe`} />
                <meta property="og:description" content={product.description?.slice(0, 150)} />
                <meta property="og:image" content={fullImageUrl} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="product" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${product.name} | WhoSafe`} />
                <meta name="twitter:description" content={product.description?.slice(0, 150)} />
                <meta name="twitter:image" content={fullImageUrl} />
            </Helmet>
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Preview + Thumbs */}
                <div>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <img src={previewImg} alt="Preview" className="w-full h-[600px] rounded-md object-contain" />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100">
                            <FaAngleLeft className="text-xl text-gray-600" />
                        </button>
                        <div className="flex gap-3">
                            {product.images.slice(thumbStartIndex, thumbStartIndex + 4).map((img, idx) => {
                                const actualIndex = thumbStartIndex + idx;
                                return (
                                    <img
                                        key={actualIndex}
                                        src={`${API}${img.url}`}
                                        alt={img.alt || `Thumbnail ${actualIndex + 1}`}
                                        className={`w-20 h-20 border rounded-lg cursor-pointer object-cover ${actualIndex === currentIndex ? 'border-pink-500' : 'border-gray-300'}`}
                                        onClick={() => {
                                            setPreviewImg(`${API}${img.url}`);
                                            setCurrentIndex(actualIndex);
                                        }}
                                    />
                                );
                            })}

                        </div>
                        <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100">
                            <FaAngleRight className="text-xl text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col gap-4">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-semibold">{product.name}</h2>
                        <div className='flex gap-2'>
                            <div className='flex bg-red-100 text-red-500 p-2 rounded-lg items-center gap-1'><Heart /> 109</div>
                            {/* <div className='text-blue-600 p-2 bg-blue-100 rounded-lg'><Bookmark /></div> */}
                            <div
                                className="text-blue-600 p-2 bg-blue-100 rounded-lg cursor-pointer"
                                onClick={handleShare}
                                title="Share Product"
                            >
                                <Share2 />
                            </div>

                        </div>
                    </div>

                    <p className="text-sm text-gray-500">{product.category || "Standard Category"}</p>

                    <div className="flex items-center gap-4 mb-1">
                        <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
                        <div className="flex items-center gap-2">
                            <div className="flex">{renderStars()}</div>
                            <span className="text-sm text-gray-600">({product.rating || 0})</span>
                        </div>

                        <span className="text-[#ED0E64] flex bg-[#EDF0F8] rounded-full px-2 py-1 text-sm">
                            <MessageCircleMore strokeWidth={2} />
                            <span className='ml-1 mt-0.5 text-[16px] font-[600]'>{product.reviews || 0} Reviews</span>
                        </span>
                    </div>

                    {/* Quantity & Cart */}
                    <div className="flex items-center gap-4 mt-4">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 bg-gray-100 rounded-md">-</button>
                        <span className="px-4">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-100 rounded-md">+</button>
                        <button onClick={(e) => { e.stopPropagation(); addToCart(product._id, quantity) }} className="ml-6 bg-pink-600 text-white px-6 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                            ADD TO CART <HiOutlineShoppingBag />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600">Description: {product.description}</p>

                    {/* Delivery Info */}
                    <div className="mt-6 border border-[#E4E4E4] rounded-lg p-4 bg-gray-50">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-pink-600 text-xl"><Truck strokeWidth={1.5} /></span>
                            <div>
                                <p className="text-[16px] text-[#1D364D] font-[600]">Free Delivery</p>
                                <p className="text-sm text-gray-500">Enter your postal code for delivery availability</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-300 my-2"></div>
                        <div className="flex items-start gap-3 mt-4">
                            <span className="text-pink-600 text-xl"><ShoppingBag strokeWidth={1.5} /></span>
                            <div>
                                <p className="text-[16px] text-[#1D364D] font-[600]">Return Delivery</p>
                                <p className="text-sm text-gray-500">Free 30 Days Delivery Return. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;




