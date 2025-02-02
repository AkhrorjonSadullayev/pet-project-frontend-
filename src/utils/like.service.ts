import axios from "axios";
import { baseApi } from "./api.constants";
// Replace with your actual API URL

export const addLike = async (todo_id: string) => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  return axios.post(
    `${baseApi}/todo/like`,
    { todo_id },
    {
      headers: {
        Authorization: `Bearer ${token}`, // Attach token for authentication
      },
    }
  );
};

export const deleteLike = async (todo_id: string) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${baseApi}/todo/like-delete`,
    { todo_id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
