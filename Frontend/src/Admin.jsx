import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./Context/Context";

export default function Admin() {

  let{URL}= useContext(UserContext)
  
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState(null);
    let [password, setPassword] = useState("");

    let [lock, setlock] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data= new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('price', price);
    data.append('image', image);


    try {
      let res = await axios.post(`${URL}/product`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      alert("Product uploaded successfully");
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleSubmitpass=(e)=>{
    e.preventDefault();
    if (password==="shajan143") {
      setlock(true);
    } else {
      alert("Incorrect Password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      { lock &&
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Upload Product
        </h2>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:border-white"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            value={description}
            required
            onChange={(e)=>setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:border-white"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            required
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:border-white"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-1">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            value={image}
            required
            onChange={(e)=>setImage(e.target.files[0])}
            className="w-full text-sm text-gray-400 file:bg-white file:text-black file:px-4 file:py-2 file:rounded-lg file:border-0 file:cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Upload Product
        </button>
      </form>
      }
      
      { lock===false &&
         <form
        onSubmit={handleSubmitpass}
        className="w-full max-w-sm bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-lg"
      >
        <label className="block text-sm text-gray-300 mb-2">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          className="w-full px-4 py-2 mb-4 rounded-lg bg-black text-white border border-zinc-700 focus:outline-none focus:border-white"
        />

        <button
          type="submit"
          className="cursor-pointer w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
      }
    </div>
    );
}