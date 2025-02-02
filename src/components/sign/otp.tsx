import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api.constants";
import OtpInput from 'react-otp-input';

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (otp: string) => {
    // Ensure that only numeric values are entered
    if (/^[0-9]*$/.test(otp)) {
      setOtp(otp);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      navigate("/sign-up");
      return;
    }
    try {
      const { data } = await axios.post(`${baseApi}/user/verify`, { otp });
      if (!data.success) {
        toast.error("Invalid OTP. Please try again.");
        return;
      }
      toast.success("OTP verified successfully.");
      const tempUser = JSON.parse(localStorage.getItem("tempUser") || "{}");

      if (!tempUser || !tempUser.name || !tempUser.email || !tempUser.phone || !tempUser.password) {
        toast.error("Please fill in all fields.");
        return;
      }
      try {
        await axios.post(`${baseApi}/user/sign-up`, tempUser);
        toast.success("User registered successfully.");
        localStorage.removeItem("tempUser");
        navigate("/login");
      } catch (error) {
        toast.error("Failed to register the user. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4', // Optional: to give a nice background
      }}
    >
      <div>
        <h1
          style={{
            color: '#7F4D4F',
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            marginBottom: '20px',
          }}
        >
          Verify OTP
        </h1>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          inputStyle={{
            width: '50px',
            height: '50px',
            margin: '0 5px',
            fontSize: '20px',
            border: '2px solid #7F4D4F',
            borderRadius: '10px',
            textAlign: 'center',
            outline: 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          renderInput={(props) => <input {...props} type="text" />}
        />
        <br />
        <button
          onClick={verifyOtp}
          style={{
            padding: '10px 20px',
            backgroundColor: '#7F4D4F',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: '0.3s',
            marginTop: '20px',
            width: '100%',
          }}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
