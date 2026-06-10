import Hero from "./Hero";
import HeroSlider from "./HeroSlider";
import NewYorkFeatured from "./NewYorkFeatured";
import ImageSlider from "./ImageSlider";
import Selects from "./Selects";
import ContactForm from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSlider />
      <NewYorkFeatured />
      <ImageSlider />
      <Selects />
      <ContactForm />
    </div>
  );
};

export default Home;