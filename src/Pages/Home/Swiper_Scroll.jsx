import React from "react";
import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Swiper_Scroll = () => (
  <div className="Prof section__padding" id="Prof">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
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
