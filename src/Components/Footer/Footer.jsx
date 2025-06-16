import React from 'react';
import styles from "./Footer.module.css";
import logo from "../../assets/medifyLogo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/youtube.png";
import pinterest from "../../assets/pinterest.png";
import aboutus from "../../assets/about-us.png";
import pricing from "../../assets/our-pricing.png";
import gallery from "../../assets/our-gallery.png";
import appointment from "../../assets/list-appointment.png";
import privacypolicy from "../../assets/privacy-policy.png";
import orthology from "../../assets/orthology-list.png";
import neurology from "../../assets/neurology-list.png";
import dentalcare from "../../assets/dental-care-list.png";
import opthalmology from "../../assets/opthalmology-list.png";
import cardiology from "../../assets/cardiology-list.png";
import copyright from "../../assets/copyright.png";


function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.logoDiv}>
                <img className={styles.logo} src={logo} alt="medify logo" />
                <div className={styles.socials}>
                    <img className={styles.socialIcons} src={facebook} alt="facebook" />
                    <img className={styles.socialIcons} src={twitter} alt="twitter" />
                    <img className={styles.socialIcons} src={yt} alt="youtube" />
                    <img className={styles.socialIcons} src={pinterest} alt="pinterest" />
                </div>
            </div>

            <div className={styles.list1}>
                <img className={styles.listItem} src={aboutus} alt="aboutus" />
                <img className={styles.listItem} src={pricing} alt="pricing" />
                <img className={styles.listItem} src={gallery} alt="gallery" />
                <img className={styles.listItem} src={appointment} alt="appointment" />
                <img className={styles.listItem} src={privacypolicy} alt="privacypolicy" />
            </div>
            <div className={styles.list2}>
                <img className={styles.listItem} src={orthology} alt="orthology" />
                <img className={styles.listItem} src={neurology} alt="neurology" />
                <img className={styles.listItem} src={dentalcare} alt="dentalcare" />
                <img className={styles.listItem} src={opthalmology} alt="opthalmology" />
                <img className={styles.listItem} src={cardiology} alt="cardiology" />
            </div>
            <div className={styles.list3}>
                <img className={styles.listItem} src={aboutus} alt="aboutus" />
                <img className={styles.listItem} src={pricing} alt="pricing" />
                <img className={styles.listItem} src={gallery} alt="gallery" />
                <img className={styles.listItem} src={appointment} alt="appointment" />
                <img className={styles.listItem} src={privacypolicy} alt="privacypolicy" />
            </div>

            <div className={styles.copyRight}>
            <p>© 2025 Medify. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;