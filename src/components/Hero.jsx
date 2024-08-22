import React from "react";
import newyork from "../assets/newyork.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={newyork}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-[-10%] w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>New York City</h1>
          <h2 className="py-3">The land of deep dreams</h2>
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
            <div>
              <input
                className="bg-transparent w-[200px] xs:w-[400px] font-[Poppins] focus:outline-none px-10"
                type="text"
                placeholder="Search State"
              />
            </div>

            <div>
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "#fff" }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
