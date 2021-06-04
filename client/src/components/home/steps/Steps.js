import './Steps.css';
import * as ReactBootStrap from "react-bootstrap"
import checklist from '../../../images/checklist.svg';
import checkmark from '../../../images/checkmark.png';

function Steps() {
    return (
    <ReactBootStrap.Jumbotron fluid className='steps-jumbo'>
        <ReactBootStrap.Container className='home-container'>
            <img src={checklist} className='computer-image mobile'/>   
            <div className="home-text">
                <h1>All that you need is:</h1>
                <br/>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Connect to your GitHub account</h5>
                    &nbsp; In one click you can connect your github account with this website 
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Write Short Description</h5>
                    &nbsp; Write a short description about yourself or use one of our templates
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Pick Your URL Name</h5>
                    &nbsp; you can pick your name as your url name for easier access 
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Done!</h5>
                    &nbsp; You can add more customize your website later on if you want
                </p>
                <br/>
                <p>
                    <ReactBootStrap.Button variant="warning" className="button">Get Started</ReactBootStrap.Button>
                </p>
            </div>
            <img src={checklist} className='computer-image desktop'/>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
    );
}

export default Steps;
            