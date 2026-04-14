import React, { useEffect, useRef } from "react";
import newyork from "../assets/newyork.mp4";
import "../assets/style/learnmorebtn.css";
import { Link } from "react-scroll";


const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const badge = badgeRef.current;

    [title, subtitle, badge].forEach((el) => el.classList.add("opacity-0"));

    setTimeout(() => {
      badge.classList.remove("opacity-0");
      badge.classList.add("animate-fadeIn");
    }, 400);

    setTimeout(() => {
      title.classList.remove("opacity-0");
      title.classList.add("animate-fadeIn");
    }, 900);

    setTimeout(() => {
      subtitle.classList.remove("opacity-0");
      subtitle.classList.add("animate-fadeIn");
    }, 1400);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Video */}
      <video
        className="w-full h-full object-cover scale-105"
        src={newyork}
        autoPlay
        loop
        muted
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
          Discover the world
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl mb-4"
        >
          New <span className="text-blue-400">York</span> City
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="flex flex-col items-center gap-6">
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            The city that never sleeps — explore iconic landmarks, culture, and unforgettable moments.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              to="newyork"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors px-8 py-3 rounded-full font-semibold text-white tracking-wide shadow-lg"
            >
              Explore Now
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer border border-white/50 hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-semibold text-white tracking-wide backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
