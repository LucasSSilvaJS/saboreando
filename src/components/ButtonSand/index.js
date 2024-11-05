import { Link } from 'react-router-dom';
import './button-sand.css';

function ButtonSand({text, to}) {

    return ( 
        <Link className='button-sand' to={to}>
            {text}
        </Link>
     );
}

export default ButtonSand;