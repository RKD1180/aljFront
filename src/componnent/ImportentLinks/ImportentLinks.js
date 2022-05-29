import { Box } from "@mui/material";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const ImportentLinks = () => {
  return (
    <div>
      <h2 style={{ margin: 0, padding: 0, textAlign: "center" }}>
        Important Links
      </h2>
      <Box sx={{ mt: 3 }}>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Education Ministry
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Dhaka Education Board
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              National University
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Secondary and Higher Education Division
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Prime Minister Education Trast
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Prime Minister Education Trast
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Prime Minister Office
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              Cabinet Councile Division
            </Link>
          </span>
        </Box>
        <Box className="cardMenuItem">
          <ArrowRightIcon />
          <span>
            <Link to="/" className="menuItem">
              COVID 19 Registration
            </Link>
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default ImportentLinks;
