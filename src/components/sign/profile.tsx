import axios from "axios";
import { useState, useEffect } from "react";
import { baseApi } from "../../utils/api.constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const Profile = () => {
  const [data, setData] = useState<any>(null);  
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); 
  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in.");
        setLoading(false);
        navigate("/login");  // Navigate to login page
        return;
      }
      try {
        const response = await axios.get(baseApi + "/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data?.data);  
        setLoading(false);  // End loading
      } catch (error) {
        setError("Failed to fetch profile. Please try again.");
        setLoading(false);  // End loading
      }
    };

    getProfile();  // Fetch profile on mount
  }, []);

  if (loading) return <div>Loading...</div>;  // Show loading message
  if (error) return <div>{error}</div>;  // Show error message
  const logout = () => {
    localStorage.clear()
}
  return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", backgroundColor: "#f9f9f9", minHeight: "" }}>
      {data ? (
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px", border: "2px solid #7F4D4F" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", color: "#7F4D4F" }}>{data.name}</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "8px", color: "#555" }}>Email: {data.email}</p>
          <p style={{ fontSize: "1.2rem", marginBottom: "8px", color: "#555" }}>Phone: {data.phone}</p>
        </div>
      ) : (
        <div style={{ fontSize: "1.5rem", color: "#888" }}>No profile data found</div>
      )}
      <Link to={"/login"} style={{ textDecoration: "none" }}>
        <button onClick={logout} style={{ backgroundColor: "#7F4D4F", color: "#fff", fontSize: "1.1rem", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s", marginTop: "20px" }}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Profile;
