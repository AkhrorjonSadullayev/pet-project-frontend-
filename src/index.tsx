import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <BrowserRouter>
   <RouterComponent />
  </BrowserRouter>
  </>
);
reportWebVitals();
