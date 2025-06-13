import React from 'react';
import styles from "./OurFamilies.module.css";
import imageOne from "../../assets/ourfamilies1.png";
import imageTwo from "../../assets/ourfamilies2.png";
import imageThree from "../../assets/ourfamilies3.png";
import imageFour from "../../assets/ourfamilies4.png";

const OurFamilies = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.familyDetails}>
                    <p className={styles.paraOne}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                    <h3 className={styles.header}>Our Families</h3>
                    <p className={styles.paraTwo}>We will work with you to develop individualised
                        care plans, including management of chronic diseases. If we cannot assist, we
                        can provide referrals or advice about the type of practitioner you require. We
                        treat all enquiries sensitively and in the strictest confidence.</p>
                </div>
                <div className={styles.images}>
                    <img className={styles.imageOne} src={imageOne} alt="Happy Patients" />
                    <img className={styles.imageTwo} src={imageTwo} alt="Hospitals" />
                    <img className={styles.imageThree} src={imageThree} alt="Laboratories" />
                    <img className={styles.imageFour} src={imageFour} alt="Expert Doctor" />
                </div>
            </div>
        </div>
    )
}

export default OurFamilies;

