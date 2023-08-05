import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold:200})}>
      <Fab
      onClick={()=>{
        window.scrollTo(0,0)
      }}
        sx={{ position: "fixed", bottom: "30px", right: "30px" }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTop;
