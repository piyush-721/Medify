import React from 'react';
import styles from "./Download.module.css";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import input from "../../assets/number91.png";
import smsButton from "../../assets/sms.png";
import gplay from "../../assets/google_play.png";
import appleStore from "../../assets/apple_store.png";
import arrow from "../../assets/arrow.png";

export default function Download() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <div className={styles.mobiles}>
                <img className={styles.mobileOne} src={mobile1} alt="mobile1" />
                <img className={styles.mobileTwo} src={mobile2} alt="mobile2" />
                <img className={styles.mobileOnedown} src={mobile1} alt="mobile1" />
                <img className={styles.mobileTwodown} src={mobile2} alt="mobile2" />
            </div>
            <div className={styles.download}>
                <h2 className={styles.header}>Download the <span style={{color:"#2AA7FF"}}>Medify</span> App</h2>
                <p className={styles.para}>Get the link to download the app</p>
                <div className={styles.number}>
                    {/* <img  src={input} alt="input" /> */}
                    <button type='button' className={styles.code}>+91</button>
                    <input placeholder="Enter phone number" className={styles.input} type="text" />
                    <button className={styles.smsbutton} type='button'>Send SMS</button>
                    {/* <img  src={smsButton} alt="sms" /> */}
                </div>
                <div className={styles.downloadButtons}>
                    <img className={styles.downBtn} src={gplay} alt="gplay" />
                    <img className={styles.downBtn} src={appleStore} alt="appleStore" />
                </div>
                <img className={styles.arrow} src={arrow} alt="arrow" />
            </div>
        </div>
    </div>
  )
}

