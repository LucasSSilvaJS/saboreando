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
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Inicio from '../pages/Inicio';

import Private from './Private';
import Public from './Public';

function RoutesApp() {
    return ( 
        <Routes>
            <Route path='/' element={<Public><Intro/></Public>}/>
            <Route path='/inicio' element={<Public><Inicio/></Public>}/>
            <Route path='/home' element={<Private><Home/></Private>}/>
            <Route path='/perfil' element={<Private><Perfil/></Private>}/>
            <Route path='/mapa' element={<Private><Mapa/></Private>}/>
            <Route path='/eventos' element={<Private><Eventos/></Private>}/>
            <Route path='/categorias' element={<Private><Categorias/></Private>}/>
            <Route path='/categorias/:categoria' element={<Private><Categoria/></Private>}/>
            <Route path='/restaurantes/:categoria' element={<Private><Restaurantes/></Private>}/>
            <Route path='/restaurantes/:categoria/:restaurante' element={<Private><Restaurante/></Private>}/>
            <Route path='/suporte' element={<Private><AjudaSuporte/></Private>}/>
            <Route path='/ticket' element={<Private><Ticket/></Private>}/>
            <Route path='/bug' element={<Private><Bug/></Private>}/>
            <Route path='/privacidade' element={<Private><Privacidade/></Private>}/>
            <Route path='/conhecer' element={<Public><Conhecer/></Public>}/>
            <Route path='/login' element={<Public><Login/></Public>}/>
            <Route path='/cadastro' element={<Public><Cadastro/></Public>}/>
        </Routes>
     );
}

export default RoutesApp;