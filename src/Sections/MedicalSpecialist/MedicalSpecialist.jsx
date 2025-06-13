import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MedicalSpecialist.module.css";

import specialistOne from "../../assets/specialist1.png";
import specialistTwo from "../../assets/specialist2.png";
import specialistThree from "../../assets/specialist3.png";
import specialistFour from "../../assets/specialist4.png";
import specialistFive from "../../assets/specialist5.png";

export default function MedicalSpecialist() {
  const images = [
    specialistOne,
    specialistTwo,
    specialistThree,
    specialistFour,
    specialistFive,
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Our Medical Specialist</h3>

<Swiper
  modules={[Pagination]}
  slidesPerView="auto"
  spaceBetween={0}
  pagination={{ clickable: true }}
  className={styles.swiper}
>
  {images.map((img, index) => (
    <SwiperSlide key={index} className={styles.card}>
      <img
        src={img}
        alt={`Specialist ${index + 1}`}
        className={styles.cardImage}
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}




// <div className={styles.container}>
//     <h3 className={styles.header}>Our Medical Specialist</h3>
//     <div className={styles.cards}>
//         <div className={styles.card}>
//             <img className={styles.cardImage} src={specialistOne} alt="" />
//         </div>

//         <div className={styles.card}>
//             <img className={styles.cardImage} src={specialistTwo} alt="" />
//         </div>

//         <div className={styles.card}>
//             <img className={styles.cardImage} src={specialistThree} alt="" />
//         </div>

//         <div className={styles.card}>
//             <img className={styles.cardImage} src={specialistFour} alt="" />
//         </div>

//         <div className={styles.card}>
//             <img className={styles.cardImage} src={specialistFive} alt="" />
//         </div>
//     </div>
// </div>