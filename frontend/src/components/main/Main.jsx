import {
  Container,
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActions,
  Button,
  Rating,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/Product";



const Main = () => {
  

  const handleAlignment = (event, newValue) => {
    setMyData(newValue)
  };

  const [open, setOpen] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI="products?populate=*"
  const menProductsAPI="products?populate=*&filters[category][$eq]=men"
  const womenProductsAPI="products?populate=*&filters[category][$eq]=women"

  const [myData,setMyData]=useState(allProductsAPI)



  const { data, error, isLoading } = useGetproductByNameQuery(myData)

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }



 

  if(data)
  {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
  
          <ToggleButtonGroup
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            color="error"
          >
            <ToggleButton
              className="my-button"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="my-button"
              sx={{ mx: "16px !important" }}
              value={menProductsAPI}
              aria-label="centered"
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              className="my-button"
              value={womenProductsAPI}
              aria-label="right aligned"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
  
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  ".MuiCardMedia-root": { transition: "all 0.35s ease-in-out" },
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.05",
                    transition: "0.35s",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
             
                  sx={{ height: 275 }}
                  image={`${item.attributes.productImg.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent> 
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>
  
                    <Typography variant="subtitle1" component="p">
                    {item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                  {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button size="small" onClick={handleClickOpen}>
                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                    Add To Cart
                  </Button>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.attributes.productPrice}
                    precision={0.1}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
  
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 8,
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
  
          <ProductDetails />
        </Dialog>
        
      </Container>
    );

  }
  
};

export default Main;
