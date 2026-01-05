import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ProductCard = ({ product }) => {

  let navi=useNavigate()

  const offerPrice = 49;
  const originalPrice = product.price;

  const discount =
    originalPrice > offerPrice
      ? Math.floor(((originalPrice - offerPrice) / originalPrice) * 100)
      : 0;


  return (
    <>
    <div className="group bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={
            product.imageUrl && (product.imageUrl.startsWith("http") || product.imageUrl.startsWith("https"))
              ? product.imageUrl
              : `http://localhost:4000/uploads/${product.imageUrl}`
          }
          alt={product.name || "product image"}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Discount Badge */}
        { discount > 0 &&
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        }
        
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-green-600">
            ₹49
          </span>
          
            <span className="text-sm line-through text-gray-400">
              ₹{product.price}
            </span>
          
        </div>

        {/* Button */}
        <button className="cursor-pointer mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-300 hover:text-black transition-all ease-in-out duration-300 "
        onClick={()=>navi(`/address/${product._id}`)}
        >
          Buy Now
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
