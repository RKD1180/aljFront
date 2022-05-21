import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Grid } from "@mui/material";
import AddBlog from "../../../componnent/AddBlog/AddBlog";
import Blogs from "./../../../componnent/Blog/Blog";

const Blog = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [load, setLoad] = useState(true);

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
          setLoad(false);
          setBlog(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <>
      <Grid
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} md={6}>
          <h2>All Blog</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" onClick={handleOpen}>
            Add New Blog
          </Button>
        </Grid>
      </Grid>
      {load && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 suto",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={2}>
        {blog.map((b, id) => (
          <Grid item xs={12} md={4} key={id}>
            <Blogs b={b}></Blogs>
          </Grid>
        ))}
      </Grid>
      <AddBlog open={open} handleClose={handleClose}></AddBlog>
    </>
  );
};

export default Blog;
