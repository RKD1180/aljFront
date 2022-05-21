import React, { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import useAuth from "./../../../hooks/useAuth";

const StudentProfile = () => {
  const [student, setStudent] = useState({});
  const { _id } = useAuth();

  useEffect(() => {
    try {
      fetch(`https://powerful-sierra-30153.herokuapp.com/student/${_id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setStudent(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, [_id]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <h2>Name: {student.name}</h2>
            <h5 style={{ fontSize: 16, marginBottom: 5, marginTop: 5 }}>
              Class: {student.class}
            </h5>
            <h5 style={{ fontSize: 16, marginBottom: 5, marginTop: 5 }}>
              Id: {student._id}
            </h5>
            <h5 style={{ fontSize: 16, marginBottom: 5, marginTop: 5 }}>
              Email: {student.email}
            </h5>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentProfile;
