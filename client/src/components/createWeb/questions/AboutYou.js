import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"

function AboutYou({nextHandler,prevHandler}) {
  return (
      <div>
        <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>
            About You
            <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} >
                Next
            </ReactBootStrap.Button>
        </h3> 
          
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
          <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
              <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} className='wide-textarea' placeholder="Talk about your self!"/>
          </ReactBootStrap.Form.Group>
          </ReactBootStrap.InputGroup>
        <br/>
        <br/>
        <h3>Shorter About You :)</h3> 

            <br/>
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
