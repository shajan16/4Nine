import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context/Context';

const Header = () => {

  let navi = useNavigate();
  let{setdata}=useContext(UserContext);


  return (
    <div className='fixed  bg-black w-full z-30 top-0'>
     <div className='flex h-30 justify-around items-center border-b border-gray-800 p-4'>
        <h1 className='text-3xl md:text-5xl font-bold font-serif'>4Nine<span onClick={()=>navi("/admin")}>.</span></h1>

       
<form className="rounded-2xl w-[50%] md:w-1/3">   
    <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
    <div className="relative rounded-2xl">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" onChange={(e)=>setdata(e.target.value)} className="rounded-xl block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
    </div>
</form>

 </div>
    </div>

  )
}

export default Header