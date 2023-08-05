import { ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Links = ({title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        "&:hover .show-when-hover": { display: "block" },
        "&:hover": { cursor: "pointer" },
        
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMore />
      <Box className="show-when-hover"  sx={{
          position: "absolute",
          minWidth: "170px",
          left: "-20%",
          transfom: "translateX(50%)",
          top: "100%",
          display: "none",
          zIndex:"2"
        }}>
      <Paper sx={{mt:2,}}
        
       
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                primary="Dashboard"
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                primary="Products"
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                primary="Orders"
              />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                primary="Profile"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
      </Box>
    </Box>
  );
};

export default Links;
