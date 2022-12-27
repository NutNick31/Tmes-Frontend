import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SkillCard.scss";
// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const images = [
  "https://drive.google.com/uc?id=1u5X90QgOnMncgNkr1MDuJBeZNoIgvIty",
  "https://drive.google.com/uc?id=12S046ewz6QS9xXsRdUx9yh4emC2Fr_pu",
  "https://drive.google.com/uc?id=1iv_UlbFTu7jtzmeILnDdLpfWZHCuV0OO",
  "https://drive.google.com/uc?id=1ItMXEMiDEXtXfV4wjHCmRMPKynx6b0k8",
  "https://drive.google.com/uc?id=1rwikovZxKRTn95sobcKe2jDlloslrYSS",
  "https://drive.google.com/uc?id=1v7FG_uGMPXiWciU7HiaFCgbBBLDvFxjt",
  "https://drive.google.com/uc?id=1qWtD-nStAIkk0rqmAuSn_IjKuxzskP_i",
  "https://drive.google.com/uc?id=1PcKV5ZeVnYtHUqFDW0xhah6KmyRXumRd",
  "https://drive.google.com/uc?id=1TkbuyJHZVHtsPCOrQA595ntjbENthYA3",
  "https://drive.google.com/uc?id=1nEZeKIidyfTh2rzTvaunfv03eEw74cEe",
];

export default function Carousel2() {
  return (
    <div className="carousel2">
      {/* <div className="carousel2_title">
        <h2>Welcome</h2>
      </div> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={-50}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        coverflowEffect={{
          rotate: 10,
          depth: 90,
          modifier: 5,
        }}
        navigation
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
