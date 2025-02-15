import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api.constants";
import { Signcontainer } from "./style/signUp.style";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    // Formada barcha maydonlar tekshirilmoqda
    if (!name || !email || !phone || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      localStorage.setItem(
        "tempUser",
        JSON.stringify({ name, email, phone, password })
      );
      const { data } = await axios.post(`${baseApi}/user/send`, { email });
      if (data.message) {
        toast.success("OTP sent to your email. Please check.");
        navigate("/otp");
      }
    } catch (error: any) {
      if (error.response?.status === 409) {
        // Agar email allaqachon mavjud bo'lsa
        toast.error("Email is already used.");
      } else if (error.response?.status === 400) {
        // Agar serverda xato bo'lsa
        toast.error("Bad Request. Please check your input.");
      } else {
        // Umumiy xato
        toast.error("Failed to send OTP. Please try again.");
      }
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Signcontainer>
      <div className="sign-con">
        <div className="InsideCon">
          <h1>Sign Up</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="name">Your Name</label>
              <input
                name="name"
                className="email-input"
                value={name}
                onChange={handleChangeInput}
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
            <label htmlFor="name">Your Email</label>
              <input
                name="email"
                className="email-input"
                value={email}
                onChange={handleChangeInput}
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
            <label htmlFor="name">Your Phone Number</label>
              <input
                name="phone"
                className="email-input"
                value={phone}
                onChange={handleChangeInput}
                type="text"
                placeholder="Your Phone Number"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
            <label htmlFor="name">Your Password</label>
              <input
                name="password"
                className="email-input"
                value={password}
                onChange={handleChangeInput}
                type="password"
                placeholder="At least 6 characters,"
              />
            </div>
            <button className="sign-but" type="button" onClick={sendOtp}>
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </Signcontainer>
  );
};

export default SignUp;


// Styled Components








// import { useState } from "react";
// import axios from "axios";
// import { InsideCon, Signcontainer, SignLink } from "./style/signUp.style";
// import { baseApi } from "../../utils/api.constants";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; 

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formErrors, setFormErrors] = useState({
//     email: "",
//     phone: "",
//     password: "",
//     name: "",
//   }); 
//   const navigate = useNavigate(); 

//   const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormErrors({
//       email: "",
//       phone: "",
//       password: "",
//       name: "",
//     });
//     let hasError = false;
//     if (!name || !email || !phone || !password) {
//       alert("All fields are required.");
//       return;
//     }
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(email)) {
//       setFormErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
//       hasError = true;
//     }
//     const phoneRegex = /^(01[016789]{1})(\d{3,4})(\d{4})$/; // Matches Korean phone numbers like 010-1234-5678
//     if (!phoneRegex.test(phone)) {
//       setFormErrors((prev) => ({ ...prev, phone: "Please enter a valid Korean phone number." }));
//       hasError = true;
//     }
//     if (password.length < 6) {
//       setFormErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters long." }));
//       hasError = true;
//     }
//      if (hasError) return; 

//     try {
//       // Make API request to create the user and send activation email
//       const { data } = await axios.post(baseApi + "/user/sign-up", { name, email, phone, password });

//       if (data.success) {
//         toast.success("Successfully signed up! Please check your email to activate your account.");
//         setName("");
//         setEmail("");
//         setNumber("");
//         setPassword("");
//         setIsSuccess(true);  // Set success message
//       }
//     } catch (error: any) {
//       // Handle errors, especially if email is already used
//       if (error.response && error.response.status === 409) {
//         setErrorMsg("Email is already used");
//       } else {
//         setErrorMsg("An error occurred. Please try again.");
//       }
//     }
//   };

//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.name === "name") {
//       setName(e.target.value);
//     }
//     if (e.target.name === "email") {
//       setEmail(e.target.value);
//     }
//     if (e.target.name === "phone") {
//       setNumber(e.target.value);
//     }
//     if (e.target.name === "password") {
//       setPassword(e.target.value);
//     }
//   };

//   return (
//     <Signcontainer>
//     <div className="sign-con">
//       <InsideCon className="InsideCon">
//         <h1>Sign Up</h1>
//         <form onSubmit={addTodo}>
//           {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
//         {isSuccess && (
//   <p style={{ color: "green" }}>
//     Successfully signed up! Please check your email to activate your account.
//   </p>
// )}
//           <div>
//             <input
//               name="name"
//               value={name}
//               onChange={handleChangeInput}
//               type="text"
//               className="email-input"
//               placeholder="Your Name"
//             />
//             {formErrors.name && <p style={{ color: "red" }}>{formErrors.name}</p>}
//           </div>
//           <div>
//             <input
//               name="email"
//               value={email}
//               onChange={handleChangeInput}
//               type="email"
//               className="email-input"
//               placeholder="Email"
//             />
//             {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
//           </div>
//           <div>
//             <input
//               name="phone"
//               value={phone}
//               onChange={handleChangeInput}
//               type="text"
//               className="email-input"
//               placeholder="Phone Number"
//             />
//             {formErrors.phone && <p style={{ color: "red" }}>{formErrors.phone}</p>}
//           </div>
//           <div>
//             <input
//               name="password"
//               value={password}
//               onChange={handleChangeInput}
//               type="password"
//               className="email-input"
//               placeholder="Password"
//             />
//             {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
//           </div>
//           <button className="sign-but" disabled={loading}>
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//         <div className="chekbox-main">
//           <div className="chekbox-con"></div>
//         </div>
//         <div className="lines-con">
//           <hr
//             style={{
//               width: "119px",
//               height: "1px",
//               border: "1px solid rgba(55, 55, 55, 0.15)",
//             }}
//           />
//           <p style={{ color: "#6D6D6D" }}>OR</p>
//           <hr
//             style={{
//               width: "119px",
//               height: "1px",
//               border: "1px solid rgba(55, 55, 55, 0.15)",
//             }}
//           />
//         </div>
//         <SignLink to={"/login"}>
//           <button className="create-but">Login</button>
//         </SignLink>
//       </InsideCon>
//     </div>
//   </Signcontainer>
//   );
// };

// export default SignUp;


