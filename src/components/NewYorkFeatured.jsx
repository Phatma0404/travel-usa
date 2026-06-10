import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { useInView } from "../hooks/useScrollAnimation";
import {
  FaCity,
  FaUsers,
  FaLandmark,
  FaPlaneArrival,
  FaMonument,
  FaTree,
  FaUtensils,
} from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";

const facts = [
  {
    icon: <FaCity />,
    label: "Boroughs",
    value: "5",
    sub: "Manhattan, Brooklyn, Queens, The Bronx, Staten Island",
  },
  {
    icon: <FaUsers />,
    label: "Population",
    value: "8.3M+",
    sub: "Largest city in the United States",
  },
  {
    icon: <FaLandmark />,
    label: "Landmarks",
    value: "100+",
    sub: "Iconic monuments and skyscrapers",
  },
  {
    icon: <FaPlaneArrival />,
    label: "Annual Visitors",
    value: "66M+",
    sub: "The most visited city in the US",
  },
];

const neighborhoods = [
  {
    name: "Manhattan",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    desc: "Skyscrapers, Broadway and the financial heart of the world.",
  },
  {
    name: "Brooklyn",
    image:
      "https://images.unsplash.com/photo-1585163435462-7e7796fa4b9e?q=80&w=800&auto=format&fit=crop",
    desc: "Artistic streets, brownstones and the iconic Brooklyn Bridge.",
  },
  {
    name: "Queens",
    image:
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop",
    desc: "The most diverse borough — food, culture and museums.",
  },
  {
    name: "The Bronx",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    desc: "Birthplace of hip-hop and home to Yankee Stadium.",
  },
];

const icons = [
  {
    icon: <FaMonument className="text-5xl" />,
    title: "Statue of Liberty",
    desc: "A universal symbol of freedom since 1886.",
  },
  {
    icon: <FaTree className="text-5xl" />,
    title: "Central Park",
    desc: "843 acres of green in the middle of Manhattan.",
  },
  {
    icon: <MdOutlineLocationCity className="text-5xl" />,
    title: "Times Square",
    desc: "The brightest crossroads on the planet.",
  },
  {
    icon: <FaUtensils className="text-5xl" />,
    title: "NYC Cuisine",
    desc: "From dollar pizza to Michelin-starred tasting menus.",
  },
];

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: "700ms" }}
      className={`transition-all ease-out ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

const NewYorkFeatured = () => {
  const navigate = useNavigate();
  const [headerRef, headerInView] = useInView();

  return (
    <section
      id="newyork"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black py-24 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-brand-400 font-semibold mb-3">
            Featured City
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            New <span className="text-brand-400">York</span> City
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-400 to-accent-400 mx-auto rounded-full mb-5" />
          <p className="text-white/60 text-base max-w-2xl mx-auto">
            The city that never sleeps — five boroughs, countless stories, and
            the starting point of your American journey.
          </p>
        </div>

        {/* ── Quick Facts ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {facts.map((fact, i) => (
            <AnimatedSection
              key={fact.label}
              delay={i * 100}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-brand-400 text-2xl mb-3">{fact.icon}</div>
              <p className="text-3xl font-extrabold text-white mb-1">
                {fact.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-brand-300 font-semibold mb-2">
                {fact.label}
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {fact.sub}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Neighborhoods ── */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-400 font-semibold mb-2">
                Explore the Boroughs
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Five boroughs, one city
              </h3>
            </div>
            <p className="text-white/40 text-sm max-w-sm md:text-right">
              Each neighborhood has its own rhythm, food and identity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n, i) => (
              <AnimatedSection
                key={n.name}
                delay={i * 100}
                className="group relative overflow-hidden rounded-2xl h-56 cursor-pointer"
              >
                <img
                  src={n.image}
                  alt={n.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-lg font-bold mb-1">
                    {n.name}
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {n.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Iconic NYC ── */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-brand-400 font-semibold mb-2">
              The Icons
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              What makes NYC, NYC
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {icons.map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 80}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-brand-400/50 transition-colors group"
              >
                <div className="text-brand-400 mb-4 group-hover:text-accent-400 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection>
          <div className="text-center bg-gradient-to-r from-brand-500/10 to-accent-500/10 border border-brand-400/20 rounded-3xl p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Ready to explore the city that never sleeps?
            </h3>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              See the full gallery, top attractions and travel tips for New
              York City.
            </p>
            <button
              onClick={() => navigate("/city-details/New York")}
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 transition-colors text-white font-semibold px-7 py-3 rounded-full shadow-lg"
            >
              Explore New York
              <HiArrowRight size={16} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewYorkFeatured;
