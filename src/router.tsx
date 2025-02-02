import { Route, Routes, useLocation } from "react-router-dom";
import MainPageComponent from "./components/mainPage/MainPageComponent";
import DogFoodComponent from "./components/products-category/dog-food";
import CatFoodComponent from "./components/products-category/cat-food";
import FishFoodComponent from "./components/products-category/fish-food";
import PetToysComponent from "./components/products-category/pet-toys";
import ParrotComponent from "./components/products-category/parrot";
import RabbitFoodComponent from "./components/products-category/rabbit-food";
import AccessoriesComponent from "./components/products-category/accessories";
import SmallPetComponent from "./components/products-category/small-pet";
import DogFoodDetail from "./components/Details/DogFood.detail";
import CatFoodDetail from "./components/Details/CatFood.detail";
import FishFoodDetail from "./components/Details/FishFood.detail";
import PetToysDetail from "./components/Details/PetToys.details";
import ParrotFoodDetail from "./components/Details/ParrotFood.Detail";
import RabbitFoodDetail from "./components/Details/rabbitFood.detail";
import AccessoriesDetail from "./components/Details/Accessories.detail";
import SmallPetFoodDetail from "./components/Details/smallPet.Detail";
import DogsComponent from "./components/mainPage/dogs";
import DogDetail from "./components/mainPage/detail/dogs.detail";
import CatsComponent from "./components/mainPage/cats";
import CatDetail from "./components/mainPage/detail/cats.detail";
import ShopComponent from "./components/mainPage/shop";
import SignUp from "./components/sign/signUp";
import ScrollToTop from "./components/error/scrollTop";
import Navbar from "./navbar/navbar";
import FooterComponent from "./footer/footer";
import SignIn from "./components/sign/signIn";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import AboutUsComponent from "./components/mainPage/aboutUs";
import NotFoundComponent from "./components/error/notFound";
import ContactComponent from "./components/mainPage/contact";
import Profile from "./components/sign/profile";
import AddProduct from "././components/addTodo/add";
import ForgotPasswordComponent from "./components/sign/forgot.password";
import OtpVerification from "./components/sign/otp";
import ResetPassword from "./components/sign/resetPassword";
import CartPage from "./components/Details/cart-component";
import OthersDetail from "./components/mainPage/detail/others";
import FavoritesComponent from "./components/Details/favorites";
import TestComponent from "./test/test";



const RouterComponent = () => {
    const location = useLocation();
    const navbarContainer = location.pathname === '/sign-up' || location.pathname === '/login' || 
    location.pathname === '/forgot' || location.pathname === "/otp" || location.pathname === "/reset" || location.pathname === "*";

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000); 
      return () => clearTimeout(timer); 
    }, [location]);
  return (
   
    <>
      {loading ? (
        // Loader is shown when `loading` is true
        <div className="loader-container">
          <PacmanLoader
            color={"#7F4D4F"}
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {!navbarContainer && <Navbar />}
          <ScrollToTop />
          <Routes>
          <Route path="*" element={<NotFoundComponent/>} />
             <Route path="/sign-up" element={<SignUp/>} />
             <Route path="/otp" element={<OtpVerification/>} />
             <Route path="/login" element={<SignIn/>} />
             <Route path="/profile" element={<Profile/>} />
             <Route path="/forgot" element={<ForgotPasswordComponent/>} />
             <Route path="/reset" element={<ResetPassword/>} />

              <Route path="/" element={<MainPageComponent/>} />
  
              <Route path="/shop" element={<ShopComponent />}/>
              
              <Route path="/about-us" element={<AboutUsComponent />}/>

              <Route path="/contact" element={<ContactComponent />}/>
  
              <Route path="/dogs" element={<DogsComponent  />} />
              <Route path="/dogs/:id" element={<DogDetail  />} />
  
              <Route path="/cats" element={<CatsComponent  />} />
              <Route path="/cats/:id" element={<CatDetail/>} />
         
              <Route path="/dog-food" element={<DogFoodComponent />}/>
              <Route path="/dog-food/:id" element={<DogFoodDetail />}/>
         
              <Route path="/cat-food" element={<CatFoodComponent/>}/>
              <Route path="/cat-food/:id" element={<CatFoodDetail />}/>
  
              <Route path="/fish-food" element={<FishFoodComponent />}/>
              <Route path="/fish-food/:id" element={<FishFoodDetail />}/>
  
              <Route path="/pet-toys" element={<PetToysComponent />}/>
              <Route path="/pet-toys/:id" element={<PetToysDetail />}/>
  
              <Route path="/parrot-food" element={<ParrotComponent />}/>
              <Route path="/parrot-food/:id" element={<ParrotFoodDetail />}/>
  
              <Route path="/rabbit-food" element={<RabbitFoodComponent  />}/>
              <Route path="/rabbit-food/:id" element={<RabbitFoodDetail/>}/>
  
              <Route path="/accessories" element={<AccessoriesComponent />}/>
              <Route path="/accessories/:id" element={<AccessoriesDetail/>}/>
  
              <Route path="/small-pet" element={<SmallPetComponent />}/>
              <Route path="/small-pet/:id" element={<SmallPetFoodDetail/>}/>
              <Route path="/others/:id" element={<OthersDetail/>}/>
              <Route path="/add"  element={<AddProduct/>}/>
              <Route path="/test" element={<TestComponent/>} />
  
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/favorites" element={<FavoritesComponent/>}/>
           </Routes> 
           <ToastContainer />
          {/* Render Footer if not on restricted routes */}
          {!navbarContainer && <FooterComponent /> }
        </>
      )}
    </>
  );
};
export default RouterComponent;