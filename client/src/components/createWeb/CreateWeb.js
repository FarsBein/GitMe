import './CreateWeb.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"

function CreateWeb() {
  return (
    <div className="jumbo-CreateWeb">
      <div className='container space-around'>
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-area'>
            <h3>Your Unique URL</h3> <br/>
            <ReactBootStrap.InputGroup className="mb-2">
              <ReactBootStrap.InputGroup.Prepend>
                <ReactBootStrap.InputGroup.Text>www.gitme.ml/</ReactBootStrap.InputGroup.Text>
              </ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.FormControl id="url" placeholder="Username"  type="text" required isInvalid/>
              <ReactBootStrap.Form.Control.Feedback type="invalid">
                Please choose a username.
              </ReactBootStrap.Form.Control.Feedback>
            </ReactBootStrap.InputGroup>
          </ReactBootStrap.Form>            
          <br/>
          <br/>
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
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-area'>
            <h3>Pick your Projects</h3> <br/>
            <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect2">
              <ReactBootStrap.Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </ReactBootStrap.Form.Control>
            </ReactBootStrap.Form.Group>
            <ReactBootStrap.Form.Label>CTRL+ RIGHT CLICK to select multiple</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Check type="checkbox" id="use-all" className="mb-2" label="Use All"/> 
          </ReactBootStrap.Form> 
          <br/>
          <br/> 
          <div className='right'>
            <ReactBootStrap.Button variant="warning" size="lg" className='done-button' block>
              I am Done!
            </ReactBootStrap.Button>            
          </div>
          <br/>
          <br/> 
      </div>
    </div>
  );
}

export default CreateWeb;
