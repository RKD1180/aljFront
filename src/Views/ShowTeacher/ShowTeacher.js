import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InstituteHeader from "../../componnent/InstituteHeader/InstituteHeader";
import Footer from "../../componnent/shared/Footer/Footer";
import Header from "../../componnent/shared/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ShowTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://powerful-sierra-30153.herokuapp.com/teacher`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTeacher(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);
  return (
    <>
      <InstituteHeader />
      <Header />
      <Container sx={{ m: 10 }}>
        <h2>Our Teacher</h2>
        <Grid container spacing={2}>
          {teacher.map((t, id) => (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 100 }}>
                <CardContent>
                  <h5 style={{ fontSize: 15, marginBottom: 1, marginTop: 10 }}>
                    Name: {t.name}
                  </h5>
                  <h6 style={{ fontSize: 15, marginBottom: 1, marginTop: 10 }}>
                    Email: {t.email}
                  </h6>
                  <h6 style={{ fontSize: 15, marginBottom: 1, marginTop: 10 }}>
                    Phone: {t.phone}
                  </h6>
                  <h6 style={{ fontSize: 15, marginBottom: 1, marginTop: 10 }}>
                    Subject: {t.subject}
                  </h6>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ShowTeacher;
