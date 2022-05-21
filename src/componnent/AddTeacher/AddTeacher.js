import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Alert, CircularProgress, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

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

const AddTeacher = ({ openAddTeacher, handleAddTeacherClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const [success, setSuccess] = useState("");
  const [load, setLoad] = useState(false);

  const onSubmit = (data) => {
    setLoad(true);
    setSuccess("");
    try {
      fetch(`https://powerful-sierra-30153.herokuapp.com/teacher`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            setSuccess("Teacher add Successfull....");
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
        open={openAddTeacher}
        onClose={handleAddTeacherClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddTeacher}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Add New Teacher</h2>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  mb: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  id="fullWidth"
                  name="name"
                  {...register("name")}
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
                  label="Email"
                  id="fullWidth"
                  name="email"
                  {...register("email")}
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
                  label="Phone"
                  id="fullWidth"
                  name="phone"
                  type="number"
                  {...register("phone")}
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
                  label="Password"
                  id="fullWidth"
                  name="password"
                  type="password"
                  {...register("password")}
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
                  label="Subject"
                  id="fullWidth"
                  name="subject"
                  {...register("subject")}
                />
              </Box>
              <Button variant="contained" type="submit">
                {load && (
                  <CircularProgress
                    size={15}
                    sx={{ mr: 2, mb: 3 }}
                    color="inherit"
                  />
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

export default AddTeacher;
