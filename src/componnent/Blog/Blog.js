import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Blog = ({ b }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={b.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {b.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {b.des}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Blog;
