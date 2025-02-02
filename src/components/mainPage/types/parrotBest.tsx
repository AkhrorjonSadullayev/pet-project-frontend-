import { Link } from "react-router-dom"
import line from '../../../assets/curved-line.svg'
import '../../../styles/MainPageStyle'
import parrotBest from '../../../assets/best-parrot-img.jpg'

const ParrotbestComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <div className='best-left'>
    <h3>Best Product</h3>
    <h1>Parrot Food</h1>
    <p>Wusmod tempor incididu nt ut labore et dolore magna aliqua.</p>
    <Link to={'/parrot-food'} style={{textDecoration:'none'}}>
    <button>shop now</button>
    </Link>
    <img src={line} alt="line-img" />
  </div>         
  <div className='best-right'>
  <img className='dog-img' src={parrotBest} alt="dog-food-img" />
  </div>
    </div>
  )
}

export default ParrotbestComponent