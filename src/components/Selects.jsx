import SelectsCard from "./SelectsCard";
import { cards } from "../cards";

const Selects = () => {
  return (
    <section id="travel" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Explore more
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800">Also Travel</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            New York is just the beginning — discover these incredible
            destinations across the United States.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <SelectsCard
              key={card.id}
              bg={card.bg}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Selects;
