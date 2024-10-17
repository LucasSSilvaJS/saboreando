import { FaHouse, FaRegCalendar, FaRegMap, FaRegUser, FaUtensils } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import './navbar.css'

function Navbar() {
    const location = useLocation();

    return (
        <>
            <div className="nav-spacing"></div>
            <nav style={{'padding': '0px'}} className="navbar container">
                <div className="nav-container">
                    <Link to='/home' className={`nav-item ${location.pathname === '/home' && 'nav-item-active'}`}>
                        <FaHouse />
                        <span>Home</span>
                    </Link>
                    <Link to='/mapa' className={`nav-item ${location.pathname === '/mapa' && 'nav-item-active'}`}>
                        <FaRegMap />
                        <span>Mapa</span>
                    </Link>
                    <Link to='/eventos' className={`nav-item ${location.pathname === '/eventos' && 'nav-item-active'}`}>
                        <FaRegCalendar />
                        <span>Eventos</span>
                    </Link>
                    <Link to='/categorias' className={`nav-item ${location.pathname === '/categorias' && 'nav-item-active'}`}>
                        <FaUtensils />
                        <span>Categorias</span>
                    </Link>
                    <Link to='/perfil' className={`nav-item ${location.pathname === '/perfil' && 'nav-item-active'}`}>
                        <FaRegUser />
                        <span>Perfil</span>
                    </Link>
                </div>
            </nav>
        </>
     );
}

export default Navbar;