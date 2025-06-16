import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/medifyLogo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setDrawerOpen(false);
    if (tab === 'Find Doctors') {
      navigate('/find-doctors');
    }
  };

  const handleLogo = () => {
    navigate('/');
    setDrawerOpen(false);
  };

  const navItems = [
    'Find Doctors',
    'Hospitals',
    'Medicines',
    'Surgeries',
    'Software for Provider',
    'Facilities',
  ];

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.topBar}>
        The health and well-being of our patients and their health care team will always be our
        priority, so we follow the best practices for cleanliness.
      </Box>

      <AppBar position="static" elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Box
            component="img"
            src={logo}
            alt="Medify Logo"
            onClick={handleLogo}
            className={styles.logo}
          />

          {!isMobile && (
            <Box className={styles.navButtons}>
              {navItems.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.button} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={() => navigate('/my-bookings')}
                className={styles.bookingBtn}
              >
                My Bookings
              </button>
            </Box>
          )}

          {isMobile && (
            <>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                edge="end"
                className={styles.hamburger}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 220, paddingTop: '16px' }}>
                  <List>
                    <ListItem button onClick={handleLogo}>
                      <ListItemText primary="Home" />
                    </ListItem>
                    {navItems.map((tab) => (
                      <ListItem button key={tab} onClick={() => handleTabClick(tab)}>
                        <ListItemText primary={tab} />
                      </ListItem>
                    ))}
                    <ListItem
                      button
                      onClick={() => {
                        setDrawerOpen(false);
                        navigate('/my-bookings');
                      }}
                    >
                      <ListItemText primary="My Bookings" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
