import { Link } from "react-router-dom";
import {FaCaretLeft} from "react-icons/fa"
import './nav-restaurant.css';

function NavRestaurant({title, subtitle, bgImg, profileImg, to}) {
    return ( 
        <>
            <nav className="nav-restaurant container" style={{'backgroundImage': `url(${bgImg})`}}>
                <Link className="nav-restaurant-return" to={to}>
                    <FaCaretLeft/>
                </Link>
                <img className="nav-restaurant-img" src={profileImg} alt="perfil" />
            </nav>
            <section className="nav-restaurant-desc">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </section>
        </>
     );
}

export default NavRestaurant;