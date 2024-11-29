import React, { useEffect, useRef } from "react";
import newyork from "../assets/newyork.mp4";
import "../assets/style/learnmorebtn.css";
import { Link } from "react-scroll";
const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    title.classList.add("hidden");
    subtitle.classList.add("hidden");

    setTimeout(() => {
      title.classList.remove("hidden");
      title.classList.add("animate-slideInDown");
    }, 1500);

    setTimeout(() => {
      subtitle.classList.remove("hidden");
      subtitle.classList.add("animate-slideInUp");
    }, 1500);
  }, []);
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
          <header className="animate-fadeIn">
            <h1>
              <div
                ref={titleRef}
                className="font-bold"
                data-animation="slideInDown"
              >
                Welcome to dreamland New York
              </div>

              <div
                className="btn-holder"
                ref={subtitleRef}
                data-animation="slideInUp"
              >
                <Link
                  to="newyork"
                  smooth={true}
                  duration={500}
                  className="btn btn-1 hover-filled-slide-left"
                >
                  <span>Let's start</span>
                </Link>
              </div>
            </h1>
          </header>
          {/* <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
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
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
