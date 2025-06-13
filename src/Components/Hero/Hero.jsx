import React from "react";
import styles from "./Hero.module.css";
import image from "../../assets/hero_doctors.png";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h3 className={styles.mergedHeader}>
          <span className={styles.small}>Skip the travel! Find Online </span>
          <br />
          <span className={styles.big}>Medical </span>
          <span className={styles.blue}>Centers</span>
        </h3>
        <p className={styles.para}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <Button
          className={styles.findCenters}
          style={{ backgroundColor: "#2AA8FF", borderRadius: "8px" }}
          variant="contained"
        >
          Find Centers
        </Button>
      </div>
      <div className={styles.heroImage}>
        <img
          src={image}
          alt="hero doctors"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            zIndex: "0",
          }}
        />
      </div>
    </div>
  );
}
