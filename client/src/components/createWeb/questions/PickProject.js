import './questions.css';
import '../SharedStyle.css';
import * as ReactBootStrap from "react-bootstrap"

function PickProject() {
  return (
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
        <br/>
        <ReactBootStrap.Form.Label className='desktop'>CTRL+ RIGHT CLICK to select multiple</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Check type="checkbox" id="use-all" className="mb-2" label="Use All"/> 
    </ReactBootStrap.Form> 
  );
}

export default PickProject;
