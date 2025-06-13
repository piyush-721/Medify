import React from 'react';
import styles from "./FAQ.module.css";
import queOne from "../../assets/q1.png";
import queTwo from "../../assets/q2.png";
import queThree from "../../assets/q3.png";
import queFour from "../../assets/q4.png";
import happyImage from "../../assets/faq-image.png";
import happyPopup from "../../assets/happyPopup.png";
import shape from "../../assets/stylish-shape-icon.png";

export default function FAQ() {
  return (
    <div className={styles.container}>
        <p className={styles.para}>Get Your Answer</p>
        <h3 className={styles.header}>Frequently Asked Questions</h3>
        <div className={styles.innerContainer}>
            <div className={styles.imageDiv}>
                <img className={styles.img} src={happyImage} alt="happyImage" />
                <img className={styles.popup} src={happyPopup} alt="popup" />
                <img className={styles.shape} src={shape} alt="shape" />
            </div>
            <div className={styles.questionsDiv}>
                <img className={styles.questions} src={queOne} alt="queOne" />
                <img className={styles.questions} src={queTwo} alt="queTwo" />
                <img className={styles.questions} src={queThree} alt="queThree" />
                <img className={styles.questions} src={queFour} alt="queFour" />
            </div>
        </div>
    </div>
  )
}
