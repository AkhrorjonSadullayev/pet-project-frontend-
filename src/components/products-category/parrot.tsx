import './styles/parrot.style'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import "./styles/parrot.style";
import { MainContainer } from "./styles/parrot.style";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FishFoodProducts } from "../../mock/fishFood.data";
import { baseApi } from '../../utils/api.constants';
import { toast } from 'react-toastify';
import axios from 'axios';
function valuetext(value: number) {
  return `$${value}`;
}

interface Todo {
  _id: string;
  type: string;
  location: string;
  title: string;
  desc: string;
  price: number;
  color: string;
  main: string;
  detail: string;
  detailtwo: string;
  detailthree: string;
}
const ParrotComponent = () => {
  const bestSeller = FishFoodProducts.FishFoodProductList.filter(bestSeller =>{
    return bestSeller.id === 7 ||  bestSeller.id === 16 ||  bestSeller.id === 10
  })
  const [value, setValue] = useState<number[]>([0, 4000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [products, setProducts] = useState<Todo[]>([]);
 
  const getallTodo = async (search:string) => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`,{
        params:{search}
      });
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      toast.error("Error fetching todos.");
    }
  };

  useEffect(() => {
    getallTodo("");
  }, []);
  const handleColorChange = (color: string) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter((item) => item !== color);
      } else {
        return [...prevSelectedColors, color];
      }
    });
  };
  const handleLocationChange = (location: string) => {
    setSelectedLocation((prevSelectedLocation) => {
      if (prevSelectedLocation.includes(location)) {
        return prevSelectedLocation.filter((item) => item !== location);
      } else {
        return [...prevSelectedLocation, location];
      }
    });
  };
  const handleTypeChange = (type: string) => {
    setSelectedType((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((item) => item !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };


  const filteredOriginal = products.filter((item) => {
    const isWithinPriceRange = item.price >= value[0] && item.price <= value[1];
   const matchesType = item.type === "Parrot"
    const matchesSelectedColors =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const matchesSelectedLocation =
      selectedLocation.length === 0 || selectedLocation.includes(item.location);
    const matchesSelectedType =
      selectedType.length === 0 || selectedType.includes(item.type);
  
    return matchesType && isWithinPriceRange && matchesSelectedColors && matchesSelectedLocation && matchesSelectedType; 
  });
  const filteredOriginalF = products.filter((item) => {
    const isWithinPriceRange = item.price >= value[0] && item.price <= value[1];
   const matchesType = item.type === "Parrot Food"
    const matchesSelectedColors =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const matchesSelectedLocation =
      selectedLocation.length === 0 || selectedLocation.includes(item.location);
    const matchesSelectedType =
      selectedType.length === 0 || selectedType.includes(item.type);
  
    return matchesType && isWithinPriceRange && matchesSelectedColors && matchesSelectedLocation && matchesSelectedType; 
  });

  const combinedData = [...filteredOriginal, ...filteredOriginalF]; 

  const shuffledData = combinedData.sort(() => Math.random() - 0.5);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <MainContainer>
      <div className="parrot-food-back">
        <h1>Parrot Food</h1>
        <p>Home / Product Category</p>
      </div>

      {/* BACKGROUND IMAGE */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0px",
        }}
      >
        <div className="left-side-sort">
        <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="category-style"
            >
              Search
            </AccordionSummary>
            <AccordionDetails>
            <input style={{ width: "100%",border: "1px solid black", padding: "10px", borderRadius: "5px" }} placeholder="search" type="text" name="search" id="search" onChange={(e) => {
                getallTodo(e.target.value);
              }} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="category-style"
            >
              Category
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedType.includes("Parrot Food")}
                    onChange={() => handleTypeChange("Parrot Food")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Parrot Food"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedType.includes("Parrot")}
                    onChange={() => handleTypeChange("Parrot")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Parrot"
                  sx={{ color: "black" }}
                />
                </FormGroup>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="category-style"
            >
              Filter Price
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: 250 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={4000}
                  step={1}
                  sx={{
                    color: "#7F4D4F",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#7F4D4F",
                      border: "2px solid #7F4D4F",
                      "&:hover": {
                        backgroundColor: "#6B3C3E",
                        boxShadow: "0 0 0 8px rgba(127, 77, 79, 0.16)",
                      },
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#7F4D4F",
                    },
                    "& .MuiSlider-rail": {
                      color: "#D3A7A8",
                    },
                  }}
                />
              </Box>
              <p>
                Price :${value[0]} - ${value[1]}
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="category-style"
            >
              Location
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Busan")}
                    onChange={() => handleLocationChange("Busan")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Busan"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Seoul")}
                    onChange={() => handleLocationChange("Seoul")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Seoul"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Suwon")}
                    onChange={() => handleLocationChange("Suwon")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Suwon"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Daejeon")}
                    onChange={() => handleLocationChange("Daejeon")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Daejeon"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Jeonju")}
                    onChange={() => handleLocationChange("Jeonju")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Jeonju"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Ulsan")}
                    onChange={() => handleLocationChange("Ulsan")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Ulsan"
                  sx={{ color: "black" }}
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Incheon")}
                    onChange={() => handleLocationChange("Incheon")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Incheon"
                  sx={{ color: "black" }}
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Daegu")}
                    onChange={() => handleLocationChange("Daegu")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Daegu"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedLocation.includes("Gwangju")}
                    onChange={() => handleLocationChange("Gwangju")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Gwangju"
                  sx={{ color: "black" }}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="category-style"
            >
              Color
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Red")}
                    onChange={() => handleColorChange("Red")}
                      sx={{ color: "red", "&.Mui-checked": { color: "red" } }}
                    />
                  }
                  label="Red"
                  sx={{ color: "red" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Yellow")}
                    onChange={() => handleColorChange("Yellow")}
                      sx={{
                        color: "#B8860B",
                        "&.Mui-checked": { color: "#B8860B" },
                      }}
                    />
                  }
                  label="Yellow"
                  sx={{ color: "#B8860B" }}
                />
                                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Orange")}
                    onChange={() => handleColorChange("Orange")}
                      sx={{
                        color: "orange",
                        "&.Mui-checked": { color: "#orange" },
                      }}
                    />
                  }
                  label="Orange"
                  sx={{ color: "orange" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Black")}
                    onChange={() => handleColorChange("Black")}
                      sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
                    />
                  }
                  label="Black"
                  sx={{ color: "black" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Pink")}
                    onChange={() => handleColorChange("Pink")}
                      sx={{ color: "pink", "&.Mui-checked": { color: "pink" } }}
                    />
                  }
                  label="Pink"
                  sx={{ color: "pink" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Green")}
                    onChange={() => handleColorChange("Green")}
                      sx={{
                        color: "green",
                        "&.Mui-checked": { color: "green" },
                      }}
                    />
                  }
                  label="Green"
                  sx={{ color: "green" }}
                />
                <FormControlLabel
              control={
                <Checkbox
                  checked={selectedColors.includes("Blue")}
                  onChange={() => handleColorChange("Blue")}
                  sx={{
                    color: "Blue",
                    "&.Mui-checked": { color: "Blue" },
                  }}
                />
              }
              label="Blue"
              sx={{ color: "Blue" }}
            />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Violet")}
                    onChange={() => handleColorChange("Violet")}
                      sx={{
                        color: "#4B0082",
                        "&.Mui-checked": { color: "#4B0082" },
                      }}
                    />
                  }
                  label="Violet"
                  sx={{ color: "#4B0082" }}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion
            defaultExpanded
            sx={{
              boxShadow: "none",
              backgroundColor: "#FFF",
              border: "1px solid rgba(51, 51, 51, 0.03)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="category-style"
            >
              Best Sellers
            </AccordionSummary>
            <AccordionDetails>
            {bestSeller.map((list) => (
              <Link to={`/fish-food/${list.id}`} style={{ textDecoration: 'none',color:'black' }}>
              <div style={{ display: "flex", gap: "20px" }}>
                    <img
                        src={list.FishFood.image}
                        alt="dog-food-img"
                        width={"59px"}
                        height={"72px"}
                      />
                      <div>
                        <p>{list.FishFood.name}</p>
                        <div
                          style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                        >
                          <p
                            style={{
                              textDecorationLine: "line-through",
                              color: "grey",
                            }}
                          >
                            ${list.FishFood.OriginalPrice}
                          </p>
                          <p style={{ color: "#7F4D4F" }}>
                          ${list.FishFood.Price}
                          </p>
                        </div>
                      </div>
                      </div>
                      </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Left-Side-Sort-Conatiner-End */}

        <div style={{ marginTop: "60px" }} className="grid">
        {shuffledData.map((value: Todo, index: number) => (
      <div key={index} className="product-img-con">
        <Link
          to={`/${
            value.type === "Parrot" ? "others" : "parrot-food"
          }/${value._id}`}
          style={{ textDecoration: "none" }}
        >
          <img className="img-class" src={value.main} alt="product-img" />
          <div className="price">
            <p className="name">{value.title}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <p >${value.price}</p>
            </div>
          </div>
        </Link>
      </div>
    ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default ParrotComponent;
