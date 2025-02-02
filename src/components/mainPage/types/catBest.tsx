import { Link } from "react-router-dom"
import line from '../../../assets/curved-line.svg'
import '../../../styles/MainPageStyle'
import catbest from '../../../assets/catBestFood.jpeg'

const CatBestComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <div className='best-left'>
    <h3>Best Product</h3>
    <h1>Cat Food</h1>
    <p>Wusmod tempor incididu nt ut labore et dolore magna aliqua.</p>
    <Link to={'/cat-food'} style={{textDecoration:'none'}}>
    <button>shop now</button>
    </Link>
    <img src={line} alt="line-img" />
  </div>         
  <div className='best-right'>
  <img className='dog-img' src={catbest} alt="dog-food-img" />
  </div>
    </div>
  )
}

export default CatBestComponent