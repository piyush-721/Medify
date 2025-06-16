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
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function Search({ isHome, isMyBookings, setMedicalCenters, setSelectedState, selectedState, setSearchTriggered, searchText, setSearchText, myBookings, setFilteredBookings }) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) {
        setCities([]);
        setSelectedCity(null);
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

  useEffect(() => {
    const fetchCenters = async () => {
      if (!selectedState || !selectedCity) return;
      try {
        const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`);
        setMedicalCenters(res.data || []);
      } catch (error) {
        console.error("Failed to fetch centers:", error);
      }
    };
    fetchCenters();
  }, [selectedCity, selectedState]);


  const handleHospitalSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!Array.isArray(myBookings)) return;

      const filtered = myBookings.filter((hospital) =>
        (hospital["Hospital Name"]?.toLowerCase() || "").includes(searchText) ||
        (hospital.City?.toLowerCase() || "").includes(searchText) ||
        (hospital.State?.toLowerCase() || "").includes(searchText)
      );

      setFilteredBookings(filtered);
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
            InputProps={{
              type: "search",

            }}
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
              value={selectedState}
              onChange={(e, value) => {
                setSelectedState(value || null);
                setSelectedCity(null);
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
              value={selectedCity}
              onChange={(e, value) => {
                setSelectedCity(value || null);
              }}
              disabled={!selectedState}
              sx={{
                width: isMobile ? 250 : isHome ? 285 : 350,
                marginRight: isMobile ? 0 : isHome ? 6 : 2
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
                setSearchTriggered(true);
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
