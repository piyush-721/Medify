import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./OfferSwiper.module.css";

import ImageOne from "../../assets/sliderImage1.png"
import ImageTwo from "../../assets/sliderImage2.png"
import ImageThree from "../../assets/sliderImage3.png"

const images = [
  ImageOne,
  ImageTwo,
  ImageThree, 
  ImageOne,
  ImageTwo,
  ImageThree,
  
];

export default function OfferSwiper() {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={-6}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={src} alt={`Offer ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
