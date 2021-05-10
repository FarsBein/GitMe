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
                    <h5><img src={checkmark} className='github-image'/> Connect to your GitHub account</h5>
                    In one click can connect your github account with this website 
                </p>
                <p>
                    <h5><img src={checkmark} className='github-image'/> Short Description</h5>
                    Write a short description about yourself or use one of our templates
                </p>
                <p>
                    <h5><img src={checkmark} className='github-image'/> Done!</h5>
                    You can add more and customize your website later on if you want
                </p>
                <p>
                        <ReactBootStrap.Button variant="primary" className="button">Get Started</ReactBootStrap.Button>
                </p>
            </div>
            <img src={checklist} className='computer-image desktop'/>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
    );
}

export default Steps;
            