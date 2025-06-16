import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import styles from "./MyBookings.module.css";
import Search from '../../Components/Search/Search';
import hospitalImage from "../../assets/medical-center.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import freeAppointment from "../../assets/free-appointment.png";
import Download from '../../Components/Download/Download';
import Footer from '../../Components/Footer/Footer';

function MyBookings() {
  const [myBookings, setMyBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];

    // Ensure we only extract the fields you mentioned
    const sanitized = stored.map((booking) => ({
      name: booking["Hospital Name"],
      city: booking["City"],
      state: booking["State"],
      type: booking["Hospital Type"],
      rating: booking["Hospital overall rating"],
      date: booking.bookingDate,
      time: booking.bookingTime,
    }));

    setMyBookings(sanitized);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div className={styles.blueDiv}>
          <h1 className={styles.header}>My Bookings</h1>
        </div>
      </div>

      <div className={styles.searchDiv}>
        <Search
          isMyBookings
          searchText={searchText}
          setSearchText={setSearchText}
          myBookings={myBookings}
          setFilteredBookings={setFilteredBookings}
        />
      </div>

      <div className={styles.cardsList}>
        {searchText && filteredBookings.length === 0 ? (
          <p className={styles.noResults}>No bookings found for "{searchText}"</p>
        ) : (
          (filteredBookings.length > 0 ? filteredBookings : myBookings).map((booking, index) => (
            <Card key={index} booking={booking} />
          ))
        )}
      </div>

      <div className={styles.freeAppointmentDiv}>
        <img className={styles.freeAppointment} src={freeAppointment} alt="free appointment" />
      </div>

      <Download />
      <Footer />
    </div>
  );
}

export default MyBookings;

function Card({ booking }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardDiv}>
          <div className={styles.cardImage}>
            <img style={{ marginRight: "30px" }} src={hospitalImage} alt="Hospital" />
          </div>
          <div className={styles.cardDetails}>
            <h3 className={styles.hospitalName}>{booking.name}</h3>
            <h3 className={styles.cityAndName}>{booking.city}, {booking.state}</h3>
            <h3 className={styles.hospitalType}>{booking.type}</h3>
            <h3 className={styles.thumb}>
              <ThumbUpIcon style={{ color: "white" }} /> {booking.rating}
            </h3>
          </div>
        </div>

        <div className={styles.available}>
          <p className={styles.time}>{booking.time}</p>
          <p className={styles.date}>{booking.date}</p>
        </div>
      </div>
    </div>
  );
}
