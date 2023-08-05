import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import jacket from "../../images/1.png";
import jacket2 from "../../images/2.jpg";
import jacket3 from "../../images/3.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box>
        <img width={300} src={jacket} alt="" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Women's Fashion</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          necessitatibus?
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[jacket2, jacket3].map((item) => {
            return (
              <img
                style={{ borderRadius: 5 }}
                key={item}
                height={100}
                width={90}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
