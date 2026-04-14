import React from 'react'
import Hero from './Hero'
import HeroSlider from './HeroSlider'
// import Destinations from './Destinations'
// import Search from './Search'
import Selects from './Selects'
// import Carousel from './Carousel'
import ImageSlider from './ImageSlider'
import ContactForm from './Contact'

const Home = () => {
  return (
    <div>

      <Hero />
      <HeroSlider />
      {/* <Destinations /> */}
      {/* <Search /> */}
      <ImageSlider />
      <Selects />

      <ContactForm />
      {/* <Carousel /> */}
    </div>

  )
}

export default Home