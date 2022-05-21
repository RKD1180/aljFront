/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1976D2" }}>
      <Container sx={{ p: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <FacebookIcon sx={{ fontSize: 29, mr: 3 }} className="ficon" />
            <InstagramIcon sx={{ fontSize: 29, mr: 3 }} className="ficon" />
            <LinkedInIcon sx={{ fontSize: 29, mr: 3 }} className="ficon" />
            <EmailIcon sx={{ fontSize: 29, mr: 3 }} className="ficon" />
            <p className="fsubtitle">Location: Dahaka,Bangladesh</p>
            <p className="fsubtitle">Phone:+880383663635</p>

            <p className="fsubtitle">Email: sucessschool@gmail.com</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <h2 style={{ marginTop: 0, marginBottom: 10, color: "white" }}>
                Menu
              </h2>
              <Link to="/" className="footerMenuItem">
                About
              </Link>
              <Link to="/" className="footerMenuItem">
                Contact
              </Link>
              <Link to="/" className="footerMenuItem">
                Home
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <h2 style={{ marginTop: 0, marginBottom: 10, color: "white" }}>
                Our Location
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!…"
                width="350"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
