import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';

function PickProject({nextHandler,prevHandler}) {
  const [projects, setProjects] = useState('')

  const onChangePicks = async (event) => {
    let value = await Array.from(event.target.selectedOptions, option => option.value);
    setProjects(value)
  }

  return (
    <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>
          Pick your Projects
        </h3> 

        <br/>
        <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect2">
        <ReactBootStrap.Form.Control onChange={(e)=>onChangePicks(e)} as="select" multiple>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
        </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>
        <br/>
        <ReactBootStrap.Form.Label className='desktop'>CTRL+ RIGHT CLICK to select multiple</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Check type="checkbox" id="use-all" label="Use all Projects"/> 
        <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} disabled={projects==''}>
                Next
        </ReactBootStrap.Button>
    </ReactBootStrap.Form> 
  );
}

export default PickProject;
