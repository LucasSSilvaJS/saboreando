import './App.css';

import {BrowserRouter} from 'react-router-dom'
import RouterApp from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <RouterApp/>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
