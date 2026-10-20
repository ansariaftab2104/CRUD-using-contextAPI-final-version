// Basic Navbar structure :- 
import React, { useContext } from "react";
import { MyStore } from "../context/AppContext";

const Navbar = () => {
      const { setToggle, toggle } = useContext(MyStore);
  return (
    <nav className="flex items-center justify-between bg-zinc-500 px-10 py-3">
      <div className="logo">
        <h1 className="text-xl font-semibold text-white">MAA</h1>
      </div>
      <div className="text-base font-semibold text-white flex gap-5 hidden md:flex">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Contact Us</a>
      </div>
      <button onClick={()=>setToggle((prev)=>!prev)} className="bg-zinc-800 px-2 py-1 rounded cursor-pointer text-white">{toggle ? "Create Profile" : "Close"}</button>
    </nav>
  );
};

export default Navbar;




