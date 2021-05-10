import './Footer.css';
import * as ReactBootStrap from "react-bootstrap"
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer>
        <ReactBootStrap.Container>
            <div className='space-out'>
                <br/>
                <br/>
                <div >
                    <div>About Us</div>
                </div>
                <div >
                    <div>Contact Us</div>
                </div>
                <div >
                    <div href="#"><img src={github} className='github-image'/>GitHub</div>
                </div>
                <br/>
                <br/>
            </div>
        </ReactBootStrap.Container>
    </footer>
  );
}

export default Footer;
