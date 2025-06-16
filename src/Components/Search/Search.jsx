import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Stack,
  Autocomplete,
  TextField,
  useMediaQuery,
  Button,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useNavigate } from "react-router-dom";

export default function Search({
  isHome,
  isMyBookings,
  setMedicalCenters,
  setSelectedState,
  selectedState,
  selectedCity,
  setSelectedCity,
  setSearchTriggered,
  searchText,
  setSearchText,
  myBookings,
  setFilteredBookings,
}) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get("https://meddata-backend.onrender.com/states");
        setStates(res.data || []);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) {
        setCities([]);
        if (typeof setSelectedCity === "function") {
          setSelectedCity("");
        }
        return;
      }
      try {
        const res = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        setCities(res.data || []);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };
    fetchCities();
  }, [selectedState]);

  // Fetch hospitals when state and city are selected
  useEffect(() => {
    const fetchCenters = async () => {
      if (!selectedState || !selectedCity) return;
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        );
        const centers = res.data || [];
        if (typeof setMedicalCenters === "function") {
          setMedicalCenters(centers);
        }
        localStorage.setItem("medicalCenters", JSON.stringify(centers));
        if (isHome && typeof setSearchTriggered === "function") {
          setSearchTriggered(true);
        }
      } catch (error) {
        console.error("Failed to fetch centers:", error);
      }
    };
    fetchCenters();
  }, [selectedCity, selectedState]);

  // Hospital search handler for bookings
  const handleHospitalSearch = (e) => {
    if (typeof setSearchText === "function") {
      setSearchText(e.target.value.toLowerCase());
    }
  };

  // Filter myBookings list
  useEffect(() => {
    const delay = setTimeout(() => {
      if (!Array.isArray(myBookings)) return;
      const text = searchText?.toLowerCase() || "";

      const filtered = myBookings.filter((hospital) =>
        (hospital["Hospital Name"]?.toLowerCase() || "").includes(text) ||
        (hospital.City?.toLowerCase() || "").includes(text) ||
        (hospital.State?.toLowerCase() || "").includes(text)
      );

      if (typeof setFilteredBookings === "function") {
        setFilteredBookings(filtered);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [searchText, myBookings]);

  const icon = isHome ? <SearchOutlinedIcon /> : <FmdGoodOutlinedIcon />;

  return (
    <>
      {isMyBookings ? (
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 4}
          sx={{
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "center",
            px: isMobile ? 2 : 4,
            pr: isMobile ? 2 : 8,
            width: "100%",
          }}
        >
          <TextField
            value={searchText}
            onChange={handleHospitalSearch}
            placeholder="Search By Hospital"
            variant="outlined"
            sx={{ width: isMobile ? 250 : 490 }}
            InputProps={{ type: "search" }}
          />

          <Button
            variant="contained"
            fullWidth={isMobile}
            style={{
              backgroundColor: "#2AA8FF",
              width: isMobile ? 250 : 130,
              height: "50px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            Search
          </Button>
        </Stack>
      ) : (
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 4}
          sx={{
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "center",
            px: isMobile ? 2 : 4,
            pr: isMobile ? 2 : 8,
            width: "100%",
          }}
        >
          <div id="state">
            <Autocomplete
              disableClearable
              options={states}
              value={selectedState || ""}
              onChange={(e, value) => {
                if (typeof setSelectedState === "function") {
                  setSelectedState(value || "");
                }
                if (typeof setSelectedCity === "function") {
                  setSelectedCity("");
                }
              }}
              sx={{ width: isMobile ? 250 : 285, marginRight: isMobile ? 0 : isHome ? 6 : 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="State"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        {icon}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>

          <div id="city">
            <Autocomplete
              disableClearable
              options={cities}
              value={selectedCity || ""}
              onChange={(e, value) => {
                if (typeof setSelectedCity === "function") {
                  setSelectedCity(value || "");
                }
              }}
              disabled={!selectedState}
              sx={{
                width: isMobile ? 250 : isHome ? 285 : 420,
                marginRight: isMobile ? 0 : isHome ? 6 : 2,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="City"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        {icon}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>

          <Button
            type="submit"
            id="searchBtn"
            onClick={() => {
              if (selectedState && selectedCity) {
                if (isHome) {
                  navigate("/find-doctors", {
                    state: {
                      state: selectedState,
                      city: selectedCity,
                    },
                  });
                }else{
                  setSearchTriggered(true);
                }
              }
            }}
            startIcon={<SearchOutlinedIcon />}
            variant="contained"
            fullWidth={isMobile}
            style={{
              backgroundColor: "#2AA8FF",
              width: isMobile ? 250 : 121,
              height: "50px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            Search
          </Button>
        </Stack>
      )}
    </>
  );
}
