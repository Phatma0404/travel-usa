import React from "react";
import "../assets/style/ImageSlider.css";
import { Typewriter } from "react-simple-typewriter";
const ImageSlider = () => {
  return (
    <div className="bg-gray-200">
      <section className="">
        <header className="text-2xl text-center font-bold mt-20 pt-20">
          NEW YORK CITY /{" "}
          <span className="text-green-800">
            <Typewriter
              words={[
                "Times Square",
                "Brooklyn Bridge",
                "Central Park",
                "Harvard University",
                "Empire State Building",
                "The Metropolitan Museum of Art",
                "Bryant Park",
                "Statue of Liberty",
              ]}
              loop={2}
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </header>
      </section>

      <div>
        <div className="slider-header">
          <div className="slider">
            <span style={{ "--i": 1 }}>
              <img
                src="https://images.unsplash.com/photo-1589336042307-915d053a10b4?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>

            <span style={{ "--i": 2 }}>
              <a href="https://facebook.com" target="_blank">
                <img
                  src="https://images.unsplash.com/photo-1585163435462-7e7796fa4b9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </a>
            </span>
            <span style={{ "--i": 3 }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1697729862026-8f486fcd7f8b?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span style={{ "--i": 4 }}>
              <img
                src="https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>

            <span style={{ "--i": 5 }}>
              <img
                src="https://images.unsplash.com/photo-1618549653618-8a287ca52dbb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span style={{ "--i": 6 }}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1499426600726-a950358acf16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span style={{ "--i": 7 }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1682960971720-1beb427d524e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
            <span style={{ "--i": 8 }}>
              <img
                src="https://images.unsplash.com/photo-1528697294404-209d29137492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          cupiditate dicta error nostrum adipisci rem itaque nisi est placeat
          illo odit recusandae voluptate unde dolores, doloribus vel excepturi
          consequatur vero quam accusamus perferendis veritatis dolore? Natus
          itaque eaque aliquid accusamus maiores dicta distinctio,
          necessitatibus praesentium alias corrupti tempora officia maxime
          provident dolor. Dolorem dicta eius possimus amet velit eligendi,
          exercitationem natus voluptatem iste voluptates adipisci! Quibusdam
          voluptatum, libero, pariatur distinctio saepe odio voluptatibus
          accusamus ipsam obcaecati nihil ducimus eos enim hic? Necessitatibus
          architecto sapiente porro vero numquam suscipit dicta. Ipsa vero
          impedit porro culpa fugit eveniet harum ipsum, reiciendis
          exercitationem sed? Consequuntur temporibus qui quo perspiciatis
          provident amet quibusdam error, velit quam necessitatibus fugit
          mollitia repudiandae neque voluptatem odit quia repellendus esse ipsam
          omnis? Doloribus deserunt quam natus ipsum a.
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
