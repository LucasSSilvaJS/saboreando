import {Routes, Route} from 'react-router-dom'
import Intro from '../pages/Intro';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Mapa from '../pages/Mapa';
import Eventos from '../pages/Eventos';
import Categorias from '../pages/Categorias';
import Categoria from '../pages/Categoria';
import Restaurantes from '../pages/Restaurantes';
import Restaurante from '../pages/Restaurante';
import AjudaSuporte from '../pages/AjudaSuporte';
import Ticket from '../pages/Ticket';
import Bug from '../pages/Bug';
import Privacidade from '../pages/Privacidade';
import Conhecer from '../pages/Conhecer';

function RoutesApp() {
    return ( 
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/mapa' element={<Mapa/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/categorias' element={<Categorias/>}/>
            <Route path='/categorias/:categoria' element={<Categoria/>}/>
            <Route path='/restaurantes/:categoria' element={<Restaurantes/>}/>
            <Route path='/restaurantes/:categoria/:restaurante' element={<Restaurante/>}/>
            <Route path='/suporte' element={<AjudaSuporte/>}/>
            <Route path='/ticket' element={<Ticket/>}/>
            <Route path='/bug' element={<Bug/>}/>
            <Route path='/privacidade' element={<Privacidade/>}/>
            <Route path='/conhecer' element={<Conhecer/>}/>
        </Routes>
     );
}

export default RoutesApp;