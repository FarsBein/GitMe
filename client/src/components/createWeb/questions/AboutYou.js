import './questions.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"

function AboutYou() {
  return (
      <div>
        <ReactBootStrap.Form className='form-area'>
        <h3>About You</h3> <br/>
        <ReactBootStrap.InputGroup className="mb-2">
        <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
            <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} className='wide-textarea' placeholder="Talk about your self!"/>
        </ReactBootStrap.Form.Group>
        </ReactBootStrap.InputGroup>
        </ReactBootStrap.Form>  
        <br/>
        <br/>
        <ReactBootStrap.Form className='form-area'>
            <h3>Shorter About You :)</h3> <br/>
            <ReactBootStrap.InputGroup className="mb-2">
            <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
                <ReactBootStrap.Form.Control as="textarea" rows={2} cols={1000} className='wide-textarea' placeholder="Talk about your self!"/>
            </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
        </ReactBootStrap.Form>  
      </div>
  );
}

export default AboutYou;
