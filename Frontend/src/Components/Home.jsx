import React, { useContext } from 'react'
import Header from './Header'
import ProductCard from "./ProductCard";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Timer from './Timer';
import { UserContext } from '../Context/Context';
import Footer from './Footer';
import Swal from 'sweetalert2';

const Home = () => {

  let {data, URL}= useContext(UserContext)
  

  const [products, setProducts] = useState([]);

  const[load,setload]=useState(false);

  useEffect(()=>{
    axios.get(`${URL}/products`)
    .then((response)=>{
      setProducts(response.data);
      setload(true);
    })
    .catch((error)=>{
      console.error('There was an error fetching the products!', error);
    });

    window.scrollTo(0, 0);

  },[])

  const query = (typeof data === 'string' ? data : String(data || '')).toLowerCase();

  let filterdata = products.filter((item) => {
    const name = item && item.name ? item.name : '';
    return String(name).toLowerCase().includes(query);
  });


  {filterdata.length === 0 && <p className='text-center text-w text-xl font-semibold mt-10'>No Products Found</p>}
  

  if (!load) {
    return(
       <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Logo / Brand */}
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">
        <span className='text-4xl md:text-6xl'>4</span><span className="text-gray-400">Nine</span>
      </h1>

      <p className="text-gray-400 mt-2 text-sm tracking-wide">
        Elegance for Men & Women
      </p>

      {/* Loader */}
      <div className="mt-8 w-14 h-14 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="text-gray-500 text-xs mt-6 tracking-widest uppercase">
        Loading Collection...
      </p>
    </div>
    )
  }

  
  return (
    <>
    <Header/>
    <div className='w-full h-screen mt-30 px-5 md:px-10 mb-10'>
       <p className="text-sm text-center pt-5 font-semibold tracking-wide animate-pulse">
        🔥 Hurry! Offer ends in:
      </p>
      <Timer/>
       <div className=" mx-auto pb-10">
      <p className="text-xs text-center font-bold mb-6">We believe that products is more than just fashion—it’s a reflection of confidence, comfort, and individuality. That’s why our <span onClick={()=>{Swal.fire("Developed By Shajan!!");}}>men’s</span> and women’s wear is designed with careful attention to quality, fit, and detail. From selecting premium fabrics to perfecting every stitch, we focus on delivering products that feel as good as they look.
Our designs are inspired by modern lifestyles, blending timeless style with everyday practicality.<span className='hidden md:block'>Each piece is thoughtfully crafted to offer long-lasting durability, breathable comfort, and a fit that complements every body type.
We are committed to honest quality and consistent value. Every product goes through strict quality checks to ensure it meets our standards before reaching you. Whether it’s casual wear or statement pieces, our collection is made to support your confidence, day after day.</span> </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdata.length>0 ? filterdata.map((item) => (
          <ProductCard key={item._id} product={item} />
        )) : <div className='flex justify-center'><p className='text-center  text-2xl font-semibold mt-10 animate-pulse'>No Products Found!!</p></div>}
      </div>
    </div>
       <Footer/>
    </div>
    </>
  )
}

export default Home