import './Home.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import buildwebsite2 from '../../images/buildwebsite2.svg';
import Pros from './pros/Pros';
import Steps from './steps/Steps';
import FirstPanel from './firstPanel/FirstPanel';
import OnePanel from './onePanel/OnePanel';

function Home() {
  return (
      <div>
        <OnePanel />
        {/* <FirstPanel/>
        <Pros/>
        <Steps/> */}
      </div>
  );
}

export default Home;
