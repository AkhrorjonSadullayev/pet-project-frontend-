import axios from "axios";
import { InsideCon, Signcontainer, SignInLink } from "./style/signUp.style";
import { baseApi } from "../../utils/api.constants";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginResponse {
  success: boolean;
  access_token: string;
}

const SignIn = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Email va parol bo'shligini tekshirish
    if (!email || !password) {
      setErrorMsg("All fields are required.");
      return;
    }
    try {
      // Login API so'rovi
      const { data } = await axios.post<LoginResponse>(`${baseApi}/user/login`, { email, password });
      if (data.success && data.access_token) {
        // Tokenni localStorage ga saqlash
        localStorage.setItem("token", data.access_token);
        toast.success("Successfully Logged In!");
        setEmail("");
        setPassword("");
        navigate("/"); // Asosiy sahifaga yo'naltirish
      } else {
        setErrorMsg("Login failed. Please try again.");
      }
    } catch (error: any) {
      // API'dan qaytgan xatolarni ko'rsatish
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMsg("Invalid email or password.");
        } else {
          setErrorMsg(error.response.data.message || "An error occurred. Please try again.");
        }
      } else {
        setErrorMsg("Network error. Please try again.");
      }
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Signcontainer>
      <div className="sign-con">
        <InsideCon className="InsideCon">
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                type="email"
                className="email-input"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={handleChangeInput}
                type="password"
                className="email-input"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="sign-but">
              LOG IN
            </button>
          </form>
          <div className="chekbox-main">
            <Link to="/forgot">
              <p style={{ color: "#373737" }}>Forgot your password?</p>
            </Link>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          </div>
          <div className="lines-con">
            <hr
              style={{
                width: "119px",
                height: "1px",
                border: "1px solid rgba(55, 55, 55, 0.15)",
              }}
            />
            <p style={{ color: "#6D6D6D" }}>OR</p>
            <hr
              style={{
                width: "119px",
                height: "1px",
                border: "1px solid rgba(55, 55, 55, 0.15)",
              }}
            />
          </div>
          <SignInLink to="/sign-up">
            <button className="create-but">CREATE ACCOUNT</button>
          </SignInLink>
        </InsideCon>
      </div>
    </Signcontainer>
  );
};

export default SignIn;
