import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api.constants";
import { CartContainer } from "./styles/cart.style";
import underline from "../../assets/UnderLine.svg";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
interface Todo {
  _id: string;
  type: string;
  location: string;
  title: string;
  desc: string;
  price: number;
  color: string;
  main: string;
  detail: string;
  detailtwo: string;
  detailthree: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CartPage = () => {
  const [cartData, setCartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Todo[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  
  const handleOpen = (itemId: string) => {
    setOpen(itemId); // Modalni ochish uchun kerakli item id'sini o'rnatish
  };

  const handleClose = () => {
    setOpen(null); // Modalni yopish
  };

  const token = localStorage.getItem("token"); // Foydalanuvchi tokeni

  const getallTodo = async () => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`);
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      toast.error("Error fetching todos.");
    }
  };

  // Savatdagi ma’lumotlarni olish
  const fetchCart = async () => {
    if (!token) {
      toast.error("Please log in to view your cart.");
      return;
    }
    try {
      const { data } = await axios.get(`${baseApi}/todo/order-get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartData(data.my_cart);
    } catch (error: any) {
      toast.error(error.response?.data?.msg || "Failed to fetch cart data");
    } finally {
      setLoading(false);
    }
  };

  // Mahsulotni savatga qo‘shish (increment va decrement uchun ham ishlatiladi)
  const updateCartQuantity = async (
    todoId: string,
    quantity: number,
    price: number
  ) => {
    if (!token) {
      toast.error("Please log in to update the cart.");
      return;
    }
    try {
      await axios.post(
        `${baseApi}/todo/order`, // addToCart endpoint
        { todo_id: todoId, quantity, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchCart(); // Savat ma’lumotlarini qayta olish
    } catch (error: any) {
      toast.error(
        error.response?.data?.msg || "Failed to update item quantity"
      );
    }
  };

  // O'chirish funksiyasi
  const deleteItemFromCart = async (todo_id: string, cartId: string) => {
    if (!token) {
      toast.error("Please log in to delete an item.");
      return;
    }
  
    if (!cartId) {
      toast.error("Cart ID is missing.");
      return;
    }
  
    try {
      console.log("cartId:", cartId); // `cartId`ni tekshirib ko'ring
      console.log("todo_id:", todo_id); // `todo_id`ni tekshirib ko'ring
  
      const { data } = await axios.post(
        `${baseApi}/todo/order-delete/${cartId}`, // `cartId` URLda uzatiladi
        { todo_id }, // `todo_id` bodyga uzatiladi
        {
          headers: { Authorization: `Bearer ${token}` }, // Headerga authorization qo'shiladi
        }
      );
  
      if (data.success) {
        toast.success("Product deleted successfully!");
        fetchCart(); // Cartni qayta yuklash
      } else {
        toast.error(data.msg || "Error deleting the product.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg || "Failed to delete the item.");
    }
  };
  

  useEffect(() => {
    fetchCart(); // Sahifa yuklanganda savat ma’lumotlarini olish
    getallTodo();
  }, []);

  if (loading) {
    return <p>Loading cart...</p>;
  }

  if (!cartData || !cartData.todo || cartData.todo.length === 0) {
    return (
      <CartContainer>
        <div className="cart-back" style={{ marginBottom: "-30px" }}>
          <h1>Your Cart is Empty...</h1>
        </div>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <div className="cart-back">
        <h1>Your Cart</h1>
      </div>
      <div className="title">
        <h1>Your Cart Items</h1>
        <img src={underline} alt="underline-svg" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <table style={{ width: "100%", maxWidth: "1300px" }}>
          <thead>
            <tr className="cart-tr">
              <th>
                <h5>Name</h5>
              </th>
              <th>
                <h5>Price</h5>
              </th>
              <th>
                <h5>Image</h5>
              </th>
              <th>
                <h5>Qty</h5>
              </th>
              <th>
                <h5>Delete</h5>
              </th>
            </tr>
          </thead>
          <tbody>
  {cartData.todo.map((item: any, index: number) => (
    <tr key={item._id} className="cart-tr-body">
      <td>
        <h4>{item.title}</h4>
      </td>
      <td>
        <h4>${item.price}</h4>
      </td>
      <td>
        <img
          style={{ width: "70px", height: "70px" }}
          src={item.main}
          alt="product-img"
        />
      </td>
      <td>
        <button
          onClick={() =>
            updateCartQuantity(item.product, -1, item.price)
          } // Kamaytirish
          disabled={item.quantity <= 1}
          style={{
            padding: "5px 10px",
            backgroundColor: "#7F4D4F",
            fontWeight: "bold",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: item.quantity > 1 ? "pointer" : "not-allowed",
          }}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            updateCartQuantity(item.product, 1, item.price)
          } // Oshirish
          style={{
            padding: "5px 10px",
            backgroundColor: "#7F4D4F",
            fontWeight: "bold",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </td>
      <td>
      <button
      className="open"
      onClick={() => {
        console.log("Item ID:", item._id);
        console.log("Cart ID:", cartData?._id);
        if (cartData?._id) {
          handleOpen(item._id); // Open the modal when the button is clicked
        } else {
          toast.error("Cart ID is not available.");
        }
      }}
    >
      Delete
    </button>
<Modal
        open={open === item._id} // Only open modal for selected item
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            border: "2px solid brown",
            boxShadow: 24,
            p: 4,
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <div>
            <h3>Are you sure to delete this product?</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                onClick={() => deleteItemFromCart(item._id, cartData._id)}
                style={{
                  width: "80px",
                  height: "40px",
                  backgroundColor: "#c0392b",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                YES
              </button>
              <button
                onClick={handleClose}
                style={{
                  width: "80px",
                  height: "40px",
                  backgroundColor: "#1e8449",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                NO
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <div className="total">
          <h3>Total Amount: ${cartData.totalAmount}</h3>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartPage;




// const deleteItemFromCart = async (todo_id: string, cartId: string) => {
//   const token = localStorage.getItem("token");

//   try {
//     const { data } = await axios.delete(
//       `${baseApi}/todo/order-delete/${cartId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         data: {
//           todo_id,
//         },
//       }
//     );

//     if (data.success) {
//       setProducts((prevProducts) => prevProducts.filter((data) => data._id !== cartId));
//       toast.success("Product deleted successfully!");
//       console.log("Mahsulot muvaffaqiyatli o'chirildi");
//       // Optionally, fetch the updated cart here
//     } else {
//       console.log("Mahsulotni o'chirishda xato yuz berdi: ", data.msg);
//     }
//   } catch (error: any) {
//     console.error(
//       "Mahsulotni o'chirishda xato:",
//       error.response?.data || error.message
//     );
//   }
// };
