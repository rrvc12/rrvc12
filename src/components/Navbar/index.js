import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <div>[Raúl]</div>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#bebebe"/>
                    Home
                </NavLink>
                <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#bebebe"/>
                    About me
                </NavLink>
                <NavLink exact='true' activeclassname="active" className= "projects-link" to="/projects">
                    <FontAwesomeIcon icon={faRocket} color="#bebebe"/>
                    Projects
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/raulruilova/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#bebebe"/>
                    </a>
                    <a target="_blank" rel='noreferrer' href='https://github.com/rrvc12'>
                        <FontAwesomeIcon icon={faGithub} color="#bebebe"/>
                    </a>
                    <a target="_blank" rel='noreferrer' href='https://twitter.com/Rrvc12'>
                        <FontAwesomeIcon icon={faTwitter} color="#bebebe"/>
                    </a>
                </li>
            </ul>
        </div>


            
        
        </>
    );
}

export default Navbar;