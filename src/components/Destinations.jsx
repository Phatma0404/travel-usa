import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";
const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <div className="mb-5">
        <h1>NEW YORK</h1>
        {/* <span>Example Tagline Text</span> */}
      </div>

      <div name="newyork" className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/564x/97/bb/cd/97bbcddbe2b0aecb88e0bc33735f23aa.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/564x/22/2d/1e/222d1e5108c6c032e893580ea0f4545e.jpg"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/564x/e8/1f/2d/e81f2d0c49c0532415fdfa33d4647106.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Destinations;
