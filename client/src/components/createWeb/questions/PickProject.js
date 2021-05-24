import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import axios from 'axios';

function PickProject({nextHandler,prevHandler, repos}) {
  const [projects, setProjects] = useState('')
  const [useAll, setUseAll] = useState(false)

  const onChangePicks = async (event) => {
    let value = await Array.from(event.target.selectedOptions, option => option.value);
    setProjects(value)
  }

  const saveChanges = async () => {
    const updatedProfile = await axios.post('http://localhost:8000/edit/repos', {
      reposUrl: useAll ? 'all' : projects
    },{ withCredentials: true})
    console.log('pick project:',updatedProfile.data)
    nextHandler()
  }

  const printRepos = () => {
    console.log('projects: ',projects)
    console.log('useAll: '  ,useAll)
  }

  return (
    <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>
          Pick your Projects
        </h3> 

        <br/>
        <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect2">
        <ReactBootStrap.Form.Control onChange={(e)=>onChangePicks(e)} as="select" multiple>
            { 
              repos.map((repo) => <option key={repo._id} value={repo.url}>{repo.name}</option>) 
            }
        </ReactBootStrap.Form.Control>
        </ReactBootStrap.Form.Group>
        <br/>
        <ReactBootStrap.Form.Label className='desktop'>CTRL+ RIGHT CLICK to select multiple</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Check type="checkbox" id="use-all" label="Use all Projects" onClick={() => setUseAll(!useAll)}/> 
        <ReactBootStrap.Button variant="dark" onClick={() => saveChanges()} disabled={projects=='' && !useAll}>
                Next
        </ReactBootStrap.Button>
        <br/>
        <ReactBootStrap.Button variant="dark" onClick={() => printRepos()} >
              print projects
        </ReactBootStrap.Button>
    </ReactBootStrap.Form> 
  );
}

export default PickProject;
