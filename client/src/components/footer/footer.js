import './Footer.css';
import * as ReactBootStrap from "react-bootstrap"
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer>
        <div className='space-out'>
            <div >
                <div>About Us</div>
                    <div href="#">Story</div>
                    <div href="#">Clients</div>
                    <div href="#">Testimonials</div>
            </div>
            <div >
                <div>Services</div>
                    <div href="#">Marketing</div>
                    <div href="#">Consulting</div>
                    <div href="#">Development</div>
                    <div href="#">Design</div>
            </div>
            <div >
                <div>Contact Us</div>
                    <div href="#">United States</div>
                    <div href="#">United Kingdom</div>
                    <div href="#">Australia</div>
                    <div href="#">Support</div>
            </div>
            <div >
                <div>Social</div>
                    <div href="#"><img src={github} className='github-image'/>Facebook</div>
                    <div href="#"><img src={github} className='github-image'/>Instagram</div>
                    <div href="#"><img src={github} className='github-image'/>Youtube</div>
                    <div href="#"><img src={github} className='github-image'/>Twitter</div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
