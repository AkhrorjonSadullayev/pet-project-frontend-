import { Link } from 'react-router-dom'
import '../../styles/shop.style'
import { ShopMainContainer } from '../../styles/shop.style'
import underline from '../../assets/UnderLine.svg'
import axios from 'axios'
import { baseApi } from '../../utils/api.constants'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
interface Todo {
  _id: string;
  phone: number;
  type: string;
  location: string;
  title: string;
  desc: string;
  price: number;
  color: string;
  main: string;
  detail: string;
  kg: number;
  detailtwo: string;
  detailthree: string;
}
const ShopComponent = () => {
  const [products, setProducts] = useState<Todo[]>([]);
  const getallTodo = async (search: string) => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`, {
        params: { search },
      });
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      toast.error("Error fetching todos.");
    }
  };

  useEffect(() => {
    getallTodo("");
  }, []);

  const dogs = products.filter((item) => item.type === "Dog")
  const cats = products.filter((item) => item.type === "Cat")
  const fish = products.filter((item) => item.type === "Fish")
  const parrot = products.filter((item) => item.type === "Parrot")
  const rabbit = products.filter((item) => item.type === "Rabbit")
  const DogFood = products.filter((item) => item.type === "Dog Food")
  const CatFood = products.filter((item) => item.type === "Cat Food")
  const FishFood = products.filter((item) => item.type === "Fish Food")
  const PetToys = products.filter((item) => item.type === "Pet Toys")
  const ParrotFood = products.filter((item) => item.type === "Parrot Food")
  const RabbitFood = products.filter((item) => item.type === "Rabbit Food")
  const Accessories = products.filter((item) => item.type === "Accessories")
  const SmallPet = products.filter((item) => item.type === "Small Pet Food")
  return (
    <ShopMainContainer>
        <div className='product-name'> 
          <h1>Dogs</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {dogs.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/dogs/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Cats</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {cats.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/cats/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Rabbits</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {rabbit.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/others/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Parrots</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {parrot.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/others/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Fish</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {fish.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/others/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Dog Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {DogFood.map((item,index) => (
            <div key={index}>
              <div key={index} className="product-img-con">
                <Link
                  to={`/dog-food/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Cat Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {CatFood.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/cat-food/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Fish Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {FishFood.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/${
                    item.type === "Fish" ? "others" : "fish-food"
                  }/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Pet Toys</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {PetToys.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/pet-toys/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Parrot Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {ParrotFood.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/${
                    item.type === "Parrot" ? "others" : "parrot-food"
                  }/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Rabbit Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {RabbitFood.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/${
                    item.type === "Rabbit" ? "others" : "rabbit-food"
                  }/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Accessories</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {Accessories.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/accessories/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='product-name'> 
          <h1>Small Pet Food</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {SmallPet.map((item,index) => (
            <div key={index} >
              <div key={index} className="product-img-con">
                <Link
                  to={`/pet-food/small-pet/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.main} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.title}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    </ShopMainContainer>
  )
}

export default ShopComponent

