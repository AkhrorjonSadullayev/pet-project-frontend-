import Asynchronous from "../mui/searchinput";
import "../navbar/navbarstyle";
import { BrownCon, WhiteCon } from "../navbar/navbarstyle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../assets/Frame.svg";
import phone from "../assets/phone (1) 1.svg";
import msg from "../assets/email (1) 1.svg";
import SelectVariants from "../mui/submit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../utils/api.constants";
import { useEffect, useState } from "react";
import CartCheckbox from "../mui/cart";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsDisabled(true);
    setTimeout(() => {
      navigate("/add");
    }, 300); 
  }; 
  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(baseApi + "/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data?.data);
        setLoading(false); 
      } catch (error) {
        setError("Failed to fetch profile. Please try again.");
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return (
    <div>
      <WhiteCon>
        <div className="WhiteNavLeft">
          <div>
            <img src={logo} alt="logo-img" style={{ color: "grey" }} />
          </div>
          <div className="choice-con">
            <h1>ViserPet</h1>
            <p>Your Best Choice</p>
          </div>
        </div>

        <div className="WhiteNavRight">
          <div className="WhiteNavRigh-mini">
            <div className="contact-phone">
              <img src={phone} alt="logo-img" />
              <div className="contact">
                <p>contact us</p>
                <h5>010-9560-0410</h5>
              </div>
            </div>
            <hr style={{ height: "24px", width: "1px" }} />
            <div className="contact-phone">
              <img src={msg} alt="msg-img" />
              <div className="contact">
                <p>email address</p>
                <h5>ahrorsadullayev@gmail.com</h5>
              </div>
            </div>
            <SelectVariants />
          </div>
        </div>
      </WhiteCon>
      <BrownCon>
        <div className="main-nav-con">
          <div className="navbar-left">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <p>Home</p>
            </Link>
            <Link to={"/shop"} style={{ textDecoration: "none", color: "white" }}>
            <p>Shop</p>
            </Link>
            <Link to={"/about-us"} style={{ textDecoration: "none", color: "white" }}>
            <p>About us</p>
            </Link>
            <Link to={"/dogs"} style={{ textDecoration: "none", color: "white" }}>
            <p>Dogs</p>
            </Link>
            <Link to={"/cats"} style={{ textDecoration: "none", color: "white" }}>
            <p>Cats</p>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none", color: "white" }}>
            <p>Contact</p>
            </Link>
            <Asynchronous />
          </div>

          <div className="navbar-right">
          {user && (
        <button
          className="add-button"
          onClick={handleClick}
          disabled={isDisabled}
        >
          ADD PRODUCT
        </button>
      )}
           <Link to={"/favorites"}>
           <FavoriteBorderIcon style={{ color: "white", cursor: "pointer" }} />
           </Link>
            <Link to={"/cart"} style={{textDecoration:'none'}}>
            <div>
            <CartCheckbox />
            </div>
            </Link>
            <Link to={"/profile"}>
            <PersonOutlineIcon style={{ color: "white", cursor: "pointer" ,marginRight:'10px'}} />
            </Link>
          </div>
        </div>
      </BrownCon>
    </div>
  );
};

export default Navbar;
