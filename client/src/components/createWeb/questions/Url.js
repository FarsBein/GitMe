import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
const urls = ['coolKid','damnson','cool']


function Url({nextHandler}) {
    const [loading,setLoading] = useState(false)
    const [nameAvailable,setNameAvailable] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('')
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+/;
    const [firstTry, setFirstTry] = useState(true)

    const checkButtonHandler = async (e) => {
      e.preventDefault()
      setFirstTry(false)
      setLoading(true)
      const match = await urls.find(url => url == currentUrl.toLowerCase())
      setLoading(false)
      if (match == undefined && !format.test(currentUrl) && currentUrl !=='') {
        setNameAvailable(true)
      } else {
        setNameAvailable(false)
      }
    }
   
    const onChangeHandler = (event) => {
      setCurrentUrl(event.target.value)
    }

  return (
      <ReactBootStrap.Form className='form-container'>
          <h3 className='space-between'>
            Your Unique URL
          </h3> 
          <br/>
          <ReactBootStrap.InputGroup className="mb-2">
          <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text>www.gitme.ml/</ReactBootStrap.InputGroup.Text>
          </ReactBootStrap.InputGroup.Prepend>
          <ReactBootStrap.FormControl id="url" placeholder="Username"  
            type="text" required isValid={nameAvailable} 
            isInvalid={firstTry? false : !nameAvailable}  
            onChange={(e) => onChangeHandler(e)}
            />
          <ReactBootStrap.Form.Control.Feedback type="invalid">
              &nbsp;Username is Already Taken or It Cant be used
          </ReactBootStrap.Form.Control.Feedback>
          <br/>
          </ReactBootStrap.InputGroup>
          <p>check first before moving to next</p>
          <ReactBootStrap.Button type="submit" variant="dark" onClick={(e) => checkButtonHandler(e)}>
            {loading ? <ReactBootStrap.Spinner animation="border" /> : 'Check Availability'}
          </ReactBootStrap.Button>
          &nbsp;
          <ReactBootStrap.Button variant="dark" onClick={() => nextHandler()} disabled={!nameAvailable}>
            Next
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>      
  );
}

export default Url;
