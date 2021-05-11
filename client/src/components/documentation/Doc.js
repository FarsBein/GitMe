import './Doc.css';
import * as ReactBootStrap from "react-bootstrap"
import wokeupatnight from '../../images/wokeupatnight.png'
import infomessage from '../../images/infomessage.png'
import Sidebar from './sidebar/Sidebar';
import Display from './display/Display';

function Doc() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-about-us'>
        <ReactBootStrap.Container className='home-container'>
            <Sidebar/>
            <div className="pros-text">
                <h1><img src={infomessage} className='infomessage-image'/> Documentation</h1>
                <p>
                    bruh it is simple just sign in and you are good               
                </p>
                <p>
                </p>
            </div>
            <Display/>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default Doc;
