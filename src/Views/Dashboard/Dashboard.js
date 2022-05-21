import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    console.log("click");
    localStorage.clear();
    navigate("/");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!user?.class && (
          <>
            <Link
              to="/"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: 10,
                }}
              >
                <HomeIcon sx={{ mr: 1 }} />
                <span>Home</span>
              </ListItem>
            </Link>
            <Link
              to="/dashboard/teacher"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: 10,
                }}
              >
                <PersonIcon sx={{ mr: 1 }} />
                <span>Teacher</span>
              </ListItem>
            </Link>

            <Link
              to="/dashboard/student"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                <AccessibilityIcon sx={{ mr: 1 }} />
                <span>Students</span>
              </ListItem>
            </Link>
            {/* blog */}
            <Link
              to="/dashboard/blog"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                <BookIcon sx={{ mr: 1 }} />
                <span>All Blog</span>
              </ListItem>
            </Link>
          </>
        )}

        {user?.class && (
          <>
            <Link
              to="/"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: 10,
                }}
              >
                <HomeIcon sx={{ mr: 1 }} />
                <span>Home</span>
              </ListItem>
            </Link>

            <Link
              to="/dashboard/studentprofile"
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                fontSize: 17,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginBottom: 10,
                }}
              >
                <PersonIcon sx={{ mr: 1 }} />
                <span>Profile</span>
              </ListItem>
            </Link>
          </>
        )}

        <ListItem
          button
          onClick={handleLogout}
          style={{
            display: "flex",
            justifyContent: "left",
            fontSize: 17,
            fontWeight: 600,
            marginTop: 6,
          }}
        >
          <LogoutIcon sx={{ mr: 1 }} />
          <span>Log Out</span>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  window: PropTypes.func,
};
