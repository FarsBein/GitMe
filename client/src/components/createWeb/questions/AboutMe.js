import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import axios from 'axios';

function AboutMe({nextHandler,prevHandler}) {
  const aboutMeTemplate = ""

  const [aboutMe, setAboutMe] = useState('Talk about yourself!')
  const [headline, setHeadline] = useState('Talk about yourself!')

  const onChangeAboutMeHandler = (event) => {
    setAboutMe(event.target.value)
  }

  const onChangeHeadlineHandler = (event) => {
    setHeadline(event.target.value)
  }

  const saveChanges = async () => {
    await axios.post('http://localhost:8000/edit/about-me', {
      aboutMe,headline
    },{ withCredentials: true})
    nextHandler()
  }

  return (
      <div>
        <ReactBootStrap.Form className='form-container'>
        <h3 className='space-between'>About Me</h3> 
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
          <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Control as="textarea" rows={3} cols={1000} onChange={(e) => onChangeAboutMeHandler(e)} className='wide-textarea' value={aboutMe} /> 
          </ReactBootStrap.Form.Group>
          </ReactBootStrap.InputGroup>
        <br/>
        <br/>
        <h3>Headline</h3> 
            <br/>
            <ReactBootStrap.InputGroup className="mb-2">
            <ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Control as="textarea" rows={2} cols={1000} onChange={(e) => onChangeHeadlineHandler(e)} className='wide-textarea' value={headline} />
            </ReactBootStrap.Form.Group>
            </ReactBootStrap.InputGroup>
            <ReactBootStrap.Button variant="dark" onClick={() => saveChanges()} disabled={aboutMe&&headline ? false : true}>
                Next
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>  
      </div>
  );
}

export default AboutMe;
