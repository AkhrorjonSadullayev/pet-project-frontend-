import { FooterCon } from "./footerstyle";
import boximg from "../assets/package-box1.svg";
import customerimg from "../assets/customer-service1.svg";
import secureimg from "../assets/secure-shield1.svg";
import exchange from "../assets/exchange(3)1.svg";
import logo from "../assets/Frame.svg";
const FooterComponent = () => {
  return (
    <FooterCon>
      <div className="Footer-up">
        <div className="box-con">
          <img src={boximg} alt="box-img" />
          <h3>Free Shipping</h3>
          <p>for all order over $99</p>
        </div>
        <div className="box-con">
          <img src={customerimg} alt="customer-img" />
          <h3>Friendly support</h3>
          <p>24/7 Customer support</p>
        </div>
        <div className="box-con">
          <img src={secureimg} alt="secure-img" />
          <h3>Secure pament</h3>
          <p>100% secure payment</p>
        </div>
        <div className="box-con">
          <img src={exchange} alt="exchange-img" />
          <h3>Shipping & return</h3>
          <p>within 30days for refund</p>
        </div>
      </div>

      {/* first-part-end */}

      <div className="footer-down">
        <div className="first-left-con">
          <div className="WhiteNavLeft">
            <div>
              <img src={logo} alt="logo-img" style={{ color: "grey" }} />
            </div>
            <div className="choice-con">
              <h1>ViserPet</h1>
              <p>Your Best Choice</p>
            </div>
          </div>
          <p>Maecenas tempus tellus eget cdimentum rhoncus sem quam semper </p>
        </div>
        <div className="second-left-con">
          <h3>Infomation</h3>
          <p>Site Map</p>
          <p>Specials</p>
          <p>Delivery Information</p>
          <p>Order History</p>
          <p>Privacy Policy</p>
        </div>

        <div className="second-left-con">
          <h3>Customer care</h3>
          <p>My Account</p>
          <p>Checkout</p>
          <p>Login </p>
          <p>Live Support</p>
          <p>Privacy Policy</p>
        </div>

        <div className="third-left-con">
          <h3>Subscrive now</h3>
          <p>
            Subscribe to our newsletter and get 10% off your first purchase..
          </p>
        </div>
      </div>
    </FooterCon>
  );
};

export default FooterComponent;
