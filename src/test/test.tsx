import axios from "axios";
import { baseApi } from "../utils/api.constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
const TestComponent = () => {
  const [products, setProducts] = useState<Todo[]>([]);const getallTodo = async (search: string) => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`, {
        params: { search }
      });
  
      if (data.success) {
        const randomData = data.data.sort(() => Math.random() - 0.5).slice(0, 5); // ✅ Random 5 ta olamiz
        setProducts(randomData);
      }
    } catch (error) {
      toast.error("Error fetching todos.");
    }
  };
  useEffect(() => {
    getallTodo("");
  }, []);
  return (

    <div>
      {products.map((value: Todo, index: number)=>(
        <div key={index}>
          <p>{value.title}</p>
        </div>
      ))}
    </div>
  )
}

export default TestComponent