import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';

function AboutYou({nextHandler,prevHandler}) {
  const aboutMeTemplate = ""

  const [aboutMe, setAboutMe] = useState('')
  const [sAboutMe, setSAboutMe] = useState('')

  const onChangeAboutMeHandler = (event) => {
    setAboutMe(event.target.value)
  }

  const onChangeSAboutMeHandler = (event) => {
    setSAboutMe(event.target.value)
  }

  return (
      <div>
        <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>
            About You
        </h3> 
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
          <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} onChange={(e) => onChangeAboutMeHandler(e)} className='wide-textarea' placeholder="Talk about your self!"/>
          </ReactBootStrap.Form.Group>
          </ReactBootStrap.InputGroup>
        <br/>
        <br/>
        <h3>Shorter About You :)</h3> 

            <br/>
            <ReactBootStrap.InputGroup className="mb-2">
            <ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Control as="textarea" rows={2} cols={1000} onChange={(e) => onChangeSAboutMeHandler(e)} className='wide-textarea' placeholder="Talk about your self!"/>
            </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
            <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} disabled={aboutMe&&sAboutMe ? false : true}>
                Next
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>  
      </div>
  );
}

export default AboutYou;
