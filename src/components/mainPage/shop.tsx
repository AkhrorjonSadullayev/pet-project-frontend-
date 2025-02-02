import { Link } from 'react-router-dom'
import { PetDog } from '../../mock/Dogs.data'
import '../../styles/shop.style'
import { ShopMainContainer } from '../../styles/shop.style'
import underline from '../../assets/UnderLine.svg'
import { PetCat } from '../../mock/Cats.data'
import { DogFoodProducts } from '../../mock/dogFood.data'
import { CatFoodProducts } from '../../mock/catFood.data'
import { FishFoodProducts } from '../../mock/fishFood.data'
import { PetoysProducts } from '../../mock/petToys.data'
import { ParrotProducts } from '../../mock/parrot.data'
import { RabbitFoodProducts } from '../../mock/rabbitFood.data'
import { AccessoriesProducts } from '../../mock/accessories.data'
import { SmallPetFoodProducts } from '../../mock/small-pet.data'
const ShopComponent = () => {
    const DogPet = PetDog.PetDogList
    const CatPet = PetCat.PetCatList
    const DogFood = DogFoodProducts.DogFoodProductList
    const CatFood = CatFoodProducts.CatFoodProductList
    const FishFood = FishFoodProducts.FishFoodProductList
    const PetToys = PetoysProducts.PetToysProductList
    const ParrotFood = ParrotProducts.ParrotProductList
    const RabbitFood = RabbitFoodProducts.RabbitFoodProductList
    const AccessoryPet = AccessoriesProducts.AccessoriesProductList
    const SmallPetFood = SmallPetFoodProducts.SmallPetFoodProductList
  return (
    <ShopMainContainer>
        <div className='product-name'> 
          <h1>Dogs</h1>
          <img src={underline} alt="underline-img" />
         </div>
        <div className='main-con'>
        <div className="grid">
          {DogPet.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/dogs/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.dog.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.dog.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.dog.OriginalPrice}</p>
                      <p>${item.dog.Price}</p>
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
          {CatPet.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/cats/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.cat.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.cat.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.cat.OriginalPrice}</p>
                      <p>${item.cat.Price}</p>
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
          {DogFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/dog-food/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.DogFood.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.DogFood.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.DogFood.OriginalPrice}</p>
                      <p>${item.DogFood.Price}</p>
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
          {CatFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/cat-food/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.Catfood.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.Catfood.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.Catfood.OriginalPrice}</p>
                      <p>${item.Catfood.Price}</p>
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
          {FishFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/fish-food/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.FishFood.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.FishFood.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.FishFood.OriginalPrice}</p>
                      <p>${item.FishFood.Price}</p>
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
          {PetToys.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/pet-toys/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.PetToys.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.PetToys.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.PetToys.OriginalPrice}</p>
                      <p>${item.PetToys.Price}</p>
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
          {ParrotFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/parrot-food/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.ParrotFood.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.ParrotFood.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.ParrotFood.OriginalPrice}</p>
                      <p>${item.ParrotFood.Price}</p>
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
          {RabbitFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/rabbit-food/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.RabbitFood.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.RabbitFood.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.RabbitFood.OriginalPrice}</p>
                      <p>${item.RabbitFood.Price}</p>
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
          {AccessoryPet.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/accessories/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.Accessories.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.Accessories.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.Accessories.OriginalPrice}</p>
                      <p>${item.Accessories.Price}</p>
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
          {SmallPetFood.map((item) => (
            <div key={item.id} >
              <div key={item.id} className="product-img-con">
                <Link
                  to={`/pet-food/small-pet/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img className="img-class" src={item.SmallPet.image} alt="product-img" />
                  <div className="price">
                    <p className="name">{item.SmallPet.name}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <p className="decoration">${item.SmallPet.OriginalPrice}</p>
                      <p>${item.SmallPet.Price}</p>
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

