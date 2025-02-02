import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseApi } from "../../utils/api.constants";
import { toast } from "react-toastify";
import { MainContainer } from "./styles/favorites.style";
import { Link } from "react-router-dom";
import FavoriteCheckbox from "../../utils/favorite";

// Define the Todo interface
interface Todo {
  _id: string;
  title: string;
  main: string;
  price: number;
  type: string;
  isLiked?: boolean;
}

const FavoritesComponent = () => {
  const [likes, setLikes] = useState<{ todo: Todo[] }[]>([]);

  useEffect(() => {
    const fetchLikes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to see your liked todos.");
        return;
      }

      try {
        const { data } = await axios.get(`${baseApi}/todo/like-get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data.success && Array.isArray(data.myLikes)) {
          setLikes(data.myLikes);
        } else {
          toast.error("No liked todos found.");
        }
      } catch (error) {
        console.error("Error fetching liked todos:", error);
        toast.error("Error fetching liked todos.");
      }
    };

    fetchLikes();
  }, []);

  const typeRoutes: Record<string, string> = {
    "Dog Food": "dog-food",
    "Cat Food": "cat-food",
    "Parrot Food": "parrot-food",
    "Rabbit Food": "rabbit-food",
    Accessories: "accessories",
    "Pet Toys": "pet-toys",
    "Small Pet Food": "small-pet",
    Dog: "dogs",
    Cat: "cats",
    Fish: "others",
    Rabbit: "others",
    Parrot: "others",
  };
  // Handle like deletion
  const handleLikeDelete = async (todoId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You must be logged in to delete likes.");
        return;
      }
  
      // Send a request to the backend to delete the like for the specific todo
      const { data } = await axios.post(
        `${baseApi}/todo/like-delete-one`, // Backend endpoint to delete a specific like
        { todoId }, // Send the todo ID to delete
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (data.success) {
        // If the deletion was successful, update the state
        setLikes((prevLikes) => {
          const updatedLikes = prevLikes
            .map((like) => {
              const filteredTodos = like.todo.filter((todo) => todo._id !== todoId);
              return {
                ...like,
                todo: filteredTodos,
              };
            })
            .filter((like) => like.todo.length > 0); // Remove empty likes
  
          return updatedLikes;
        });
        
        
      } else {
        toast.error("Error removing like.");
      }
    } catch (error) {
      console.error("Error removing like:", error);
      toast.error("Error removing like.");
    }
  };
  
  return (
    <MainContainer>
      <div className="favorites-back">
        <h1>Your Liked Products!</h1>
        <p style={{ fontSize: "50px" }}> ❤️</p>
      </div>
      <div className="favorites-con">
        <div className="grid">
          {likes.length === 0 ? (
            <p>You don't have favorite products</p>
          ) : (
            likes.map((like, index) => (
              <div
                key={index}
                className="grid"
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  margin: "10px",
                }}
              >
{like.todo.map((todo) => (
  <div className="product-img-con" key={todo._id}>
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* ❤️ Like Button (Outside <Link>) */}
      <div onClick={() => handleLikeDelete(todo._id)} style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "red",
          position: "absolute",
          top: "10px",
          right: "30px",
          zIndex: 2, // Ensure it stays above the image
        }}>
    <FavoriteCheckbox  todo_id={todo._id} />
      </div>

      {/* Clickable Product Link */}
      <Link
        style={{ textDecoration: "none" }}
        to={`/${typeRoutes[todo.type] || "fish-food"}/${todo._id}`}
      >
        <img
          src={todo.main}
          alt="img"
          className="img-class"
          style={{
            width: "210px",
            height: "210px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </Link>
    </div>

    {/* Product Info */}
    <div className="price">
      <p className="name">{todo.title}</p>
      <p>Price: ${todo.price}</p>
    </div>
  </div>
))}

              </div>
            ))
          )}
        </div>
      </div>
    </MainContainer>
  );
};

export default FavoritesComponent;
