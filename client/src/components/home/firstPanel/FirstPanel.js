import './FirstPanel.css';
import '../../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import buildwebsite2 from '../../../images/buildwebsite2.svg';

function FirstPanel() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-home'>
        <ReactBootStrap.Container className='home-container'>
            <img src={buildwebsite2} className='computer-image mobile'/>
            <div className="home-text">
                <h1>Quick. Easy. Hassle-free.</h1>
                <p>
                    GITME is an extremely beginner-friendly website builder that can help you 
                    build your own personal website  to showcase what really matters, your projects!
                </p>
                <br/>
                <p>
                    <ReactBootStrap.Button variant="warning" className="button">Get Started</ReactBootStrap.Button>
                </p>
            </div>
            <img src={buildwebsite2} className='computer-image desktop'/>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron> 
  );
}

export default FirstPanel;
