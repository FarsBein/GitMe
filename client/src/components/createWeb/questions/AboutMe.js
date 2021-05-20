import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';

function AboutMe({nextHandler,prevHandler}) {
  const aboutMeTemplate = ""

  const [aboutMe, setAboutMe] = useState('Talk about your self!')
  const [shortAboutMe, setShortAboutMe] = useState('Talk about your self!')

  const onChangeAboutMeHandler = (event) => {
    setAboutMe(event.target.value)
  }

  const onChangeShortAboutMeHandler = (event) => {
    setShortAboutMe(event.target.value)
  }

  return (
      <div>
        <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>
            About Me
        </h3> 
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
          <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} onChange={(e) => onChangeAboutMeHandler(e)} className='wide-textarea' value={aboutMe} /> 
          </ReactBootStrap.Form.Group>
          </ReactBootStrap.InputGroup>
        <br/>
        <br/>
        <h3>Headline </h3> 
            <br/>
            <ReactBootStrap.InputGroup className="mb-2">
            <ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Control as="textarea" rows={2} cols={1000} onChange={(e) => onChangeShortAboutMeHandler(e)} className='wide-textarea' value={shortAboutMe} />
            </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
            <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} disabled={aboutMe&&shortAboutMe ? false : true}>
                Next
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>  
      </div>
  );
}

export default AboutMe;
