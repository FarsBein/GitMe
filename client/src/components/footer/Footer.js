import './Footer.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <ReactBootStrap.Container>
            <div className='space-out'>
                <br/>
                <br/>
                <div >
                    <Link to="/aboutUs" className="link">About Us</Link>
                </div>
                <div >
                    <Link to="/contactUs" className="link">Contact Us</Link>
                </div>
                <div >
                    <a href="https://github.com/FarsBein/GITME" className="link" target='blank_'>GitHub</a>
                </div>
                <br/>
                <br/>
            </div>
        </ReactBootStrap.Container>
    </footer>
  );
}

export default Footer;
