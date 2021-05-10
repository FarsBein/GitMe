import './ContactUs.css';
import * as ReactBootStrap from "react-bootstrap"

function ContactUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-about-us'>
        <ReactBootStrap.Container className='contact-container'>
            <div>
                <h1>Contact Us</h1>
                <p>
                    Need help, support, or you just want to talk don't hastate to contact us!                   
                </p>
            </div>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default ContactUs;
