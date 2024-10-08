import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";
import NYC from "../assets/img/nycity.png"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  // styles

  const listStyle = {
    cursor: "pointer",
    fontSize: "20px"
  };
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <img src={NYC} alt="" width={200} height={200} />
      </div>

      <ul className="hidden md:flex">
        <li style={listStyle}>Home</li>
        <li style={listStyle}>
          <Link to="newyork" smooth={true} duration={500}>
            New York
          </Link>
        </li>
        <li style={listStyle}>
          <Link to="travel" smooth={true} duration={500}>
            Travel
          </Link>
        </li>
        <li style={listStyle}>Gallery</li>
        <li style={listStyle}>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* menu icon */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown*/}
      <div
        onClick={handleNav}
        className={`${nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
          }`}
      >
        <ul>
          <h1 className="border-b">BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
