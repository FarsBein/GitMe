import './AboutUs.css';
import '../SharedStyle.css'
import * as ReactBootStrap from "react-bootstrap"
import wokeupatnight from '../../images/wokeupatnight.png'
import infomessage from '../../images/infomessage.png'

function AboutUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-about-us jumbo '>
        <ReactBootStrap.Container className='home-container'>
            <br />
            <img src={wokeupatnight} className='sleepbag-image'/>
            <div className="pros-text">
                <h1><img src={infomessage} className='infomessage-image'/> <b>About Us</b></h1>
                <p>
                    Well more like about me. I am computer science student interested in creating useful applications
                    to show off in my family gatherings. Initially I was planning to create a website builder 
                    for local businesses that only have social media presence but at the 
                    same time I wanted to fix the look of my personal website. So I thought why not kill two 
                    birds with one stone kinda of thing and make a personal website builder.               
                </p>
            </div>
            <br />
        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default AboutUs;
