import './index.scss'
import imagen from '../../assets/images/foto.png'
import { BsDownload } from "react-icons/bs";

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
        </div>
      </>
    );
}

export default About;