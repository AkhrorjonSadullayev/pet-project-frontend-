import '../../styles/aboutUs.style'
import { AboutContainer } from "../../styles/aboutUs.style"
import big from '../../assets/big-img.jpg'
import small from '../../assets/small-img.png'
import scribble from '../../assets/scribble.svg'
import line from '../../assets/UnderLine.svg'
import done from '../../assets/done.svg'
import myPhoto from "../../assets/myPhoto-copy.jpg";
import underlineWhite from '../../assets/UnderLineWhite.svg'
import mouse from '../../assets/mouse-toy.svg'
import healthy from '../../assets/healthy-pet.svg'
import security from '../../assets/security.svg'
import secondLogo from '../../assets/pet-food-logo-2.jpg'
import thirddLogo from '../../assets/pet-food-logo-3.jpg'
import fourthLogo from '../../assets/pet-food-logo-4.png'
import fifthLogo from '../../assets/pet-food-logo-5.jpg'
const AboutUsComponent = () => {
  return (
    <AboutContainer>
       <div className='aboutUs-back'>
       <h1>About Us</h1>
       </div>

       {/* background end */}

       <div className='first-con'>

        <div className='first-con-left'>
            <img className='big-img' src={big} alt="big-img" />
                <div  className='small-con'>
                <img className='scribble-svg' src={scribble} alt="scribble-img" />
            <img  className='small-img' src={small} alt="small-img" />
            </div>
        </div>

        <div  className='first-con-right'>
            <h2 >About Us</h2>
            <h1>We're always here for our customers.</h1>
            <img src={line} alt="underLine-img" />
            <p style={{color:'grey'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from making it overyears old. Richard McClintock Latin professor at Hampden-Sydney</p>
            <div className='deals-con'>
            <div>
                <div className='deals'>
                    <img src={done} alt="done-img"/>
                    <p style={{marginBottom:'-2px'}}>DEALS & PROMOTIONS</p>
                </div>
                <div className='deals'>
                    <img src={done} alt="done-img"/>
                    <p style={{marginBottom:'-2px'}}>SERVICE AGREEMENT</p>
                </div>
            </div>
            <div>
                <div className='deals'>
                    <img src={done} alt="done-img"/>
                    <p style={{marginBottom:'-2px'}}>NSECTERUS CING ELIT</p>
                </div>
                <div className='deals'>
                    <img src={done} alt="done-img"/>
                    <p style={{marginBottom:'-2px'}}>PRINTING AND TYPESETTING </p>
                </div>
            </div>
            </div>
            <div className='my-con'>
                <img className='my-img' src={myPhoto} alt="my-img" />
                <div className='name'>
                    <h5>Sadullaev Akhrorjon</h5>
                    <p style={{color:'grey'}}>Developer</p>
                </div>
            </div>
            <div style={{display:'flex',gap:'5px'}}>
            <h4>Want to learn more about us?</h4> 
            <h4 style={{color:"#7F4D4F",cursor:"pointer"}}>Click here </h4>
            </div>
            
        </div>

       </div>

       {/* First Container End */}


       <div className='backgroung-brown'>
        <h3>Choose Us</h3>
        <h1>Why Choose Us</h1>
        <img src={underlineWhite} alt="underline" />
       </div>
       <div className='triple-squares'>
        <div className='first-square'>
         <img src={mouse} alt="mouse-svg" /> 
         <h3>MODERN PET TOY</h3>
         <p>Learn content by interacting anything.</p>
         <p style={{marginTop:'-18px'}}>Expert lesson a video.</p>
        </div>
        <div className='first-square'>
         <img src={healthy} alt="mouse-svg" /> 
         <h3>HEALTHY PET NUTRITIONS</h3>
         <p>Learn content by interacting anything.</p>
         <p style={{marginTop:'-18px'}}>Expert lesson a video.</p>
        </div>
        <div className='first-square'>
         <img src={security} alt="mouse-svg" /> 
         <h3>QUALITY & SAFETY</h3>
         <p>Learn content by interacting anything.</p>
         <p style={{marginTop:'-18px'}}>Expert lesson a video.</p>
        </div>
       </div>

         {/* Second Container End */}

         <div className='logo-container'>
            <img className='logo-img' src={secondLogo} alt="Second-logo-svg" />
            <img className='logo-img' src={thirddLogo} alt="Third-logo-svg" />
            <img className='logo-img' src={fourthLogo} alt="Fourth-logo-svg" />
            <img className='logo-img' src={fifthLogo} alt="Fifth-logo-svg" />
         </div>


    </AboutContainer>
  )
}

export default AboutUsComponent