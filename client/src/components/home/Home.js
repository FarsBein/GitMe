import './Home.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import buildwebsite2 from '../../images/buildwebsite2.svg';
import Pros from './pros/Pros';
import Steps from './steps/Steps';

function Home() {
  return (
      <div>
        <ReactBootStrap.Jumbotron fluid className='jumbo'>
            <ReactBootStrap.Container className='home-container'>
                <img src={buildwebsite2} className='computer-image mobile'/>
                <div className="home-text">
                    <h1>Quick. Easy. Hassle-free.</h1>
                    <p>
                        GitMe is an extremely beginner-friendly website builder that can help you 
                        build your own personal website  to showcase what really matters, your projects!
                    </p>
                    <br/>
                    <p>
                        <ReactBootStrap.Button variant="primary" className="button">Get Started</ReactBootStrap.Button>
                    </p>
                </div>
                <img src={buildwebsite2} className='computer-image desktop'/>
            </ReactBootStrap.Container>
        </ReactBootStrap.Jumbotron> 
        <Pros/>
        <Steps/>
      </div>
  );
}

export default Home;
