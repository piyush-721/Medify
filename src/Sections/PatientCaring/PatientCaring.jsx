import React from "react";
import styles from "./PatientCaring.module.css"

export default function PatientCaring(){
    return(
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.photoDiv}>

                </div>
                <div className={styles.detailsDiv}>

                </div>
            </div>
        </div>
    );
}