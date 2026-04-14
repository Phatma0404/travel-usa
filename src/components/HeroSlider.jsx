import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../cards";

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const prev = () => setActive((p) => (p === 0 ? cards.length - 1 : p - 1));
  const next = () => setActive((p) => (p === cards.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [active]);

  const current = cards[active];

  return (
    <section className="relative w-full h-screen overflow-hidden mt-16">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={card.bg}
            alt={card.text}
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

      <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20">
        <div className="text-white max-w-md z-10">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">
            Featured Destination
          </p>
          <h1
            key={active}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fadeIn"
          >
            {current.text}
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            {current.description}
          </p>
          <button
            onClick={() => navigate("/city-details/" + current.text)}
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-8 py-3 rounded-full shadow-lg tracking-wide"
          >
            Explore
          </button>
        </div>

        <div className="hidden md:flex flex-col items-end gap-4 z-10">
          {/* Cards row */}
          <div className="flex gap-3 items-end">
            {cards.map((card, i) => (
              <button
                key={card.id}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-xl transition-all duration-500 flex-shrink-0 ${
                  i === active
                    ? "w-36 h-48 ring-2 ring-white shadow-2xl"
                    : "w-24 h-32 opacity-60 hover:opacity-80"
                }`}
              >
                <img
                  src={card.bg}
                  alt={card.text}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-white text-xs font-bold truncate">
                    {card.text}
                  </p>
                  <p className="text-white/60 text-[10px] truncate">
                    United States
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-2 mt-1">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 md:hidden z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-white/20 transition flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white hover:bg-white/20 transition flex items-center justify-center"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-10 left-10 md:left-20 flex gap-2 z-10">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
