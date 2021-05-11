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
            <Display/>
            <br />
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default Doc;
