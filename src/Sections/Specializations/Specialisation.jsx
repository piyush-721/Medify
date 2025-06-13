import React from "react";
import styles from "./Specialisation.module.css";

import dentistry from "../../assets/drugstore-png.png";
import primarycare from "../../assets/primarycare.png";
import cadiology from "../../assets/cardiology.png";
import mri from "../../assets/mriresonance.png";
import bloodtest from "../../assets/bloodtest.png";
import piscologist from "../../assets/piscologist.png";
import laboratory from "../../assets/drugstore-png.png";
import xray from "../../assets/xray.png";


export default function Specialisation(){
    return(
    <div className={styles.container}>
            <h1 className={styles.header}>Find by specialisation</h1>

        <div className={styles.boxWrapper}>
          <div className={styles.boxes}>
            <img className={styles.boxImage} src={dentistry} alt="Dentistry" />
            <p>Dentistry</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={primarycare} alt="Primary Care" />
            <p>Primary Care</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={cadiology} alt="Cardiology" />
            <p>Cardiology</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={mri} alt="MRI Resonance" />
            <p>MRI Resonance</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={bloodtest} alt="Blood Test" />
            <p>Blood Test</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={piscologist} alt="Piscologist" />
            <p>Piscologist</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={laboratory} alt="Laboratory" />
            <p>Laboratory</p>
          </div>

          <div className={styles.boxes}>
            <img className={styles.boxImage} src={xray} alt="X Ray" />
            <p>X-Ray</p>
          </div>
        </div>
        <button className={styles.btn} type="button">View All</button>
    </div>
    );
}