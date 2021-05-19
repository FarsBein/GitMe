import './OnePanel.css';
import '../../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import profiletab from '../../../images/profiletab.svg';
import checkmark from '../../../images/checkmark.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OnePanel() {

  const getStartedHandle = () => {
    axios.get(`http://localhost:8000/auth/github`)
  }

  return (
      <div className='jumbo one-panel-jumbo'>
        <ReactBootStrap.Container className='one-panel-container'>
            <img src={profiletab} className='home-image '/>
            <br className=''/>
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
                    <h5><img src={checkmark} className='checkmark-icon'/> Write Short Description or use your Linkedin bio</h5>
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Pick Your projects</h5>
                </p>
                <p>
                    <h5><img src={checkmark} className='checkmark-icon'/> Done!</h5>
                </p>
                <br/>
                <p>
                    <Link to='/github-auth'>
                        <ReactBootStrap.Button variant="warning" size='lg' onClick={()=>getStartedHandle()} className="button">
                            Get Started
                        </ReactBootStrap.Button>
                    </Link> 
                </p>
            </div>
        </ReactBootStrap.Container>          
      </div>
  );
}

export default OnePanel;
