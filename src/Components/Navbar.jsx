import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/medifyLogo.png';

export default function Navbar({ hasHiddenButtons }) {
  const [activeTab, setActiveTab] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    'Find Doctors',
    'Hospitals',
    'Medicines',
    'Surgeries',
    'Software for Provider',
    'Facilities',
  ];

  const handleTabClick = (label) => {
    setActiveTab(label);
    setDrawerOpen(false);
  };

  if (!hasHiddenButtons) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: '#2AA7FF',
          color: '#FFFFFF',
          textAlign: 'center',
          py: '5px',
          fontSize: '13px',
        }}
      >
        The health and well-being of our patients and their health care team will always be our
        priority, so we follow the best practices for cleanliness.
      </Box>

      {/* Navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          height: '96px',
          padding: '10px 0px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Medify Logo"
              sx={{
                height: { xs: 24, sm: 27 },
                ml: { xs: 1, md: 12 },
                maxWidth: { xs: '120px', sm: 'none' },
              }}
            />

            {/* Mobile View */}
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  <Box sx={{ width: 250, mt: 2, px: 2 }} role="presentation">
                    <List>
                      {tabs.map((label) => (
                        <ListItem key={label} disablePadding>
                          <ListItemButton onClick={() => handleTabClick(label)}>
                            <ListItemText
                              primary={label}
                              primaryTypographyProps={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 14,
                                color: '#2c2c2c',
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                      <ListItem>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: '#2AA7FF',
                            color: 'white',
                            mt: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '13px',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            '&:hover': {
                              backgroundColor: '#1f90dd',
                            },
                          }}
                        >
                          My Bookings
                        </Button>
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              // Desktop/Tablet View
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {tabs.map((label) => (
                  <Button
                    key={label}
                    onClick={() => handleTabClick(label)}
                    disableRipple
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: { xs: '12px', md: '13px', lg: '14px' },
                      background: 'none',
                      color: 'black',
                      marginRight: { xs: '8px', sm: '12px', md: '16px', lg: '20px' },
                      borderBottom:
                        activeTab === label ? '3px solid #2AA7FF' : '3px solid transparent',
                      height: '50px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      textTransform: 'none',
                      letterSpacing: '1px',
                      '&:hover': {
                        borderBottom: '3px solid #2AA7FF',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#2AA7FF',
                    color: 'white',
                    padding: { xs: '8px 12px', sm: '10px 16px' },
                    width: { xs: 'auto', sm: '130px' },
                    height: '40px',
                    borderRadius: '8px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: { xs: '13px', sm: '14px' },
                    lineHeight: '100%',
                    letterSpacing: '2%',
                    marginLeft: { xs: '8px', sm: '20px' },
                    marginRight: { md: '40px', lg: '100px' },
                    textTransform: 'none',
                  }}
                >
                  My Bookings
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
