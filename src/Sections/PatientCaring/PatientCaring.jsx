import React from "react";
import styles from "./PatientCaring.module.css";
import patientcaringone from "../../assets/patientcaring1.png";
import patientcaringTwo from "../../assets/patientcaring2.png";
import patientcaringThree from "../../assets/patientcaring3.png";
import listOne from "../../assets/list1.png";
import listTwo from "../../assets/list2.png";
import listThree from "../../assets/list3.png";

export default function PatientCaring(){
    return(
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.photoDiv}>
                    <img className={styles.caringImageOne} src={patientcaringone} alt="" />
                    <img className={styles.caringImageTwo} src={patientcaringTwo} alt="" />
                    <img className={styles.caringImageThree} src={patientcaringThree} alt="" />
                </div>
                <div className={styles.detailsDiv}>
                    <p className={styles.paraOne}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                    <h3 className={styles.detailsHeader}>Patient <span style={{color:"#2AA7FF"}} className={styles.detailsHeader}>Caring</span></h3>
                    <p className={styles.paraTwo}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                    <img className={styles.list} src={listOne} alt="list one" />
                    <img className={styles.list} src={listTwo} alt="list two" />
                    <img className={styles.list} src={listThree} alt="list three" />
                </div>
            </div>
        </div>
    );
}