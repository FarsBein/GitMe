import './OnePanel.css';
import '../../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import profiletab from '../../../images/profiletab.svg';
import checkmark from '../../../images/checkmark.png';

function OnePanel() {
  return (
      <div className='jumbo one-panel-container'>
        <ReactBootStrap.Container className='center'>
            <img src={profiletab} className='home-image mobile'/>
            <div className="home-text">
                <h1>Quick. Easy. Hassle-free.</h1>
                <p>
                    GITME is an extremely beginner-friendly website builder that can help you 
                    build your own personal website  to showcase what really matters, your <b>Projects!</b>
                </p>
                <br/>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Connect to your GitHub account</h5>
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Write Short Description About yourself</h5>
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Pick Your URL Name</h5>
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Done!</h5>
                </p>
                <br/>
                <p>
                    <ReactBootStrap.Button variant="warning" className="button">Get Started</ReactBootStrap.Button>
                </p>

            </div>
            <img src={profiletab} className='home-image desktop'/>
        </ReactBootStrap.Container>          
      </div>
  );
}

export default OnePanel;
