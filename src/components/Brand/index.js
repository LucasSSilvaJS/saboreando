import './brand.css';
import logo from '../../assets/img/logo.svg';

function Brand() {
    return ( 
        <div className='brand'>
            <img className='brand-logo' src={logo} alt="Logo Sabor&ando"/>
            <h1 className='brand-name'>Sabor&ando</h1>
        </div>
     );
}

export default Brand;