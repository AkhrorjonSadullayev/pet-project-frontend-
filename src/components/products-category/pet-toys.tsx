import './styles/pet-toys.style'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import "./styles/fish-food.style";
import { MainContainer } from "./styles/pet-toys.style"
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { baseApi } from '../../utils/api.constants';
import { toast } from 'react-toastify';

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
const PetToysComponent = () => {
  const [value, setValue] = useState<number[]>([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
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
  const filteredOriginal = products.filter((item) => {
    const isWithinPriceRange = item.price >= value[0] && item.price <= value[1];
   const matchesType = item.type === "Pet Toys";
    const matchesSelectedColors =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const matchesSelectedLocation =
      selectedLocation.length === 0 || selectedLocation.includes(item.location);
  
    return matchesType && isWithinPriceRange && matchesSelectedColors && matchesSelectedLocation; 
  });



  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <MainContainer>
      <div className="pet-toys-back">
        <h1>Pet Toys</h1>
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
                      checked={selectedLocation.includes("Dog Toy")}
                      onChange={() => handleLocationChange("Dog Toy")}
                        sx={{
                            color: "#7F4D4F",
                            "&.Mui-checked": { color: "#7F4D4F" },
                        }}
                    />
                    }
                    label="Dog Toy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={selectedLocation.includes("Cat Toy")}
                      onChange={() => handleLocationChange("Cat Toy")}
                        sx={{
                            color: "#7F4D4F",
                            "&.Mui-checked": { color: "#7F4D4F" },
                        }}
                    />
                    }
                    label="Cat Toy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={selectedLocation.includes("Rabbit Toy")}
                      onChange={() => handleLocationChange("Rabbit Toy")}
                        sx={{
                            color: "#7F4D4F",
                            "&.Mui-checked": { color: "#7F4D4F" },
                        }}
                    />
                    }
                    label="Rabbit Toy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                      checked={selectedLocation.includes("Parrot Toy")}
                      onChange={() => handleLocationChange("Parrot Toy")}
                        sx={{
                            color: "#7F4D4F",
                            "&.Mui-checked": { color: "#7F4D4F" },
                        }}
                    />
                    }
                    label="Parrot Toy"
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
                  max={100}
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
                    checked={selectedColors.includes("Blue")}
                    onChange={() => handleColorChange("Blue")}
                      sx={{ color: "blue", "&.Mui-checked": { color: "blue" } }}
                    />
                  }
                  label="Blue"
                  sx={{ color: "blue" }}
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
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("Brown")}
                    onChange={() => handleColorChange("Brown")}
                      sx={{
                        color: "brown",
                        "&.Mui-checked": { color: "brown" },
                      }}
                    />
                  }
                  label="Brown"
                  sx={{ color: "brown" }}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Left-Side-Sort-Conatiner-End */}

        <div style={{ marginTop: "60px" }} className="grid">
        {filteredOriginal.map((value: Todo, index: number) => (
      <div key={index} className="product-img-con">
        <Link to={`/pet-toys/${value._id}`}
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

export default PetToysComponent;
