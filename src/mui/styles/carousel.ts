export const carouselStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  content: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "300px",
    height: "auto",
    marginRight: "20px",
    borderRadius: "10px",
  },
  info: {
    flex: 1,
    fontSize: "18px",
    color: "#333",
  },
  buttons: {
    marginTop: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "0 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
