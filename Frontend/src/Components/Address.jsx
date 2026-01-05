import { useEffect, useState } from "react";
import bgimg from "../assets/IMG_20260105_135013.png";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function Address() {

    let navi=useNavigate();
    let {id}=useParams();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
  title: "Your address has been saved!",
  icon: "success",
  showConfirmButton: false,
  timer: 1500
});
    navi(`/payment/${id}`);
  };

  return (
    <>
    <div className="min-h-screen  bg-cover bg-center flex items-center justify-center bg-black px-4" style={{ backgroundImage: `url(${bgimg})` }}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Enter Your Address Details
        </h2>

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none 
             " 
        />

        {/* Phone */}
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none
          [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [appearance:textfield]"
        />

        {/* Address Line */}
        <textarea
          name="addressLine"
          placeholder="Street Address"
          rows="3"
          required
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none"
        />

        {/* City & State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            required
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none"
          />
        </div>

        {/* Pincode & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            required
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:border-white outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer w-full mt-6 bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Save Address
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
