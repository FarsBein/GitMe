import './Doc.css';
import '../SharedStyle.css'
import * as ReactBootStrap from "react-bootstrap"
import Sidebar from './sidebar/Sidebar';
import Display from './display/Display';

function Doc() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo center'>
        <ReactBootStrap.Container className='home-container'>
            <Sidebar/>
            <Display/>
            <br />
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default Doc;
