import './style/notFound.style'
import notFound from '../../assets/not-found.gif'
import { NotContainer } from './style/notFound.style'
import { Link } from 'react-router-dom'
const NotFoundComponent = () => {
  return (
    <NotContainer>
        <div className='right-not' style={{display:'flex',alignItems:'end'}}>
        <img  src={notFound} alt="not-found-svg" />
        </div>
        <div className='left-not'>
            <h1>404</h1>
            <h3>Page Not Found !</h3>
            <Link to={"/"}>
            <button>BACK TO HOME</button>
            </Link>
        </div>
    </NotContainer>
  )
}

export default NotFoundComponent