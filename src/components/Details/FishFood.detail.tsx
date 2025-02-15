import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlsoLikeContainer,
  FilterDataCon,
  MainContainer,
  RelaitedProContainer,
  TabContainer,
} from "./styles/fishDetail.style";
import youtube from '../../assets/you.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import underline from "../../assets/UnderLine.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { SnackbarCloseReason } from "@mui/joy";
import axios from "axios";
import { baseApi } from "../../utils/api.constants";
import { toast } from "react-toastify";
import FavoriteCheckbox from "../../utils/favorite";

interface Todo {
  _id: string;
  phone:number;
  type: string;
  location: string;
  title: string;
  desc: string;
  price: number;
  color: string;
  main:string;
  kg:number;
  detail:string;
  detailtwo:string;
  detailthree:string;
  quantity: number;
}

const FishFoodDetail: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [text, setText] = React.useState(""); 
  const [email, setEmail] = React.useState(""); 
  const [question, setQuestion] = React.useState(""); 
  const [severity, setSeverity] = React.useState<"success" | "error">(
    "success"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token is missing. Please log in.");
      return;
    }

    try {
      const { data } = await axios.post(
        `${baseApi}/todo/order`,
        
        {
          todo_id: product?._id,
          quantity,
          title: product?.title,
          main: product?.main,
          price: product?.price,
          
        },
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        
      );
      

      toast.success(data.msg || "Added to cart successfully!");
      console.log("Updated Cart:", data.cart);
    } catch (error: any) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      toast.error(error.response?.data?.msg || "Failed to add to cart.");
    }
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_edh9nur",
        "template_2vpmfcw",
        {
          user_comment: comment,
        },
        "HXQh2x-TSbkcR5fhU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSeverity("success");
          setOpen(true);
          setComment("");
        },
        (error) => {
          console.error(error.text);
          setSeverity("error");
          setOpen(true);
        }
      );
  };
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_edh9nur",
        "template_f8q8jo7",
        {
          user_name: text, // Map user_name correctly
          user_email: email, // Map user_email correctly
          user_comment: question, // Map user_comment correctly
        },
        "HXQh2x-TSbkcR5fhU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSeverity("success");
          setOpen(true);
          setText("");
          setEmail("");
          setQuestion("");
        },
        (error) => {
          console.error(error.text);
          setSeverity("error");
          setOpen(true);
        }
      );
  };

  const [value, setValue] = useState(0);
  const { id } = useParams<{ id: string }>(); 
  const [products, setProducts] = useState<Todo[]>([]);
  const [product, setProduct] = useState<Todo | null>(null);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    const getAllTodo = async () => {
      try {
        const { data } = await axios.get(`${baseApi}/todo/get-all`);
        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    getAllTodo();
  }, []);


  useEffect(() => {
    const foundProduct = products.find((item) => item._id === id);
    setProduct(foundProduct || null);
  }, [id, products]);

  // Set main image
  useEffect(() => {
    if (product) {
      setMainImage(product.main || "");
    }
  }, [product]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  if (!product) {
    return <h2>Product not found</h2>;
  }

  const detailImages = [
    product.main,
    product.detail,
    product.detailtwo,
    product.detailthree,
  ];

  const relatedFishFood = products.filter((item) => ["Fish Food", "Fish"].includes(item.type));
  const likeFishFood = products.filter((item) => ["Parrot","Parrot Food"].includes(item.type));

  return (
    <MainContainer>
      <FilterDataCon>
        {/* Header */}

        <div className="fish-food-detail-back">
          <h1>{product.title}</h1>
          <p>Home / {product.title}</p>
        </div>

        {/* Product Details */}

        <div className="data-img-info">
          {/* Thumbnails and Main Image */}

          <div className="data-info-con">
            <div className="data-images">
              {detailImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (image) {
                      setMainImage(image);
                    }
                  }}
                >
                  {/* Check if it's a YouTube video URL */}

                  {image && image.includes("youtube.com") ? (
                    <img
                      src={youtube}
                      alt={`Thumbnail ${index + 1}`}
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      style={{ width: 100, height: 100 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Conditionally Render Video or Image */}
            <div className="data-main-image">
              {mainImage.includes("youtube.com") ? (
                <iframe
                  src={mainImage}
                  title="YouTube video"
                  width="509"
                  height="666"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={mainImage} alt="Main Product" />
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1>{product.title}</h1>
            <div className="price">
              <p>{product.desc}</p>
            </div>
            <div className="size">
              <h3>Size:</h3>
              <h3>{product.kg}kg</h3>
            </div>
            <div className="size">
              <h3>Price:</h3>
              <h3>${product.price}</h3>
            </div>
            <div className="size">
              <h3>Color:</h3>
              <h3>{product.color}</h3>
            </div>
            <div className="size">
              <h3>Type:</h3>
              <h3>{product.location}</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center",gap:'10px',justifyContent:'space-between' }}>
              <label htmlFor="quantity"><h3>Quantity:</h3></label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                placeholder="Enter Quantity"
                style={{ width: "100px", padding: "8px", marginTop: "5px" }}
                min="1"
              />
            </div>
            <div className="buy-now">
              <button
                onClick={handleAddToCart}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#7F4D4F",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
              <FavoriteCheckbox todo_id={product._id} />
            </div>
          </div>
        </div>
      </FilterDataCon>

      <TabContainer>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              Maxwidth: "800px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            aria-label="tabs with hover effect"
            TabIndicatorProps={{ style: { backgroundColor: "#7F4D4F" } }}
          >
            <Tab
              label="Description"
              sx={{
                "&:hover": {
                  color: "#7F4D4F",
                  ".MuiTabs-indicator": { backgroundColor: "#7F4D4F" },
                },
              }}
            />
            <Tab label="Review" sx={{ "&:hover": { color: "#7F4D4F" } }} />
            <Tab label="Comment" sx={{ "&:hover": { color: "#7F4D4F" } }} />
            <Tab label="FAQ" sx={{ "&:hover": { color: "#7F4D4F" } }} />
          </Tabs>
          <Box
            sx={{
              maxWidth: "900px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: 3,
            }}
          >
            {value === 0 && (
              <div style={{ display: "flex", justifyContent: "start" }}>
                Our website is designed with a user-friendly interface and
                secure payment options, making your shopping experience seamless
                and stress-free. Join our pet-loving community and give your
                pets the care they deserve!
              </div>
            )}
            {value === 1 && (
              <div>
                "Great selection, easy navigation, and excellent customer
                service! The detailed product descriptions and pet care guides
                are super helpful. I love the subscription option—it makes life
                so much easier. Highly recommend for all pet owners!" 🐾
              </div>
            )}
            {value === 2 && (
              <div style={{ display: "flex", justifyContent: "start" }}>
                <form className="comment" onSubmit={handleSubmit}>
                  <TextField
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment"
                    required
                    multiline
                    rows={5}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      marginTop: "10px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                  <Button className="button" type="submit" variant="contained">
                    Submit
                  </Button>
                </form>

                {/* Snackbar for success or error message */}
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    {severity === "success"
                      ? `Email sent successfully! User  Message: ${comment}`
                      : "Failed to send email."}
                  </Alert>
                </Snackbar>
              </div>
            )}
            {value === 3 && (
              <div className="FAQ">
                <div>
                  <Accordion
                    sx={{
                      backgroundColor: "#7F4D4F",
                      color: "#fff",
                      "& .MuiAccordionSummary-root": {
                        backgroundColor: "#5A3334",
                      },
                      "& .MuiAccordionDetails-root": {
                        backgroundColor: "#916C6E",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>General Questions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <strong>What types of pets do you sell?</strong>
                        <br />
                        We offer a variety of pets, including dogs, cats, birds,
                        reptiles, fish, and small animals like rabbits and
                        hamsters.
                      </Typography>
                      <Typography>
                        <strong>What are your store hours?</strong>
                        <br />
                        Our store is open from [insert hours] on [insert days].
                        Online orders are available 24/7.
                      </Typography>
                      <Typography>
                        <strong>
                          Do you offer online shopping and delivery?
                        </strong>
                        <br />
                        Yes, you can order products online, and we offer
                        delivery services to [insert locations].
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    sx={{
                      backgroundColor: "#7F4D4F",
                      color: "#fff",
                      "& .MuiAccordionSummary-root": {
                        backgroundColor: "#5A3334",
                      },
                      "& .MuiAccordionDetails-root": {
                        backgroundColor: "#916C6E",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography>Pet Care & Advice</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <strong>Do you provide pet care advice?</strong>
                        <br />
                        Yes, our knowledgeable staff can provide guidance on
                        feeding, grooming, and training your pet.
                      </Typography>
                      <Typography>
                        <strong>
                          What is the best food for my [specific pet]?
                        </strong>
                        <br />
                        We recommend food based on your pet’s age, breed, and
                        health needs.
                      </Typography>
                      <Typography>
                        <strong>Do you sell pet grooming products?</strong>
                        <br />
                        Yes, we have shampoos, brushes, nail clippers, and other
                        grooming supplies for various types of pets.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    sx={{
                      backgroundColor: "#7F4D4F",
                      color: "#fff",
                      "& .MuiAccordionSummary-root": {
                        backgroundColor: "#5A3334",
                      },
                      "& .MuiAccordionDetails-root": {
                        backgroundColor: "#916C6E",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <Typography>Health & Vaccinations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <strong>Are the pets you sell vaccinated?</strong>
                        <br />
                        Yes, all our pets are vaccinated and checked by a
                        veterinarian before being sold.
                      </Typography>
                      <Typography>
                        <strong>Do you sell pet medications?</strong>
                        <br />
                        We carry over-the-counter pet medications, including
                        flea and tick treatments, dewormers, and supplements.
                      </Typography>
                      <Typography>
                        <strong>Can you recommend a vet?</strong>
                        <br />
                        We partner with trusted local veterinarians and can
                        provide referrals upon request.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="FAQ">
                  <Box
                    className="box"
                    component="form"
                    onSubmit={handleSend}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      borderRadius: "12px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f5f5f5",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    <TextField
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Your Name"
                      required
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <TextField
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <TextField
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Write Your Question?"
                      required
                      multiline
                      rows={5}
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#7F4D4F",
                        color: "#fff",
                        padding: "12px 24px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#5f3a3b" },
                      }}
                    >
                      Submit
                    </Button>
                  </Box>

                  {/* Snackbar for success or error message */}
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={severity}
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      {severity === "success"
                        ? `Email sent successfully!
         Name: ${text}
         Email: ${email}
         Message: ${comment}`
                        : "Failed to send email."}
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            )}
          </Box>
        </Box>
      </TabContainer>
      <div className="delete-new">
        <div>
          <h1>Related Products</h1>
          <img src={underline} alt="underline-img" />
        </div>
      </div>
      <AlsoLikeContainer>
        <div className="grid">
        {relatedFishFood.map((item,index) => (
            <div key={index} >
              <div key={item._id} className="product-img-con">
                <Link
                  to={`/${
                    item.type === "Fish" ? "others" : "fish-food"
                  }/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AlsoLikeContainer>
      <div className="delete-new">
        <div>
          <h1>You May Also Like</h1>
          <img src={underline} alt="underline-img" />
        </div>
      </div>
      <RelaitedProContainer>
        <div className="grid">
        {likeFishFood.map((item,index) => (
            <div key={index} >
              <div key={item._id} className="product-img-con">
                <Link
                  to={`/${
                    item.type === "Parrot Food" ? "parrot-food" : "others"
                  }/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </RelaitedProContainer>
    </MainContainer>
  );
};

export default FishFoodDetail;
