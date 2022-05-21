import { Box, Container, Grid } from "@mui/material";
import React from "react";
import logo from "../../asset/image/sclogo.jpg";
import admin from "../../asset/image/admin.jpg";
import "./InstituteHeader.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const InstituteHeader = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={logo} width={200} alt="" />
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <h2 className="schoolName">Succcess High School</h2>
          <p className="subtitle">Location: Dahaka,Bangladesh</p>
          <p className="subtitle">
            Code: 234523, <span>EIIN: 12345</span>
          </p>

          <p className="subtitle">Email: sucessschool@gmail.com</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            mt: 5,
            display: { xs: "flex", md: "block" },
            justifyContent: { xs: "center" },
            mb: { xs: 5 },
          }}
        >
          <FacebookIcon sx={{ fontSize: 29, mr: 3 }} className="icon" />
          <InstagramIcon sx={{ fontSize: 29, mr: 3 }} className="icon" />
          <LinkedInIcon sx={{ fontSize: 29, mr: 3 }} className="icon" />
          <EmailIcon sx={{ fontSize: 29, mr: 3 }} className="icon" />
          <Box className="adminLogin">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "white",
                justifyContent: "center",
              }}
            >
              <img
                src={admin}
                style={{ borderRadius: "50%", marginRight: 5 }}
                width={30}
                alt=""
              />
              <p>Admin Login</p>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstituteHeader;
