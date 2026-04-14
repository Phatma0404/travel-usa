import { useNavigate } from "react-router-dom";


const SelectsCard = ({ text, bg, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-72 shadow-lg"
      onClick={() => navigate("/city-details/" + text)}
    >
      {/* Image with zoom on hover */}
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={bg}
        alt={text}
      />

      {/* Static bottom gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* City name — always visible */}
      <h3 className="absolute bottom-5 left-5 text-white text-xl font-bold tracking-wide z-10 transition-transform duration-500 group-hover:-translate-y-10">
        {text}
      </h3>

      {/* Description — slides up on hover */}
      <p className="absolute bottom-5 left-5 right-5 text-white/80 text-sm z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {description}
      </p>

      {/* Explore badge */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        Explore →
      </div>
    </div>
  );
};

export default SelectsCard;
