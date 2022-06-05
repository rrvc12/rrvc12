import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <div>[Raúl]</div>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="classname" to="/">
                    <FontAwesomeIcon icon={faHome} color="gray"/>
                </NavLink>
                <NavLink exact='true' activeclassname="classname" to="/">
                    <FontAwesomeIcon icon={faUser} color="gray"/>
                </NavLink>
                <NavLink exact='true' activeclassname="classname" to="/">
                    <FontAwesomeIcon icon={faRocket} color="gray"/>
                </NavLink>
            </nav>
        </div>


            
        
        </>
    );
}

export default Navbar;