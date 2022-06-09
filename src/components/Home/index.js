import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Home  = () => {
    return (
        <>
        <div className="home-page">
            <div className="window">
                <div className="bar-title">
                    <div className='button-window'></div>
                </div>
                <div className="container-code">
                    <div className='linecode'>
                        <span className="code statement">const </span>
                        <span className="code variable">Raúl</span>
                        <span className="code"> &#61; &#123;</span>
                    </div>
                    <div className='linecode'>
                        <span className='code key'>type</span>
                        <span className="code">: '</span>
                        <span className='code value'>Full Stack Developer</span>
                        <span className="code">'&#44;</span>
                    </div>
                    <div className='linecode'>
                        <span className='code key'>abilities</span>
                        <span className="code">: &#91;</span>
                        <span className='code value'>'HTML', 'CSS', 'Javascript', 'React', 'NodeJS'</span>
                        <span className="code">&#93; &#44;</span>
                    </div>
                    <div className='linecode'>
                        <span className='code key'>languages</span>
                        <span className="code">: &#91;</span>
                        <span className='code value'>'Spanish', 'English'</span>
                        <span className="code">&#93; &#44;</span>
                    </div>
                    <div className='linecode'>
                        <span className='code key'>age</span>
                        <span className="code">: </span>
                        <span className='code value number'>24</span>
                    </div>

                    <span className='code'> &#125;</span>
                </div>

            </div>
            <div className="container-button">
                <div className="button-run"><FontAwesomeIcon icon={faPlay} color="#bebebe"/> Run Code</div>
            </div>
            

        </div>
        </>
    );

}

export default Home;