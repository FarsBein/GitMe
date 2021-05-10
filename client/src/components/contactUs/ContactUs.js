import './ContactUs.css';
import * as ReactBootStrap from "react-bootstrap"
import personprofileonscreen from '../../../images/personprofileonscreen.svg';

function ContactUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-pros'>
        <ReactBootStrap.Container className='home-container'>
            <img src={personprofileonscreen} className='computer-image'/>
            <div className="pros-text">
                <h1>Make and Forget</h1>
                <p>
                    GitMe will automatically update your site with any new public projects you make.
                    Takes less than 5 minutes to make and you will never need to worry about it again                   
                </p>
                <p>
                </p>
            </div>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default ContactUs;
