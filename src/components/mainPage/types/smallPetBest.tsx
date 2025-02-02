import { Link } from "react-router-dom"
import line from '../../../assets/curved-line.svg'
import '../../../styles/MainPageStyle'
import smallbest from '../../../assets/small-pet-best.jpg'

const SmallPetBestComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <div className='best-left'>
    <h3>Best Product</h3>
    <h1>Small Pet</h1>
    <p>Wusmod tempor incididu nt ut labore et dolore magna aliqua.</p>
    <Link to={'/small-pet'} style={{textDecoration:'none'}}>
    <button>shop now</button>
    </Link>
    <img src={line} alt="line-img" />
  </div>         
  <div className='best-right'>
  <img className='dog-img' src={smallbest} alt="dog-food-img" />
  </div>
    </div>
  )
}

export default SmallPetBestComponent