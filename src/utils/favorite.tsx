import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";
import { baseApi } from "./api.constants";
import { toast } from "react-toastify"; // react-toastify'dan toast'ni import qilish
import "react-toastify/dist/ReactToastify.css"; // Style faylini import qilish

// O'z URL'ingizni kiriting
interface FavoriteCheckboxProps {
  todo_id: string;
}


const FavoriteCheckbox: React.FC<FavoriteCheckboxProps> = ({ todo_id }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        // Like holatini serverdan olish
        const { data } = await axios.get(
          `${baseApi}/todo/like-status/${todo_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsLiked(data.success && data.isLiked);
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };

    fetchLikeStatus();
  }, [todo_id]);

  const handleLikeToggle = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to like items.");
      return;
    }

    try {
      if (isLiked) {
        // Agar like bosilgan bo‘lsa, unlike qilamiz
        await axios.post(
          `${baseApi}/todo/like-delete`,
          { todo_id },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Success toast
        toast.success("Successfully removed from favorites!");
      } else {
        // Agar like bosilmagan bo‘lsa, like qo‘shamiz
        await axios.post(
          `${baseApi}/todo/like`,
          { todo_id },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Success toast
        toast.success("Successfully added to favorites!");
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error updating like:", error);
      toast.error("An error occurred while updating like.");
    }
  };

  return (
    <>
      <Checkbox
        checked={isLiked}
        onChange={handleLikeToggle}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite sx={{ color: "red" }} />}
      />
      {/* Toast containerini sahifaning yuqori qismiga qo'shamiz */}
    </>
  );
};

export default FavoriteCheckbox;



