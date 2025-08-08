import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#101010",
          px: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 56, sm: 64, md: 72 },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            }}
          >
            <Link to="https://vinuja.me" style={{ textDecoration: 'none', color: '#fff' }}>
              vinuja.me
            </Link>
          </Typography>

          {/* Desktop Menu - Fixed with Box component */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, // Hide on xs, show on md and above
              gap: { md: '16px', lg: '24px' },
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  borderBottom: isActive(item.path) ? "2px solid #fff" : "none",
                  fontSize: { md: "1rem" },
                  px: { md: 2 },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              ml: 1,
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: "70%", sm: 300 },
            maxWidth: "100%",
            backgroundColor: "#101010",
            color: "#fff",
            pt: 2,
          },
        }}
      >
        <List sx={{ px: 2 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                backgroundColor: isActive(item.path) ? "rgba(255, 255, 255, 0.1)" : "inherit",
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  color: isActive(item.path) ? "#fff" : "rgba(255, 255, 255, 0.7)",
                  '& .MuiTypography-root': {
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;