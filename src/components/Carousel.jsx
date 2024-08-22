import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center">USA Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="https://i.pinimg.com/736x/02/0c/cd/020ccddfd9300cbae718ad2733746977.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://i.pinimg.com/564x/06/3c/0f/063c0fbb581bc937e0937958dc4b28fb.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.pinimg.com/564x/58/b0/25/58b025762e5ccc485cffbd1340dc0abe.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/0b/ea/3c/0bea3cc1579c5dec6195367435cdcd39.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/7a/71/33/7a71332ce400bc8d112f1f93734016eb.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/63/75/45/637545c577a88907ba9355b028075c57.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/58/b0/25/58b025762e5ccc485cffbd1340dc0abe.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/0b/ea/3c/0bea3cc1579c5dec6195367435cdcd39.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/7a/71/33/7a71332ce400bc8d112f1f93734016eb.jpg"
              alt=""
            />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaArrowRight />
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
