import DoctorPng from "../assets/doctor-png.png";
import Labs from "../assets/drugstore-png.png";
import Hospital from "../assets/hospital-png.png";
import MedicalStore from "../assets/drugstore-png.png";
import Ambulance from "../assets/ambulance-png.png";


import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero/Hero";
import Search from "../Components/Search/Search";
import OfferSwiper from "../Components/OfferSwiper/OfferSwiper";


import styles from "./Home.module.css";
import Specialisation from "../Sections/Specializations/Specialisation";
import MedicalSpecialist from "../Sections/MedicalSpecialist/MedicalSpecialist";
import PatientCaring from "../Sections/PatientCaring/PatientCaring";
import Blog from "../Sections/Blog/Blog";
import OurFamilies from "../Sections/OurFamilies/OurFamilies";
import FAQ from "../Components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar hasHiddenButtons />
        <Hero />
      </div>
      <div className={styles.popup}>
        <div className={styles.searchWrapper}>
          <Search isHome />
        </div>
        <p className={styles.para}>You may be looking for</p>
        <div className={styles.boxWrapper}>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={DoctorPng} alt="Doctors" />
            <p>Doctors</p>
          </div>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={Labs} alt="Labs" />
            <p>Labs</p>
          </div>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={Hospital} alt="Hospitals" />
            <p>Hospitals</p>
          </div>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={MedicalStore} alt="Medical Store" />
            <p>Medical Store</p>
          </div>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={Ambulance} alt="Ambulance" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>

        <div>
            <OfferSwiper />
        </div>
        <div>
            <Specialisation />
        </div>
        <div>
            <MedicalSpecialist/>
        </div>
        <div>
          <PatientCaring />
        </div>
        <div>
          <Blog />
        </div>
        <div>
          <OurFamilies />
        </div>
        <div>
          <FAQ />
        </div>
    </>
  );
}
