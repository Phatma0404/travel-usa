import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { useInView } from "../hooks/useScrollAnimation";

const SelectsCard = ({ text, bg, description, index, delay = 0 }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onClick={() => navigate("/city-details/" + text)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "700ms",
      }}
      className={`relative overflow-hidden rounded-3xl cursor-pointer group h-[320px] shadow-2xl transition-all ease-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={bg}
        alt={text}
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-brand-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Number watermark */}
      <span className="absolute top-3 left-5 text-white/10 font-black text-7xl leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Explore badge */}
      <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-brand-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Explore <HiArrowRight size={11} />
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-1.5 mb-2">
          <MdLocationPin className="text-brand-400" size={14} />
          <span className="text-brand-400 text-xs uppercase tracking-widest font-semibold">
            United States
          </span>
        </div>
        <h3 className="text-white text-2xl font-extrabold leading-tight transition-all duration-500 mb-0 group-hover:mb-3">
          {text}
        </h3>
        <p className="text-white/65 text-sm leading-relaxed overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

SelectsCard.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number,
  delay: PropTypes.number,
};

export default SelectsCard;
