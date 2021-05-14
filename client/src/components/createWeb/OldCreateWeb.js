import './CreateWeb.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import checkmark from '../../images/checkmark.svg'
import x from '../../images/x.svg'

function CreateWeb() {
  const [loading,setLoading] = useState(false)
  const [nameAvailable,setNameAvailable] = useState(false)

  const checkButtonHandler = async () => {
    setLoading(true)
    await new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, '3'), 100)
    });

    setLoading(false)
    setNameAvailable(!nameAvailable)
  }
 
  return (
    <div className="jumbo-CreateWeb">
      <ReactBootStrap.Container>
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-container'>
            <h3>Your Unique URL</h3> <br/>
            <ReactBootStrap.InputGroup className="mb-2">
              <ReactBootStrap.InputGroup.Prepend>
                <ReactBootStrap.InputGroup.Text>www.gitme.ml/</ReactBootStrap.InputGroup.Text>
              </ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.FormControl id="url" placeholder="Username"  type="text" required isValid={nameAvailable} isInvalid={!nameAvailable}  />
              <ReactBootStrap.Form.Control.Feedback type="invalid">
                &nbsp;Username is Already Taken!
              </ReactBootStrap.Form.Control.Feedback>
            </ReactBootStrap.InputGroup>
            <div className='space-between'>
                <div>
                </div>
                <ReactBootStrap.Button variant="warning" onClick={() => checkButtonHandler()} className='check-button'>
                  {loading ? <ReactBootStrap.Spinner animation="border" /> : 'Check Availability'}
                </ReactBootStrap.Button>
            </div>
          </ReactBootStrap.Form>            
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-container'>
            <h3>About You</h3> <br/>
            <ReactBootStrap.InputGroup className="mb-2">
              <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
                <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} className='wide-textarea' placeholder="Talk about your self!"/>
              </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
          </ReactBootStrap.Form>  
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-container'>
            <h3>Shorter About You :)</h3> <br/>
            <ReactBootStrap.InputGroup className="mb-2">
              <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
                <ReactBootStrap.Form.Control as="textarea" rows={2} cols={1000} className='wide-textarea' placeholder="Talk about your self!"/>
              </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
          </ReactBootStrap.Form>  
          <br/>
          <br/>
          <ReactBootStrap.Form className='form-container'>
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
            <br/>
            <ReactBootStrap.Form.Label className='desktop'>(CTRL+ RIGHT CLICK) to select multiple</ReactBootStrap.Form.Label>
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
      </ReactBootStrap.Container>
    </div>
  );
}

export default CreateWeb;
