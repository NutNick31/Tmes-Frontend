import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Swiper_Scroll = () => (
  <div className="Prof section__padding" id="Prof">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 30,
        stretch: 10,
        depth: 1000,
        modifier: 1.1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://source.unsplash.com/0Q5s7hXe9Eg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/qG6QtyOaOGQ" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/jDaKgGJYRgU" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/Sy_8KuxLwBI" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Swiper_Scroll;
