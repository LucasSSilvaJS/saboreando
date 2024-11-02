import './brand.css';
import logo from '../../assets/img/logo.svg';

function Brand({disableAbsolute=false, style}) {
    const positionAbsolute = {
        'position': 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div className='brand' style={!disableAbsolute ? positionAbsolute : {style}}>
            <img className='brand-logo' src={logo} alt="Logo Sabor&ando" />
            <h1 className='brand-name'>Sabor&ando</h1>
        </div>
    );
}

export default Brand;

// sem uso