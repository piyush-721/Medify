import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Grid
} from "@mui/material";
import { addDays, format } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./BookingComponent.module.css";

const timeSlots = {
  Morning: ["11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
};

const BookingComponent = ({ center }) => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const date = addDays(new Date(), i);
      dates.push({
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : format(date, "EEE, d MMM"),
        slotsAvailable: Math.floor(10 + Math.random() * 10),
      });
    }
    return dates;
  };

  const dateOptions = generateDates();

  useEffect(() => {
    const interval = setInterval(() => {
      if (prevRef.current && nextRef.current) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

const handleBooking = (slot) => {
  setSelectedTime(slot); 
  const selectedDate = dateOptions[selectedDateIndex].label;

  const booking = {
    "Hospital Name": center["Hospital Name"],
    "City": center.City,
    "State": center.State,
    "Hospital Type": center["Hospital Type"],
    "Hospital overall rating": center["Hospital overall rating"],
    bookingDate: selectedDate,
    bookingTime: slot,
  };

  const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  localStorage.setItem("bookings", JSON.stringify([...existingBookings, booking]));

  setTimeout(() => navigate("/my-bookings"), 300); 
};


  return (
    <Box
      className={styles.bookingBox}
      sx={{
        backgroundColor: "#FFFFFF",
        width: "835px",
        height: "278px",
        borderRadius: "8px",
        p: 2,
        boxSizing: "border-box",
        my: 2,
        ml: 16,
        mt: -2,
        boxShadow: "6px 6px 35px 0px #1028511C",
        '@media (max-width:768px)': {
          width: '95%',
          ml: 0,
          mt: 0,
          p: 1,
          boxShadow: 'none',
          height: 'auto',
        }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton
          ref={prevRef}
          className={styles.swiperButton}
          sx={{
            border: "1px solid #E0E0E4",
            borderRadius: "50%",
            mr: 1,
            width: 56,
            height: 56,
            '@media (max-width:768px)': {
              width: 28,
              height: 28,
            }
          }}
        >
          <MdArrowBackIosNew />
        </IconButton>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {dateOptions.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <Button
                onClick={() => {
                  setSelectedDateIndex(index);
                  setSelectedTime("");
                }}
                sx={{
                  width: "100%",
                  minWidth: 140,
                  flexDirection: "column",
                  borderBottom:
                    selectedDateIndex === index
                      ? "4px solid #2AA7FF"
                      : "4px solid transparent",
                  borderRadius: 0,
                  color: "#414146",
                  fontWeight: selectedDateIndex === index ? 700 : 400,
                  fontSize: "16px",
                  fontFamily: "Lato",
                  '@media (max-width:768px)': {
                    minWidth: 120,
                    fontSize: "14px",
                  }
                }}
              >
                <p style={{ margin: 0 }}>{item.label}</p>
                <p style={{ margin: 0, color: "#01A400", fontSize: "12px" }}>
                  {item.slotsAvailable} Slots Available
                </p>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>

        <IconButton
          ref={nextRef}
          className={styles.swiperButton}
          sx={{
            border: "1px solid #E0E0E4",
            borderRadius: "50%",
            ml: 1,
            width: 56,
            height: 56,
            '@media (max-width:768px)': {
              width: 28,
              height: 28,
            }
          }}
        >
          <MdArrowForwardIos />
        </IconButton>
      </Box>

      {Object.entries(timeSlots).map(([label, slots], idx, arr) => (
        <React.Fragment key={label}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            sx={{ mb: 1.5, mt: idx === 0 ? 0 : 2 }}
          >
            <Grid item xs={4} sm={2}>
              <p className={styles.slotCategory} style={{ fontWeight: 500, width: "100px", margin: 0 }}>
                {label}
              </p>
            </Grid>
            <Grid item xs={8} sm={10}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {slots.map((slot, i) => (
                  <Button
                    key={i}
                    onClick={() => handleBooking(slot)}
                    variant={selectedTime === slot ? "contained" : "outlined"}
                    className={styles.timeSlotBtn}
                    sx={{
                      minWidth: 70,
                      padding: "4px 10px",
                      fontSize: "12px",
                      '@media (max-width:768px)': {
                        minWidth: 50,
                        fontSize: '10px',
                        padding: '2px 4px'
                      }
                    }}
                  >
                    {slot}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>

          {idx !== arr.length - 1 && (
            <Box sx={{ mb: 1 }}>
              <hr style={{ border: "none", borderTop: "1px solid #F0F0F5" }} />
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default BookingComponent;
