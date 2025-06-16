import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import styles from "./FindDoctors.module.css";
import Search from '../../Components/Search/Search';
import BookingComponent from '../../Components/BookingComponent/BookingComponent';
import tick from "../../assets/tick.png";
import hospitalImage from "../../assets/medical-center.png";
import freeAppointment from "../../assets/free-appointment.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FAQ from '../../Components/FAQ/FAQ';
import Download from '../../Components/Download/Download';
import Footer from '../../Components/Footer/Footer';

function FindDoctors() {
    const [medicalCenters, setMedicalCenters] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [selectedCenterId, setSelectedCenterId] = useState(null);

 
    return (
        <div>
        <div>
            <Navbar />
            <div className={styles.blueDiv}></div>
        </div>

        <div className={styles.searchDiv}>
            <Search
            setMedicalCenters={setMedicalCenters}
            setSelectedState={setSelectedState}
            selectedState={selectedState}
            setSearchTriggered={setSearchTriggered}
            />
        </div>

        <div className={styles.centerCountDiv}>
            <h1 className={styles.centerCountHeader}>
            {medicalCenters.length} medical centers available in {selectedState}
            </h1>
            <div className={styles.paraBox}>
            <img className={styles.tick} src={tick} alt="" />
            <p className={styles.countPara}>
                Book appointments with minimum wait-time & verified doctor details
            </p>
            </div>
        </div>

            {searchTriggered && <Card medicalCenters={medicalCenters} selectedCenterId={selectedCenterId} setSelectedCenterId={setSelectedCenterId}/>}

            {
                searchTriggered && (
                    <div className={styles.freeAppointmentDiv}>
                        <img className={styles.freeAppointment} src={freeAppointment} alt="free appointment" />
                    </div>
                )
            }

            <FAQ />
            <Download />
            <Footer />
        </div>
  );
}

export default FindDoctors;

function Card({ medicalCenters, selectedCenterId, setSelectedCenterId }) {
  return (
    <>
    {medicalCenters.map((center) => {
    const centerId = center["Provider ID"];
    const isSelected = selectedCenterId === centerId;

    return (
        <div key={centerId} className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
            <div className={styles.cardDiv}>
            <div className={styles.cardImage}>
                <img style={{ marginRight: "30px" }} src={hospitalImage} alt="Hospital" />
            </div>
            <div className={styles.cardDetails}>
                <h3 className={styles.hospitalName}>{center["Hospital Name"]}</h3>
                <h6 className={styles.cityAndName}>{center.City}, {center.State}</h6>
                <p className={styles.hospitalType}>{center["Hospital Type"]}</p>
                <p className={styles.free}>
                <span style={{ color: "#02A401" }}>FREE </span>
                <s style={{ color: "#787887" }}>500</s> Consultation fee at clinic
                </p>
                <p className={styles.thumb}>
                <ThumbUpIcon style={{ color: "white" }} /> {center["Hospital overall rating"]}
                </p>
            </div>
            </div>

            <div className={styles.available}>
            <p className={styles.availablePara}>Available Today</p>
            <button
                onClick={() => setSelectedCenterId(isSelected ? null : centerId)}
                className={styles.bookingBtn}
            >
                Book FREE Center Visit
            </button>
            </div>
        </div>

        
        {isSelected && (
            <div className={styles.bookingWrapper}>
            <BookingComponent center={center}/>
            </div>
        )}
        </div>
    );
    })}

    </>
  );
}

