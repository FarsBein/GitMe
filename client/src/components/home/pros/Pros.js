import './Pros.css';
import * as ReactBootStrap from "react-bootstrap"
import screen from '../../../images/screen.png';
import laptopspeed from '../../../images/laptopspeed.png';

function Pros() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-pros'>
        <ReactBootStrap.Container className='home-container'>
            <img src={laptopspeed} className='computer-image'/>
            <div className="pros-text">
                <h1><b>Make and Forget</b></h1>
                <p>
                    GITME will automatically update your site with any new public projects you make.
                    Takes less than 5 minutes to make and you will never need to worry about it again                   
                </p>
                <p>
                </p>
            </div>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default Pros;
