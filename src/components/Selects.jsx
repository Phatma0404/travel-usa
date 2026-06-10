import SelectsCard from "./SelectsCard";
import { cards } from "../cards";
import { useInView } from "../hooks/useScrollAnimation";

const Selects = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="travel" className="bg-slate-50 dark:bg-slate-950 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-500 font-semibold mb-3">
              Continue Your Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Across the{" "}
              <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
                United States
              </span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/40 text-sm max-w-sm leading-relaxed md:text-right">
            New York is just the beginning — discover the rest of America&apos;s
            most iconic destinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <SelectsCard
              key={card.id}
              bg={card.bg}
              text={card.text}
              description={card.description}
              index={index}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selects;
