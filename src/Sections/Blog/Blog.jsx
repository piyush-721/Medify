import React from "react";

import styles from "./Blog.module.css";
import detox from "../../assets/detox.png";

export default function Blog(){
    return(
        <div className={styles.container}>
            <p className={styles.para}>Blog & News</p>
            <h3 className={styles.header}>Read Our Latest News</h3>
            <div className={styles.cards}>
                <img className={styles.detox} src={detox} alt="detox" />
                <img className={styles.detox} src={detox} alt="detox" />
                <img className={styles.detox} src={detox} alt="detox" />
            </div>
        </div>
    );
}