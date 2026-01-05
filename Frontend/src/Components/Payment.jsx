import { useContext, useEffect, useState } from "react";
import QR from "../assets/Screenshot_2026-01-05-14-27-02-75_49b96b5fbae0d12a18edc4a3afe0dfd9.jpg";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { UserContext } from "../Context/Context";

export default function Payment() {

  let {URL}= useContext(UserContext)

    let [data,setdata]=useState("")
    let [product,setproduct]=useState({})
    let {id}= useParams();

    console.log(product);
    

    useEffect(()=>{
        axios.get(`${URL}/products/${id}`).then((res)=>{
            setproduct(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        window.scrollTo(0, 0);
    },[])

    let handlesubmit = ()=>{
        if (data==="") {
            Swal.fire({
              title: "Enter Your Transaction ID",
              icon: "info",
              draggable: true,
            });
        }else{
            Swal.fire({
              title: "Invaild Transaction ID",
              icon: "error",
              draggable: true,
            });
        }
    }

  return (
    <>
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Product Section */}
        <div className="p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800">
          <img
            src={
            product.imageUrl && (product.imageUrl.startsWith("http") || product.imageUrl.startsWith("https"))
              ? product.imageUrl
              : `http://localhost:4000/uploads/${product.imageUrl}`
          }
          alt={product.name || "product image"}
            className="w-72 h-72 object-cover rounded-2xl mb-6"
          />

          <h2 className="text-2xl font-bold text-white mb-2">
            {product.name}
          </h2>

          <p className="text-gray-400 text-center mb-4">
            {product.description}
          </p>
        </div>

        {/* Order Summary Section */}
        <div className="p-8">
          <h3 className="text-xl text-center font-semibold text-white mb-6">
            Order Summary
          </h3>

          <div className=" mb-5 flex items-center justify-center rounded-lg">
            <img src={QR} alt="" className="w-30 h-30 rounded-lg"/>
          </div>

          <div className="flex justify-between text-gray-300 mb-3">
            <span>Product Price</span>
            <span>₹49</span>
          </div>

          <div className="flex justify-between text-gray-300 mb-3">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="border-t border-zinc-700 my-4"></div>

          <div className="flex justify-between text-white text-lg font-semibold">
            <span>Total</span>
            <span>₹49</span>
          </div>

        <label className="block text-sm text-gray-300 mb-2 mt-6">
          Enter Transaction ID:
        </label>

        <input
          type="number"
          value={data}
          onChange={(e)=>setdata(e.target.value)}
          placeholder="Transaction ID"
          required
          className="w-full px-4 py-2 mb-4 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:border-white
          [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [appearance:textfield]"
        />

        <button className="cursor-pointer w-full mt-6 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        onClick={handlesubmit}
        >
            Place Order
          </button>

          <p className="text-gray-500 text-xs text-center mt-4">
            Secure checkout • 100% safe payments
          </p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}
