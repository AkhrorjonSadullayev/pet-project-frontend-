import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api.constants";
import { useNavigate } from "react-router-dom";

const SendOTPComponent = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseApi}/user/forgot-password`, { email }); 
      toast.success(response.data.message); 
      navigate('/reset')
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Error sending OTP");
    }
  };

  return (
<form 
  onSubmit={handleSendOTP} 
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '30px',
    border: `2px solid #7F4D4F`,
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '100px auto',
    backgroundColor: '#fff',
    color: '#7F4D4F',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }}
>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    style={{
      width: '100%',
      padding: '10px 15px',
      fontSize: '16px',
      border: `2px solid #7F4D4F`,
      borderRadius: '5px',
      outline: 'none',
      textAlign: 'center',
      color: '#7F4D4F',
    }}
    onFocus={(e) => e.target.style.borderColor = '#5C393B'}
    onBlur={(e) => e.target.style.borderColor = '#7F4D4F'}
  />
  <button
    type="submit"
    style={{
      padding: '12px 25px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#7F4D4F',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
  >
    Send OTP
  </button>
</form>


  );
};

export default SendOTPComponent;
