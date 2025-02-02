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
import { DogFoodProducts } from '../../mock/dogFood.data'
import { CatFoodProducts } from '../../mock/catFood.data'
import { AccessoriesProducts } from '../../mock/accessories.data'
import { RabbitFoodProducts } from '../../mock/rabbitFood.data'
import { PetDog } from '../../mock/Dogs.data'
import { PetCat } from '../../mock/Cats.data'
import { useEffect, useState } from 'react'
import DogBestComponent from './types/dogBest'
import CatBestComponent from './types/catBest'
import AccoriesBestComponent from './types/accessories'
import FishBestComponent from './types/fishBest'
import RabbitBestComponent from './types/rabbitBest'
import ParrotbestComponent from './types/parrotBest'
import PetToyBestComponent from './types/petToy'
import SmallPetBestComponent from './types/smallPetBest'

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
  const trendingCat = PetCat.PetCatList.filter(trendingCat =>{
    return trendingCat.id === 16 || trendingCat.id === 9
  })
  const trendingDog = PetDog.PetDogList.filter(trendingDog =>{
    return trendingDog.id === 17
  })
  const trendingDogFood = DogFoodProducts.DogFoodProductList.filter(trendingDogFood =>{
    return trendingDogFood.id === 4 || trendingDogFood.id === 11 
  })
  const trendingCatFood = CatFoodProducts.CatFoodProductList.filter(trendingCatFood => {
    return trendingCatFood.id === 20 
  })
  const trendingAcccessories = AccessoriesProducts.AccessoriesProductList.filter(trendingAcccessories =>{
    return trendingAcccessories.id === 7 
  })
  const trendingRabbit = RabbitFoodProducts.RabbitFoodProductList.filter(trendingRabbit=>{
    return trendingRabbit.id === 5
  })
  const [ loading,setLoading ] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])
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
         {trendingDog.map((list) => (
             <Link key={list.id} to={`/dogs/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img className='img' src={list.dog.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.dog.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.dog.Price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
          {trendingDogFood.map((list) => (
                       <Link key={list.id} to={`/pet-food/dog-food/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img   className='img' src={list.DogFood.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.DogFood.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.DogFood.Price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
         {trendingCatFood.map((list) => (
              <Link key={list.id} to={`/pet-food/cat-food/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img  className='img' src={list.Catfood.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.Catfood.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.Catfood.Price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
           {trendingAcccessories.map((list) => (
              <Link key={list.id} to={`/pet-food/accessories/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img  className='img' src={list.Accessories.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.Accessories.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.Accessories.Price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
        {trendingRabbit.map((list) => (
             <Link key={list.id} to={`/pet-food/rabbit-food/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img  className='img' src={list.RabbitFood.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.RabbitFood.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.RabbitFood.Price}</p>
                      </div>
                  </div>
              </div>
              </Link>
          ))}
        {trendingCat.map((list) => (
            <Link key={list.id} to={`/cats/${list.id}`} style={{ textDecoration: 'none' }}>
              <div className='product-img-con' key={list.id}>
                  <img className='img' src={list.cat.image} alt="product-img" />
                  <div className='price'>
                      <p className='name'>{list.cat.name}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                          <p>${list.cat.Price}</p>
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
