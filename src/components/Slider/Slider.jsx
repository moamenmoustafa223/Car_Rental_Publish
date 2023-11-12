import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderStyles from "./Slider.module.css"
import { Pagination, Navigation } from "swiper/modules";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const Slider = () => {
  return (
    <>
   <Swiper
    slidesPerView={4}
    spaceBetween={10}
        pagination={{
          type: "fraction"
        }}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   520: {
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //   },
        //   1000: {
        //     slidesPerView: 4,
        //   },
        //  } }
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
        <SwiperSlide><FeaturedCard/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
