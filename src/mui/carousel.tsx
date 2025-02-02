import React, { useState } from "react";
import { Grid, IconButton, Box, Typography, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DogFoodProducts } from "../mock/dogFood.data";
import { PetoysProducts } from "../mock/petToys.data";
import { FishFoodProducts } from "../mock/fishFood.data";
import { PetDog } from "../mock/Dogs.data";

const combinedProducts = [
  ...DogFoodProducts.DogFoodProductList.filter((item) => item.id === 10).map((item) => ({
    ...item.DogFood,
  })),
  ...PetoysProducts.PetToysProductList.filter((item) => item.id === 6).map((item) => ({
    ...item.PetToys,
  })),
  ...FishFoodProducts.FishFoodProductList.filter((item) => item.id === 9).map((item) => ({
    ...item.FishFood,
  })),
  ...PetoysProducts.PetToysProductList.filter((item) => item.id === 9).map((item) => ({
    ...item.PetToys,
  })),
  ...PetDog.PetDogList.filter((item) => item.id === 9).map((item) => ({
    ...item.dog,
  })),
];

const MultiCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsToShow) % combinedProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsToShow < 0 ? combinedProducts.length - itemsToShow : prev - itemsToShow
    );
  };

  const visibleItems = combinedProducts.slice(currentIndex, currentIndex + itemsToShow);

  if (visibleItems.length < itemsToShow) {
    visibleItems.push(...combinedProducts.slice(0, itemsToShow - visibleItems.length));
  }

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 3, position: "relative" }}>
      <Paper elevation={3} sx={{ width: "80%", maxWidth: "1200px", p: 2, borderRadius: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {visibleItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component="img"
                src={item.image || ""}
                alt={item.name || "Product"}
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 2,
                  mb: 1,
                }}
              />
              <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography variant="h6" color="#7F4D4F" align="center">
                ${item.Price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "#7F4D4F",
          borderRadius: "50%",
          width: 48,
          height: 48,
          boxShadow: 2,
          "&:hover": { backgroundColor: "#9B686A" },
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "#7F4D4F",
          borderRadius: "50%",
          width: 48,
          height: 48,
          boxShadow: 2,
          "&:hover": { backgroundColor: "#9B686A" },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default MultiCarousel;
