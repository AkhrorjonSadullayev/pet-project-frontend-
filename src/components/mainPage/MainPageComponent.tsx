import '../../styles/MainPageStyle'
import { FirstCon, MainPageCon  } from '../../styles/MainPageStyle'
import dogFood from '../..//assets/dogFoodIcon.svg'
import nextIcon from '../../assets/nextIcon.svg'
import catFood from '../../assets/catIcon.svg'
import FishFood from '../../assets/fishIcon.svg'
import PetToy from '../../assets/Pettoys.svg'
import perrot from '../../assets/parrotIcion.svg'
import rabbit from '../../assets/rabbitIcon.svg'
import accessories from '../../assets/accessoriesIcon.svg'
import smallPet from '../../assets/smallPetIcon.svg'
import '../../index.css'
import underline from '../../assets/UnderLine.svg'
import MultiCarousel from '../../mui/carousel'
import shape from '../../assets/Shape.svg'
import dogcat from '../../assets/dog-cat.jpg'
import  CarouselComponent from '../../mui/carouselData'
import { DataNews } from '../../mock/carousel.datanews'
import SeconConComponent from './seconCon'
import { NewPostedProducts } from '../../mock/postData'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DogBestComponent from './types/dogBest'
import CatBestComponent from './types/catBest'
import AccoriesBestComponent from './types/accessories'
import FishBestComponent from './types/fishBest'
import RabbitBestComponent from './types/rabbitBest'
import ParrotbestComponent from './types/parrotBest'
import PetToyBestComponent from './types/petToy'
import SmallPetBestComponent from './types/smallPetBest'
import axios from 'axios'
import { baseApi } from '../../utils/api.constants'
import { toast } from 'react-toastify'

type ActiveState = "Dog" | "Cat" | "Accessories" | "Fish" | "Parrot" | "PetToy" | "Rabbit" | "SmallPet";

// Mock Components
const DogBest = () => <DogBestComponent/>;
const CatBest = () => <CatBestComponent/>;
const AccessoriesBest = () => <AccoriesBestComponent/>;
const FishBest = () => <FishBestComponent/>;
const ParrotBest = () => <ParrotbestComponent/>;
const PetToyBest = () => <PetToyBestComponent/>;
const RabbitBest = () => <RabbitBestComponent/>;
const SmallPetBest = () => <SmallPetBestComponent/>;
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
 const MainPageComponent = () => {
  const [active, setActive] = useState<ActiveState>("Dog");

  const componentsMap: Record<ActiveState, JSX.Element> = {
    Dog: <DogBest />,
    Cat: <CatBest />,
    Accessories: <AccessoriesBest />,
    Fish: <FishBest />,
    Parrot: <ParrotBest />,
    PetToy: <PetToyBest />,
    Rabbit: <RabbitBest />,
    SmallPet: <SmallPetBest />,
  };
  const [products, setProducts] = useState<Todo[]>([]);const getallTodo = async (search: string) => {
    try {
      const { data } = await axios.get(`${baseApi}/todo/get-all`, {
        params: { search }
      });
  
      if (data.success) {
        const randomData = data.data.sort(() => Math.random() - 0.8).slice(0, 8); // ✅ Random 5 ta olamiz
        setProducts(randomData);
      }
    } catch (error) {
      toast.error("Error fetching todos.");
    }
  };
  useEffect(() => {
    getallTodo("");
  }, []);
  const [ loading,setLoading ] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])
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
  return (
    <MainPageCon>
      {/* main container start */}
          <FirstCon>
          <div className='FirstCon-1'>
  
            <div className='left-side-first'>
  {/* Dog food container start */}
              <div onClick={() => setActive("Dog")} className='dog-food-con'>
                <div className='dog-icon'>
                <img src={dogFood} alt="dog-img" />
                <p>Dog Food</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Dog food container end */}
  
  {/* Cat food container start */}

              <div onClick={() => setActive("Cat")}className='cat-food-con'>
                <div className='dog-icon'>
                <img src={catFood} alt="cat-img" />
                <p>Cat Food</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>

  {/* Cat food container end */}
  
  {/* Fish food container start */}
              <div onClick={() => setActive("Fish")} className='Fish-food-con'>
                <div className='dog-icon'>
                <img src={FishFood} alt="fish-img" />
                <p>Fish</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Fish food container end */}
  
  {/* Pet toy container start */}
              <div onClick={() => setActive("PetToy")} className='toy-con'>
                <div className='dog-icon'>
                <img src={PetToy} alt="toy-img" />
                <p>Pet Toy</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Pet toy container end */}
  
  {/* Parrot food container start */}
                <div onClick={() => setActive("Parrot")} className='parrot-food-con'>
                <div className='dog-icon'>
                <img src={perrot} alt="parrot-img" />
                <p>Parrot</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Parrot food container end */}
  
  {/* Rabbit food container start */}
                <div onClick={() => setActive("Rabbit")} className='rabbit-food-con'>
                <div className='dog-icon'>
                <img src={rabbit} alt="rabbit-img" />
                <p>Rabbit</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Rabbit food container end */} 
  
  {/* Accessories container start */}
                <div onClick={() => setActive("Accessories")} className='Accessories-con'>
                <div className='dog-icon'>
                <img src={accessories} alt="parrot-img" />
                <p>Accessories</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Accessories container start */}
  
  {/* Small Pet container start */}
                <div onClick={() => setActive("SmallPet")} className='small-pet-con'>
                <div className='dog-icon'>
                <img src={smallPet} alt="small-pet-img" />
                <p>Small Pet</p>
                </div>
                <div>
                  <img src={nextIcon} alt="next-img" style={{paddingRight:'16px'}}/>
                </div>
              </div>
  {/* Small Pet container end */}
            </div>
  
            <div className='right-side-first'>
  
  {/* first left con start */}
         <div>{componentsMap[active]}</div>
  {/* first left con end */}
  
  {/* second left con end */}
  
            </div>
  
          </div>
  
          <div className='delete'> 
            <h3>Special Products</h3>
            <h1>Trending Products</h1>
            <img src={underline} alt="underline-img" />
          </div>
  
    <div className='First-grid'>
      <div className='grid-con'>
      {products.map((value: Todo, index: number)=>(
            <Link
            style={{ textDecoration: "none" }}
            to={`/${typeRoutes[value.type] || "fish-food"}/${value._id}`}
          >
              <div className='product-img-con' key={index}>
                  <img className='img' src={value.main} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{value.title}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${value.price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
      </div>
  </div>
  
         <div className='delete-new'> 
            <h3>Special Products</h3>
            <h1>New Arrivals product</h1>
            <img src={underline} alt="underline-img" />
          </div>
  
          <MultiCarousel />
  
        <div style={{display:'flex',justifyContent:'center'}}>
          <div className='sale'>
            <div className='sale-left'>
            <h1>Get 30% off</h1>
            <p>To brightten a loved one's day</p>
            <button>SHOP NOW</button>
            </div>
            <img src={shape} alt="shape-img" />
            <div style={{marginTop:"-5px"}}>
              <img src={dogcat} alt="dog-cat-img" className='dog-cat-con' />
            </div>
          </div>
        </div>
  
        <CarouselComponent ArrivalList={DataNews.ArrivalList}/>
        </FirstCon>
         
         <SeconConComponent  PostedList={NewPostedProducts.PostedList}/>
  
    
      {/* main container end */}
    </MainPageCon>
  )
}

export default MainPageComponent
