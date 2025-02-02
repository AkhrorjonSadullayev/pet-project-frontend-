import "../../styles/Dogs.style";
import { MainContainer } from "../../styles/Dogs.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../../utils/api.constants";
import { toast } from "react-toastify";

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

const DogsComponent = () => {
  const [value, setValue] = useState<number[]>([0, 2000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [products, setProducts] = useState<Todo[]>([]);


  const getallTodo = async (search: string) => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`,
        {
          params:{ search }
        }
      );
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
    const matchesType = item.type === "Dog";
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
      <div className="pet-dog-back">
        <h1>Dogs</h1>
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
                  max={2000}
                  step={50}
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
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="Black"
                  sx={{ color: "black" }}
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
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={selectedColors.includes("White")}
                    onChange={() => handleColorChange("White")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  }
                  label="White"
                  sx={{ color: "black" }}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Left-Side-Sort-Conatiner-End */}

        <div style={{ marginTop: "80px" }} className="grid">
          {filteredOriginal.map((value: Todo, index: number) => (
            <div
              key={index}
              className="product-img-con"
              style={{
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                textAlign: "center",
              }}
            >
              <Link
                to={`/dogs/${value._id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={value.main}
                  alt={value.title}
                  className="img-class"
                />
                <div className="price">
                  <p className="name">{value.title}</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <p>
                      ${value.price}
                    </p>
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

export default DogsComponent;
