import './Showcase.css';
import * as ReactBootStrap from "react-bootstrap"
import tab from '../../images/tab.png'

function Showcase() {
  return (
    <ReactBootStrap.Jumbotron fluid className='jumbo-about-us'>
        <ReactBootStrap.Container className='home-container'>
            <div className="pros-text">
                <h1><img src={tab} className='tab-image'/>Showcase</h1>
                <p>
                    Get inspired by our community personal website examples made with GitMe. 
                    Discover capabilities, create your website, and join the showcase. #GitMeToShowcase               
                </p>
                <p>
                </p>
            </div>
            <ReactBootStrap.Card style={{ maxWidth: '18rem' }}>
                <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/farsbein01/image/upload/v1620680953/localhost_3000__Max_t4oega.png" />
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </ReactBootStrap.Card.Text>
                    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>

            <ReactBootStrap.Card style={{ maxWidth: '18rem' }}>
                <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/farsbein01/image/upload/v1620680953/localhost_3000__Max_t4oega.png" />
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </ReactBootStrap.Card.Text>
                    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>

        </ReactBootStrap.Container>
    </ReactBootStrap.Jumbotron>
  );
}

export default Showcase;
