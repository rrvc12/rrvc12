import './index.scss'
import imagen from '../../assets/images/foto.png'

const About = () =>{
    return(
        <>
        <div className='about-me'>
            <div className='card'>
                <div className='photo'><img src={imagen} alt="Foto"/></div>
                <div className='first-message'>Hello World! 👋</div>
                <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book.</p>
            </div>


        </div>
        </>
    );
}

export default About;