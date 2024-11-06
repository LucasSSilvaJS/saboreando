import { FaCaretLeft, FaLocationDot } from 'react-icons/fa6';
import logo from '../../assets/img/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

function Header({text, navigation = false, to, style, ableCap = true}) {
    return ( 
        <header className='header-container container' style={style}>
            <div>

                <div className='header-info' style={{'flexDirection': navigation && 'row-reverse'}}>
                    <div className='brand-header'>
                        <img className='brand-header-logo' src={logo} alt="Logo Saboreando"/>
                        <span className='brand-header-name'>Sabor&Ando</span>
                    </div>

                    {navigation ? (
                        <div className='header-location'>
                            <Link to={to}>
                                <FaCaretLeft size={20} color='#fff'/>
                            </Link>
                        </div>
                    ) : (
                        <div className='header-location'>
                            <FaLocationDot size={12}/>
                            <span className='header-state'>Pernambuco</span>
                        </div>
                    )}
                </div>
                <div className='header-page' style={{'textTransform': ableCap && 'capitalize'}}>
                    {text}
                </div>
            </div>
        </header>
     );
}

export default Header;