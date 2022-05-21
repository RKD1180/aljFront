/* eslint-disable jsx-a11y/no-distracting-elements */
import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import InstituteHeader from "../../componnent/InstituteHeader/InstituteHeader";
import Header from "../../componnent/shared/Header/Header";
import Slider from "../../componnent/Slider/Slider";
import "./Home.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import chir from "../../asset/image/chir.jpg";
import prin from "../../asset/image/prin.png";
import Footer from "../../componnent/shared/Footer/Footer";
import Blog from "../../componnent/Blog/Blog";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://powerful-sierra-30153.herokuapp.com/blog`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <>
      <InstituteHeader></InstituteHeader>
      <Header></Header>
      <Container>
        <Slider
          style={{
            paddingTop: 10,
            paddingBottom: 40,
            borderBottom: "1px solid red",
          }}
        ></Slider>
        <Box className="marqueeContainer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 className="marquee" sx={{ m: 0, p: 0 }}>
              Latest:{" "}
            </h5>
            <marquee
              behavior="scroll"
              direction="left"
              style={{ fontWeight: "bold" }}
            >
              Admission is going on for Summer-2022 (Except 9th )- Admission
              Test: 19 June 2022
            </marquee>
          </div>
        </Box>
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} className="menuPaper">
                  <h2 style={{ marginLeft: 15 }}>Campus</h2>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/history" className="menuItem">
                        History
                      </Link>
                    </span>
                  </Box>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/chmessage" className="menuItem">
                        Message Form Chairman
                      </Link>
                    </span>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} className="menuPaper">
                  <h2 style={{ marginLeft: 15 }}>Faculty Member</h2>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/allteacher" className="menuItem">
                        Our teacher
                      </Link>
                    </span>
                  </Box>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/" className="menuItem">
                        It Depertment
                      </Link>
                    </span>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} className="menuPaper">
                  <h2 style={{ marginLeft: 15 }}>Notice</h2>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/" className="menuItem">
                        Notice
                      </Link>
                    </span>
                  </Box>
                  <Box className="cardMenuItem">
                    <ArrowRightIcon />
                    <span>
                      <Link to="/" className="menuItem">
                        Events
                      </Link>
                    </span>
                  </Box>
                </Paper>
              </Grid>
              <Box sx={{ ml: 2, mt: 2 }}>
                <h2 style={{ marginLeft: 10 }}>Blog</h2>
                <Grid container spacing={2}>
                  {blog.map((b, id) => (
                    <Grid item xs={12} md={4}>
                      <Blog b={b} key={id}></Blog>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Box className="nameHead">
                <p style={{ marginLeft: 15, padding: 0, fontWeight: 600 }}>
                  Founder & Chairman Of Governing Body
                </p>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={chir}
                  width={200}
                  height={200}
                  style={{
                    margin: "0 auto",
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                  alt=""
                />
              </Box>
            </Box>
            <Box>
              <Box className="nameHead">
                <p style={{ marginLeft: 15, padding: 0, fontWeight: 600 }}>
                  Principal
                </p>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={prin}
                  width={200}
                  height={200}
                  style={{
                    margin: "0 auto",
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                  alt=""
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
