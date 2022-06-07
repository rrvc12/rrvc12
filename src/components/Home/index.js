import './index.scss'
import TransformText from './TransformText';


const Home  = () => {
    return (
        <>
        <div className="home-page">
            <div className="window">
                <div className="bar-title">
                    <div className='button-window'></div>
                </div>
                <div className="container-code">
                    <TransformText text="const " color='#FF79C6' fontWeight="bold" display='inline'/>
                    <TransformText text="Raúl" color='#50FA7B' fontWeight="bold" fontStyle="italic" display='inline'/>
                    <TransformText text=" = {" display='inline'/>
                    <br/>
                    <TransformText text="type: " color='#50FA7B' fontStyle="italic" display='inline' top='5px'/>
                    <TransformText text="'Full Stack Developer'" color='#E6EF86' display='inline' top='5px'/>
                    <TransformText text="," display='inline' top='5px'/>
                    <br/>
                    <TransformText text="abilities: " color='#50FA7B' fontStyle="italic" display='inline' top='10px'/>
                    <TransformText text="['HTML', 'CSS', 'Javascript', 'React', 'NodeJS']" color='#E6EF86' display='inline' top='10px'/>

                    <TransformText text=" }" top='45px'/>
                </div>

            </div>

        </div>
        </>
    );

}

export default Home;