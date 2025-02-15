
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api.constants";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,  } from "@mui/material";

interface Todo {
  _id: string;
  title: string;
  location: string;
  desc: string;
  phone: number;
  type:string;
  price: number;
  color: string;
  kg:number;
  main:string;
  detail:string;
  detailtwo:string;
  detailthree:string;
}
function AddProduct() {
  const [products, setProducts] = useState<Todo[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>(""); 
  const [location, setLocation] = useState<string>(""); 
  const [phone, setPhone] = useState<number>(); 
  const [desc, setDesc] = useState<string>(""); 
  const [selectId, setSelectId] = useState<string>(""); 
  const [type, setType] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>();
  const [kg, setKg] = React.useState<number>();
  const [color, setColor] = React.useState<string>('');
  const [main,setMain] =  React.useState<string>('');
  const [detail,setDetail] =  React.useState<string>('');
  const [detailtwo,setDetailtwo] =  React.useState<string>('');
  const [detailthree,setDetailthree] =  React.useState<string>('');
  const token = localStorage.getItem("token"); 
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };
  const handleChangeLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  const handleColorChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };
  const addTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    if (!token) {
      toast.error("Token is missing. Please log in.");
      return;
    }
  
    const todoData: any = {
      type,
      title,
      desc,
      price,
      phone,
      location,
      color,
      kg,
      main,
      detail,
      detailtwo,
      detailthree,
    };
  
    try {
      const url = !selectId ? `${baseApi}/todo/add` : `${baseApi}/todo/edit/${selectId}`;
      const method = !selectId ? "post" : "put";
  
      const { data } = await axios({
        method,
        url,
        data: todoData,
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (data.success) {
        toast.success(!selectId ? "Successfully added!" : "Successfully updated!");
  
        // Agar yangi todo qo‘shilsa, uni products ro‘yxatiga qo‘shing
        if (!selectId) {
          setProducts((prevProducts) => [...prevProducts, data.todo]);  // Yangi qo‘shilgan todo'ni products ro‘yxatiga qo‘shish
        }
  
        // Formani tozalash
        setTitle("");
        setDesc("");
        setMain("");
        setDetail("");
        setDetailtwo("");
        setDetailthree("");
        setLocation("");
        setType("");
        setKg(0);
        setPhone(0);
        setPrice(0);
        setSelectId("");  // faqat tahrir qilganda tozalash
      } else {
        toast.error(data.msg || "Failed to add/update todo.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.msg || "An error occurred. Please try again.");
    }
  };
  
  
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "desc") setDesc(e.target.value);
    if (e.target.name === "price") setPrice(Number(e.target.value));
    if (e.target.name === "phone") setPhone(Number(e.target.value));
    if (e.target.name === "kg") setKg(Number(e.target.value));
  };

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (!e.target.files?.length) {
      alert("No file selected.");
      return;
    }
    const formData = new FormData();
    formData.append(fieldName, e.target.files[0]);
  
    try {
      const { data } = await axios.post(`${baseApi}/upload`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        timeout:60000
      });;
  
      if (data.success) {
        if (fieldName === 'main') {
          setMain(data.files[0].filePath); // `main` qiymatini yangilash
        } else if (fieldName === 'detail') {
          setDetail(data.files[0].filePath); // `detail` qiymatini yangilash
        }else if (fieldName === 'detailtwo') {
          setDetailtwo(data.files[0].filePath); // `detail` qiymatini yangilash
        }else if (fieldName === 'detailthree') {
          setDetailthree(data.files[0].filePath); // `detail` qiymatini yangilash
        }
        toast.success(`${fieldName} uploaded successfully!`);
      } else {
        toast.error("File upload failed.");
      }
    } catch (error) {
      console.error("File upload error:", error);
      alert("File upload failed. Please try again.");
    }
  };
  
  const deleteTodo = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token is missing.");
        return;
      }
  
      const { data } = await axios.delete(`${baseApi}/todo/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (!data.success) {
        toast.error(data.msg || "Failed to delete todo.");
        return;
      }
  
     
      data.success
        ? toast.success("Todo deleted successfully!")
        : toast.error(data.msg || "Failed to delete todo.");
        setProducts((prevProducts) => prevProducts.filter((todo) => todo._id !== id));
    } catch (error: any) {
      console.error("Error deleting todo:", error);
      toast.error(error.response?.data?.msg || "Error deleting todo.");
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseApi}/todo/products`, {
          headers: {
            Authorization: `Bearer ${token}`, // Tokenni Authorization header orqali yuborish
          },
        });

        if (!response) {
          throw new Error("Mahsulotlarni olishda xatolik yuz berdi.");
        }

        const data = await response.data;

        if (data.success) {
          setProducts(data.data); // Mahsulotlarni statega saqlash
        } else {
          setError(data.message); // Xato xabarini olish
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmagan xatolik"); // Xatolikni ko‘rsatish
      } finally {
        setLoading(false); // Yuklash holatini o'zgartirish
      }
    };

    fetchProducts(); // Mahsulotlarni olish
  }, [token]);
  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <h1>Add Your Pet</h1>
        <form
  onSubmit={addTodo}
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    maxWidth: "550px",
    margin: "0 auto",
    padding: "18px",
    border: "2px solid #7F4D4F",
    borderRadius: "8px",
    backgroundColor: "#F9F9F9",
    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  {/* Section: Basic Information */}
  <h3 style={{ gridColumn: "span 2", color: "#7F4D4F", textAlign: "center", fontSize: "16px" }}>Basic Information</h3>
  
  <FormControl>
    <InputLabel>Type</InputLabel>
    <Select value={type} onChange={handleChange} label="Type">
      {["Dog", "Cat", "Fish", "Parrot", "Rabbit"].map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <FormControl>
    <InputLabel>Location</InputLabel>
    <Select value={location} onChange={handleChangeLocation} label="Location">
      {["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Gyeongju", "Jeonju"].map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <input
    type="number"
    name="phone"
    min={0}
    value={phone || ""}
    onChange={handleChangeInput}
    placeholder="Phone number"
    required
    style={{
      gridColumn: "span 2",
      width:250,
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #7F4D4F",
      fontSize: "14px",
    }}
  />

  {/* Section: Details */}
  <h3 style={{ gridColumn: "span 2", color: "#7F4D4F", textAlign: "center", fontSize: "16px" }}>Details</h3>

  <input
    type="number"
    name="kg"
    step={0.01}
    value={kg}
    onChange={handleChangeInput}
    placeholder="Weight (kg)"
    required
    style={{
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #7F4D4F",
      fontSize: "14px",
    }}
  />

  <input
    type="text"
    name="title"
    value={title}
    onChange={handleChangeInput}
    placeholder="Title"
    required
    style={{
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #7F4D4F",
      fontSize: "14px",
    }}
  />

  <FormControl>
    <InputLabel>Color</InputLabel>
    <Select value={color} onChange={handleColorChange} label="Color">
      {["White", "Black", "Brown", "Yellow", "Violet", "Green", "Red", "Grey", "Blue", "Orange"].map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <textarea
    id="desc"
    name="desc"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    rows={3}
    placeholder="Enter description"
    required
    style={{
      gridColumn: "span 2",
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #7F4D4F",
      resize: "none",
      fontSize: "14px",
    }}
  ></textarea>

  <input
    type="number"
    name="price"
    min={0}
    value={price || ""}
    onChange={handleChangeInput}
    placeholder="Price (USD)"
    required
    style={{
      width: "100%",
      padding: "6px",
      borderRadius: "4px",
      border: "1px solid #7F4D4F",
      fontSize: "14px",
    }}
  />

  {/* Section: Images */}
  <h3 style={{ gridColumn: "span 2", color: "#7F4D4F", textAlign: "center", fontSize: "16px" }}>Upload Images</h3>

  {[
    { label: "Main Image", name: "main", file: main },
    { label: "First Detail Image", name: "detail", file: detail },
    { label: "Second Detail Image", name: "detailtwo", file: detailtwo },
    { label: "Third Detail Image", name: "detailthree", file: detailthree },
  ].map(({ label, name, file }) => (
    <div key={name} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label style={{ fontWeight: "bold", color: "#7F4D4F", fontSize: "14px" }}>{label}:</label>
      <input
        type="file"
        onChange={(e) => uploadFile(e, name)}
        accept="image/*"
        style={{
          padding: "3px",
          border: "1px solid #7F4D4F",
          borderRadius: "4px",
          fontSize: "12px",
        }}
      />
      <img
        src={file || "default_image_url"}
        alt={name}
        style={{
          maxWidth: "70px",
          borderRadius: "4px",
          border: "1px solid #7F4D4F",
          marginTop: "4px",
        }}
      />
    </div>
  ))}

  {/* Submit Button */}
  <button
    type="submit"
    style={{
      gridColumn: "span 2",
      padding: "10px",
      backgroundColor: "#7F4D4F",
      color: "#fff",
      fontSize: "14px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "0.3s",
    }}
  >
    {selectId ? "Edit" : "Add"}
  </button>
</form>





        <h1>Your Pet</h1>
        <div   style={{ height: '100%',display: 'grid',gridTemplateAreas: `"a a a"`,gap: '20px'}}>

      {products.map((todo) => (
 <div
 key={todo._id}
 style={{
   border: "1px solid #ddd",
   borderRadius: "12px",
   padding: "16px",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   textAlign: "center",
   maxWidth: "420px",
   width: "100%",
   backgroundColor: "#f9f9f9",
   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
   margin: "10px auto",
 }}
>
 <h2>{todo.title}</h2>


 <div style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
 <div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
  <h5>📞 Phone:</h5>
  <h5>{todo.phone}</h5>
 </div>
  <div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
  <h5>📌 Type: </h5>
  <h5>{todo.type}</h5>
  </div>
  <div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
    <h5>
    📍 Location: 
    </h5>
  <h5>{todo.location}</h5>
  </div>
  <div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
  <h5>💰 Price: </h5>
  <h5>${todo.price}</h5>
  </div>
 <div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
 <h5>🎨 Color: </h5>
 <h5>{todo.color}</h5>
 </div>
<div style={{display:'flex',justifyContent:'space-around', marginBottom: "10px"}}>
<h5>⚖️ Size: </h5>
<h5>{todo.kg}kg</h5>
</div>
   <h5>📝 {todo.desc}</h5>
 </div>
 
 {todo.main && (
   <img
     src={todo.main}
     alt="Main-Img"
     style={{
       width: "250px",
       height: "250px",
       borderRadius: "8px",
       objectFit: "cover",
       marginBottom: "8px",
     }}
   />
 )}
 
 <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "12px" }}>
   {todo.detail && <img src={todo.detail} alt="Detail-1" style={{ width: "80px", height: "80px", borderRadius: "6px", objectFit: "cover" }} />}
   {todo.detailtwo && <img src={todo.detailtwo} alt="Detail-2" style={{ width: "80px", height: "80px", borderRadius: "6px", objectFit: "cover" }} />}
   {todo.detailthree && <img src={todo.detailthree} alt="Detail-3" style={{ width: "80px", height: "80px", borderRadius: "6px", objectFit: "cover" }} />}
 </div>
 
 <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
   <button
     onClick={() => {
       setSelectId(todo._id);
       setTitle(todo.title);
       setDesc(todo.desc);
       setMain(todo.main);
       setDetail(todo.detail);
       setDetailtwo(todo.detailtwo);
       setDetailthree(todo.detailthree);
     }}
     style={{
       padding: "8px 16px",
       backgroundColor: "#3498db",
       color: "white",
       border: "none",
       borderRadius: "6px",
       cursor: "pointer",
       fontSize: "14px",
     }}
   >
     Edit
   </button>
   <button
     onClick={() => deleteTodo(todo._id)}
     style={{
       padding: "8px 16px",
       backgroundColor: "#e74c3c",
       color: "white",
       border: "none",
       borderRadius: "6px",
       cursor: "pointer",
       fontSize: "14px",
     }}
   >
     Delete
   </button>
 </div>
</div>

      ))}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;



