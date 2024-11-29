import React from "react";
import "../assets/style/ImageSlider.css";
import { Typewriter } from "react-simple-typewriter";
const ImageSlider = () => {
  return (
    <div className="bg-gray-200" id="newyork">
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
              loop={1}
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
            <span style={{}}>
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
        <section class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              {/* <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500">Senior Product Designer</p> */}
            </div>
          </div>
        </section>
        <section class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            {/* <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
            </div> */}
            <div className="flex flex-wrap -m-4">
              <div className="p-4 w-full md:w-3/4 lg:w-2/3 mx-auto">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div
                    className="relative overflow-hidden"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/8X-CQdmwSB8?autoplay=0&loop=1&controls=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageSlider;
