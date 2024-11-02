import { Link } from 'react-router-dom';
import './button.css';

function Button({text, to}) {

    return ( 
        <Link className='button' to={to}>
            {text}
        </Link>
     );
}

export default Button;