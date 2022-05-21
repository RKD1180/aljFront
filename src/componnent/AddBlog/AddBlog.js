import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { Alert, CircularProgress, TextField } from "@mui/material";

// https://i.ibb.co/kqjgJKP/sl3.jpg
// https://i.ibb.co/qkPH2ZB/sl4.jpg
// https://i.ibb.co/6Y204Hp/sl1.jpg
// https://i.ibb.co/Lgz6yR4/sl2.jpg

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const AddBlog = ({ open, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const [success, setSuccess] = useState("");
  const [load, setLoad] = useState(false);

  const onSubmit = (data) => {
    setLoad(true);
    setSuccess("");
    try {
      fetch(`https://powerful-sierra-30153.herokuapp.com/blog`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            setSuccess("Blog add Successfull....");
            setLoad(false);
            reset();
          }
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Add New Blog</h2>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  mb: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Image Url"
                  id="fullWidth"
                  name="image"
                  {...register("image")}
                />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  mb: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Tittle"
                  id="fullWidth"
                  name="title"
                  {...register("title")}
                />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  mb: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Description"
                  id="fullWidth"
                  name="des"
                  {...register("des")}
                />
              </Box>
              <Button variant="contained" type="submit">
                {load && (
                  <CircularProgress size={15} sx={{ mr: 2 }} color="inherit" />
                )}
                Submit
              </Button>
            </form>
            {success && (
              <Alert severity="success" sx={{ mt: 2 }}>
                {success}
              </Alert>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddBlog;
