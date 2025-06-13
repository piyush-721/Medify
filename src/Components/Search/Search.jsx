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

export default function Search({ isHome }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch all states on mount
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

  // Fetch cities when state is selected
  useEffect(() => {
    const fetchCities = async () => {
      if (!selectedState) return;
      try {
        const res = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        setCities(res.data || []);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };
    fetchCities();
  }, [selectedState]);

  if (!isHome) return null;

  return (
        <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 2 : 4}
        sx={{
            justifyContent: isMobile ? "center" : "flex-end",
            alignItems: "center",
            px: isMobile ? 2 : 4, // padding on both sides
            pr: isMobile ? 2 : 8, // adds extra padding-right on desktop
            width: "100%",
        }}
        >

      {/* State Dropdown */}
      <div id="state">
        <Autocomplete
          freeSolo
          disableClearable
          options={states}
          value={selectedState}
          onChange={(e, value) => {
            setSelectedState(value);
            setSelectedCity(null);
          }}
          sx={{ width: isMobile ? 250 : 285 , marginRight: isMobile ? 0 : 6,}}
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
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>

      {/* City Dropdown */}
      <div id="city">
        <Autocomplete
          freeSolo
          disableClearable
          options={cities}
          value={selectedCity}
          onChange={(e, value) => setSelectedCity(value)}
          sx={{ width: isMobile ? 250 : 285, marginRight: isMobile ? 0 : 6, }}
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
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>

      {/* Search Button */}
      <Button
        startIcon={<SearchOutlinedIcon />}
        variant="contained"
        fullWidth={isMobile}
        style={{
          backgroundColor: "#2AA8FF",
          width: isMobile ? "100%" : "121px",
          height: "50px",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      >
        Search
      </Button>
    </Stack>
  );
}
