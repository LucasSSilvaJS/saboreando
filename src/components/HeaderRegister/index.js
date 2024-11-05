import { FaCaretLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import './header-register.css';

function HeaderRegister({to, action}) {
    return (
        <header className='invite-header'>
            <Link to={to} onClick={action}>
                <FaCaretLeft size={20} color='#fff' />
            </Link>
        </header>
    );
}

export default HeaderRegister;