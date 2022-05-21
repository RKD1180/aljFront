import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTeacher from "../../../componnent/AddTeacher/AddTeacher";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Teacher = () => {
  const [openAddTeacher, setOpenAddTeacher] = React.useState(false);
  const handleAddTeacherOpen = () => setOpenAddTeacher(true);
  const handleAddTeacherClose = () => setOpenAddTeacher(false);
  const [load, setLoad] = useState(true);

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
          setLoad(false);
          setTeacher(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <Container>
      <Grid
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6}>
          <h2>Teacher List</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" onClick={handleAddTeacherOpen}>
            Add Teacher
          </Button>
        </Grid>
      </Grid>
      {load && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Teacher Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Subject</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teacher.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.subject}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddTeacher
        openAddTeacher={openAddTeacher}
        handleAddTeacherClose={handleAddTeacherClose}
      ></AddTeacher>
    </Container>
  );
};

export default Teacher;
