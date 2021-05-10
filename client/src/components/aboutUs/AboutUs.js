import './AboutUs.css';
import * as ReactBootStrap from "react-bootstrap"
import wokeupatnight from '../../images/wokeupatnight.png'
import infomessage from '../../images/infomessage.png'

function AboutUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-about-us'>
        <ReactBootStrap.Container className='home-container'>
            <img src={wokeupatnight} className='computer-image mobile'/>
            <div className="pros-text">
                <h1><img src={infomessage} className='infomessage-image'/> About Us</h1>
                <p>
                    well more like about me. I am computer science student interested in creating something useful 
                    to show it off in my next family gathering. Initially I was planning to create a website builder 
                    for local businesses with only social media presences but at the same time I wanted to fix the 
                    look of my personal website. So I thought why not kill two birds with one stone kinda of thing.                
                </p>
                <p>
                </p>
            </div>
            <img src={wokeupatnight} className='computer-image desktop'/>
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default AboutUs;
