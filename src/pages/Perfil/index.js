import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { FaArrowRightFromBracket, FaRegCircleQuestion } from 'react-icons/fa6';

import './perfil.css';

import {logoutUser} from '../../services/crud';

function Perfil() {
    return ( 
        <div className='default-container container-bg'>
            <Header text='Perfil'/>
            <main className='container perfil'>
                <div className='perfil-options'>
                    <Link to='/suporte' className='perfil-option'>
                        <FaRegCircleQuestion />
                        <span>Ajuda e suporte</span>
                    </Link>
                    <div className='perfil-option' onClick={logoutUser}>
                        <FaArrowRightFromBracket/>
                        <span>Sair</span>
                    </div>
                </div>
                <div className='perfil-terms'>
                    <Link to='/privacidade'>
                        Politicas de privacidade
                    </Link>
                    <Link to='/privacidade'>
                        Termos de uso
                    </Link>
                </div>
            </main>
            <Navbar/>
        </div>
     );
}

export default Perfil;