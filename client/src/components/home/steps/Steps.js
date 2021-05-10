import './Steps.css';
import * as ReactBootStrap from "react-bootstrap"
import checklist from '../../../images/checklist.svg';

function Steps() {
    return (
    <ReactBootStrap.Jumbotron fluid className='steps-jumbo'>
        <ReactBootStrap.Container className='home-container'>
            <img src={checklist} className='computer-image mobile'/>   
            <div className="home-text">
                <h1>All that you need is:</h1>
                <br/>
                <p>
                    1. In one click sign in using your github account
                </p>
                <p>
                    2. Write a short description about yourself or use one of our templates
                </p>
                <p>
                    3. Done!
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
            