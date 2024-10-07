import React from "react";
import "../assets/style/ImageSlider.css";
import { Typewriter } from "react-simple-typewriter";
const ImageSlider = () => {
  return (
    <div className="bg-gray-200">
      <section className="">
        <header className="text-2xl text-center font-bold mt-20 pt-20">
          NEW YORK CITY{" "}
          <span className="text-green-800">
            <Typewriter
              words={["sadfsd", "dfsdfds", "sdfsdfsd"]}
              loop={2}
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </header>
      </section>
      <div className="slider-header">
        <div className="slider">
          <span style={{ "--i": 1 }}>
            <img
              src="https://images.unsplash.com/photo-1646425468701-11753d5fbd51?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>

          <span style={{ "--i": 2 }}>
            <a href="https://facebook.com" target="_blank">
              <img
                src="https://plus.unsplash.com/premium_photo-1670176447319-c5622f2fb996?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </a>
          </span>
          <span style={{ "--i": 3 }}>
            <img
              src="https://images.unsplash.com/photo-1640102153868-a5e356c433b8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
          <span style={{ "--i": 4 }}>
            <img
              src="https://images.unsplash.com/photo-1519429753079-3b0f0a95dea8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>

          <span style={{ "--i": 5 }}>
            <img
              src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
          <span style={{ "--i": 6 }}>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1685442651713-6b15e805932a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
          <span style={{ "--i": 7 }}>
            <img
              src="https://images.unsplash.com/photo-1548182880-8b7b2af2caa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
          <span style={{ "--i": 8 }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1680284197425-4bd125d75cab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
