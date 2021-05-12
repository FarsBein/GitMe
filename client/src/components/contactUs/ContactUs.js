import './ContactUs.css';
import '../SharedStyle.css'
import * as ReactBootStrap from "react-bootstrap"

function ContactUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo center'>
        <ReactBootStrap.Container className='contact-container'>
            <div>
                <h1><b>Contact Us</b></h1>
                <p>
                    Need help, support, or you just want to talk don't hastate to contact us!                   
                </p>
            </div>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default ContactUs;
