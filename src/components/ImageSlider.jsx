import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "../hooks/useScrollAnimation";

const AutoPauseVideo = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          el.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*",
          );
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      ref={ref}
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/8X-CQdmwSB8?enablejsapi=1&controls=1&vq=hd1080&rel=0"
      title="New York City in Motion"
      style={{ border: "none" }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  );
};

const slides = [
  {
    img: "https://images.unsplash.com/photo-1589336042307-915d053a10b4?q=80&w=1971&auto=format&fit=crop",
    location: "Times Square",
    desc: "The heart of Manhattan — dazzling lights, iconic billboards",
  },
  {
    img: "https://images.unsplash.com/photo-1585163435462-7e7796fa4b9e?q=80&w=1974&auto=format&fit=crop",
    location: "Brooklyn Bridge",
    desc: "A masterpiece of engineering connecting Manhattan and Brooklyn",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1697729862026-8f486fcd7f8b?q=80&w=2147&auto=format&fit=crop",
    location: "Central Park",
    desc: "843 acres of green oasis in the middle of New York City",
  },
  {
    img: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1974&auto=format&fit=crop",
    location: "Empire State Building",
    desc: "An iconic Art Deco skyscraper standing 443 meters tall",
  },
  {
    img: "https://images.unsplash.com/photo-1618549653618-8a287ca52dbb?q=80&w=1935&auto=format&fit=crop",
    location: "Statue of Liberty",
    desc: "A symbol of freedom and democracy welcoming the world",
  },
  {
    img: "https://images.unsplash.com/photo-1499426600726-a950358acf16?q=80&w=2070&auto=format&fit=crop",
    location: "New York at Night",
    desc: "The city that never sleeps — glowing under a million lights",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682960971720-1beb427d524e?q=80&w=2076&auto=format&fit=crop",
    location: "Bryant Park",
    desc: "A beloved urban park surrounded by stunning architecture",
  },
  {
    img: "https://images.unsplash.com/photo-1528697294404-209d29137492?q=80&w=2070&auto=format&fit=crop",
    location: "Manhattan Skyline",
    desc: "One of the most recognizable skylines in the entire world",
  },
];

const ImageSlider = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <div className="bg-slate-50 dark:bg-slate-900" id="gallery">
      <section
        ref={headerRef}
        className={`pt-20 pb-10 text-center transition-all duration-700 ${
          headerInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm uppercase tracking-widest text-brand-500 font-semibold mb-2">
          Featured City · New York
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white">
          NEW YORK CITY &nbsp;/&nbsp;
          <span className="text-brand-500">
            <Typewriter
              words={[
                "Times Square",
                "Brooklyn Bridge",
                "Central Park",
                "Empire State Building",
                "The Metropolitan Museum of Art",
                "Bryant Park",
                "Statue of Liberty",
              ]}
              loop={0}
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </span>
        </h2>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={slide.img}
                alt={slide.location}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-48" : "h-60"
                }`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-widest text-brand-300 mb-1">
                  New York City
                </p>
                <h3 className="text-white font-bold text-lg leading-snug mb-1">
                  {slide.location}
                </h3>
                <p className="text-white/70 text-xs line-clamp-2">
                  {slide.desc}
                </p>
              </div>
              {/* Top badge */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container px-5 py-20 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-brand-400 mb-6"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg text-slate-600 dark:text-slate-300">
              New York City is more than a destination — it&apos;s an experience.
              From the towering skyscrapers of Manhattan to the artistic streets
              of Brooklyn, every corner of this city tells a story. Whether
              you&apos;re drawn by the culture, the cuisine, or the energy, New York
              will leave a mark on your soul.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-4"></span>
            <h2 className="text-slate-900 dark:text-white font-semibold tracking-wider text-sm uppercase">
              New York City
            </h2>
            <p className="text-slate-400 dark:text-slate-500 text-sm">The City That Never Sleeps</p>
          </div>
        </div>
      </section>

      {/* YouTube Video — Yan-yana layout */}
      <section className="border-t border-slate-200 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-sm uppercase tracking-widest text-brand-400 font-semibold mb-3">
                Watch
              </p>
              <h3 className="text-4xl font-extrabold mb-4 leading-tight">
                New York City <br />
                <span className="text-brand-400">in Motion</span>
              </h3>
              <div className="w-12 h-1 bg-brand-400 rounded-full mb-6" />
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                Experience the energy of New York City like never before. From
                the towering skyline to the bustling streets, this cinematic
                journey captures the soul of one of the world&apos;s greatest cities.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl font-extrabold text-brand-400 mb-1">
                    8M+
                  </p>
                  <p className="text-white/50 text-sm">Residents</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl font-extrabold text-brand-400 mb-1">
                    800+
                  </p>
                  <p className="text-white/50 text-sm">Landmarks</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl font-extrabold text-brand-400 mb-1">
                    66M
                  </p>
                  <p className="text-white/50 text-sm">Annual Visitors</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl font-extrabold text-brand-400 mb-1">
                    302
                  </p>
                  <p className="text-white/50 text-sm">km² Area</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <AutoPauseVideo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
