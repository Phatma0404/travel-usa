import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cards } from "../cards";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

const attractionsData = {
  California: [
    {
      name: "Golden Gate Bridge",
      img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&auto=format&fit=crop",
      desc: "San Francisco's iconic red suspension bridge.",
    },
    {
      name: "Yosemite National Park",
      img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop",
      desc: "Breathtaking valleys, waterfalls and granite cliffs.",
    },
    {
      name: "Hollywood Walk of Fame",
      img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&auto=format&fit=crop",
      desc: "Stars of legendary artists on the famous boulevard.",
    },
  ],
  Chicago: [
    {
      name: "Millennium Park",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop",
      desc: "Home to Cloud Gate — the iconic silver Bean sculpture.",
    },
    {
      name: "Navy Pier",
      img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&auto=format&fit=crop",
      desc: "A vibrant waterfront destination on Lake Michigan.",
    },
    {
      name: "Art Institute of Chicago",
      img: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&auto=format&fit=crop",
      desc: "One of the oldest and largest art museums in the US.",
    },
  ],
  Florida: [
    {
      name: "Miami Beach",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
      desc: "Sun, sand and vibrant nightlife on the Atlantic coast.",
    },
    {
      name: "Walt Disney World",
      img: "https://images.unsplash.com/photo-1552084117-56a987666449?w=600&auto=format&fit=crop",
      desc: "The most magical place on Earth in Orlando.",
    },
    {
      name: "Everglades National Park",
      img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=600&auto=format&fit=crop",
      desc: "Unique subtropical wilderness and wildlife.",
    },
  ],
  Washington: [
    {
      name: "Lincoln Memorial",
      img: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&auto=format&fit=crop",
      desc: "A tribute to the 16th U.S. President.",
    },
    {
      name: "The White House",
      img: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=600&auto=format&fit=crop",
      desc: "Official residence of the President of the United States.",
    },
    {
      name: "Smithsonian Museums",
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop",
      desc: "World's largest museum and research complex.",
    },
  ],
  Hawaii: [
    {
      name: "Waikiki Beach",
      img: "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=600&auto=format&fit=crop",
      desc: "Famous stretch of white sand beach in Honolulu.",
    },
    {
      name: "Volcanoes National Park",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop",
      desc: "Active volcanoes and dramatic lava landscapes.",
    },
    {
      name: "Na Pali Coast",
      img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&auto=format&fit=crop",
      desc: "Stunning cliffs and emerald valleys on Kauai.",
    },
  ],
  Nevada: [
    {
      name: "Las Vegas Strip",
      img: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=600&auto=format&fit=crop",
      desc: "Neon lights, casinos and world-class entertainment.",
    },
    {
      name: "Grand Canyon",
      img: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600&auto=format&fit=crop",
      desc: "One of the world's most spectacular natural wonders.",
    },
    {
      name: "Red Rock Canyon",
      img: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=600&auto=format&fit=crop",
      desc: "Stunning red sandstone formations near Las Vegas.",
    },
  ],
};

const galleryData = {
  California: [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&auto=format&fit=crop",
  ],
  Chicago: [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=800&auto=format&fit=crop",
  ],
  Florida: [
    "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552084117-56a987666449?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1709316697730-09692ae12f55?q=80&auto=format&fit=crop",
  ],
  Washington: [
    "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596688056149-f649dc280cc8?q=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610809027249-86c649feacd5?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
  ],
  Hawaii: [
    "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
  ],
  Nevada: [
    "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570521462033-3015e76e7432?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop",
  ],
};

const infoData = {
  California: {
    population: "39.5M",
    climate: "Mediterranean",
    language: "English",
    bestTime: "April – October",
  },
  Chicago: {
    population: "2.7M",
    climate: "Continental",
    language: "English",
    bestTime: "June – August",
  },
  Florida: {
    population: "22M",
    climate: "Subtropical",
    language: "English",
    bestTime: "March – May",
  },
  Washington: {
    population: "700K",
    climate: "Humid",
    language: "English",
    bestTime: "March – May",
  },
  Hawaii: {
    population: "1.4M",
    climate: "Tropical",
    language: "English / Hawaiian",
    bestTime: "April – June",
  },
  Nevada: {
    population: "3.1M",
    climate: "Desert",
    language: "English",
    bestTime: "March – May",
  },
};

const CityDetails = () => {
  const { text } = useParams();
  const navigate = useNavigate();
  const cityCard = cards.find((card) => card.text === text);
  const attractions = attractionsData[text] || [];
  const info = infoData[text] || {};
  const gallery = galleryData[text] || [];
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prevImg = () =>
    setLightbox((i) => (i - 1 + gallery.length) % gallery.length);
  const nextImg = () => setLightbox((i) => (i + 1) % gallery.length);

  if (!cityCard) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">City not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── 1. HERO ── */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={cityCard.bg}
          alt={cityCard.text}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-blue-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Discover
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-4">
            {cityCard.text}
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            {cityCard.description}
          </p>
          <div className="w-16 h-1 bg-blue-400 rounded-full mt-6" />
        </div>
      </div>

      {/* ── 2. HAQQINDA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            About
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800">
            About {cityCard.text}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Population", value: info.population },
            { label: "Climate", value: info.climate },
            { label: "Language", value: info.language },
            { label: "Best Time", value: info.bestTime },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center"
            >
              <p className="text-blue-500 text-xs uppercase tracking-widest font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-gray-800 font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. GÖRMƏLİ YERLƏR ── */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2">
              Must See
            </p>
            <h2 className="text-4xl font-extrabold text-white">
              Top Attractions
            </h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((place) => (
              <div
                key={place.name}
                className="group rounded-2xl overflow-hidden shadow-lg bg-gray-800"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {place.name}
                  </h3>
                  <p className="text-white/60 text-sm">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. QALEREYa ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Photos
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800">Gallery</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group h-56"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img}
                alt={`${text} ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-3xl font-light">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 transition"
          >
            <AiOutlineClose size={30} />
          </button>
          <button
            onClick={prevImg}
            className="absolute left-5 text-white hover:text-gray-300 transition"
          >
            <AiOutlineLeft size={36} />
          </button>
          <img
            src={gallery[lightbox]}
            alt="gallery"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
          />
          <button
            onClick={nextImg}
            className="absolute right-5 text-white hover:text-gray-300 transition"
          >
            <AiOutlineRight size={36} />
          </button>
          <p className="absolute bottom-5 text-white/50 text-sm">
            {lightbox + 1} / {gallery.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default CityDetails;
