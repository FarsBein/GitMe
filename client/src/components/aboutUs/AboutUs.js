import './AboutUs.css';
import '../SharedStyle.css'
import * as ReactBootStrap from "react-bootstrap"
import wokeupatnight from '../../images/wokeupatnight.png'
import infomessage from '../../images/infomessage.png'

function AboutUs() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo jumbo-about-us'>
        <ReactBootStrap.Container className='home-container'>
            <img src={wokeupatnight} className='computer-image mobile'/>
            <br className=' mobile'/>
            <div className="pros-text">
                <h1><img src={infomessage} className='infomessage-image'/> About Us</h1>
                <p>
                    Well more like about me. I am computer science student interested in creating useful things
                    to show it off in my family gathering. Initially I was planning to create a website builder 
                    for local businesses that only have social media presences without a website but at the 
                    same time I wanted to fix the look of my personal website. So I thought why not kill two 
                    birds with one stone kinda of thing.                
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
