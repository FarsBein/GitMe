import './Footer.css';
import * as ReactBootStrap from "react-bootstrap"
import github from '../../images/github.svg';
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
                    <a href="https://github.com/FarsBein/GitMe" className="link">GitHub</a>
                </div>
                <br/>
                <br/>
            </div>
        </ReactBootStrap.Container>
    </footer>
  );
}

export default Footer;
