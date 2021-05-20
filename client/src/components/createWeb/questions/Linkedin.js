import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
// import avatar from '../../../images/avatar.svg'
// <ReactBootStrap.Image src={avatar} className={'linkedin-avatar'} roundedCircle/>

const urls = ['seed', 's']

function Linkedin({nextHandler}) {
    const [loading,setLoading] = useState(false)
    const [userExist,setUserExist] = useState(false)
    const [currentUsername, setCurrentUsername] = useState('')
    const [firstTry, setFirstTry] = useState(true)

    const checkButtonHandler = async (e) => {
      e.preventDefault()
      setFirstTry(false)
      setLoading(true) // button loading
      const match = await urls.find(url => url == currentUsername.toLowerCase())
      setLoading(false)
      if (match) {
        setUserExist(true)
      } else {
        setUserExist(false)
      }
    }
   
    const onChangeHandler = (event) => {
      setCurrentUsername(event.target.value)
    }

  return (
      <ReactBootStrap.Form className='form-container'>
          <h3 className='space-between'>
            About me from Linkedin
          </h3> 
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
            <ReactBootStrap.InputGroup.Prepend>
                <ReactBootStrap.InputGroup.Text> linkedin.com/in/</ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>

            <ReactBootStrap.FormControl id="url" placeholder="Username"  
                type="text" required isValid={userExist} 
                isInvalid={firstTry? false : !userExist}  
                onChange={(e) => onChangeHandler(e)}
                />

            <ReactBootStrap.Form.Control.Feedback type="invalid">
                &nbsp; User linkedin doesn't exist!
            </ReactBootStrap.Form.Control.Feedback>

            <br/>
          </ReactBootStrap.InputGroup>
          <p>search your linkedin and we will get your bio for you</p>
          <ReactBootStrap.Button type="submit" variant="dark" onClick={(e) => checkButtonHandler(e)}>
            {loading ? <ReactBootStrap.Spinner animation="border" /> : 'Check Availability'}
          </ReactBootStrap.Button>
          &nbsp;
          <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} disabled={!userExist}>
            Next
          </ReactBootStrap.Button>
      </ReactBootStrap.Form>      
  );
}

export default Linkedin;
