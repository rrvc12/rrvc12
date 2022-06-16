import './index.scss'
import imagen from '../../assets/images/foto.png'
import { BsDownload } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faHtml5, faJava, faJs, faNode, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const About = () =>{
    return (
      <>
        <div className="about-me">
          <div className="card">
            <div className="photo">
              <img src={imagen} alt="Foto" />
            </div>
            <div className="message-container">
              <div className="first-message">Hello World! 👋</div>
              <p className="description">
                Graduado de la carrera de Ingeniería de Sistemas, entusiasta y
                apasionado por la programación. Tengo conocimientos en
                desarrollo de escritorio, web y móvil pero sigo estudiando para
                mejorar mis habilidades. Mi objetivo es poder trabajar en el
                desarrollo de aplicaciones web y poder aprender de mis
                compañeros y superiores.
              </p>
              <button className='button-cv'><i><BsDownload/></i>Download CV</button>
            </div>



          </div>

          <div className='skills'>
            <div className='title-skills'>Skills:</div>
            <div className='skills-container'>
              <FontAwesomeIcon icon={faHtml5} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faCss3Alt} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faJs} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faReact} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faNodeJs} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faSass} color="#F4EDEA"/>
              <FontAwesomeIcon icon={faJava} color="#F4EDEA"/>
            </div>

          </div>
        </div>
      </>
    );
}

export default About;