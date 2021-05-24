import './CreateWeb.css';
import '../SharedStyle.css';
import Url from './questions/Url'
import AboutMe from './questions/AboutMe'
import PickProject from './questions/PickProject'
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'
import Linkedin from './questions/Linkedin';
import UploadResume from './questions/UploadResume'
import axios from 'axios';
import { Redirect } from 'react-router';

function CreateWeb() {
  const {url, aboutMe, projects} = useForm()
  const [formStep, setFormStep] = useState(1)
  const [loggedIn, setLoggedIn] = useState(true)
  const [repos, setRepos] = useState(undefined)
  const [username, setUsername] = useState(undefined)

  const nextHandler = () => {
    setFormStep(formStep+1)
  }

  const prevHandler = (event) => {
    setFormStep(formStep-1)
  }

  const connectCheck = async () => {
    try {
      const res = await axios.get('http://localhost:8000/profile',{ withCredentials: true})
      setRepos(res.data.repos)
      setUsername(res.data.username)
      setLoggedIn(true)
      console.log('/profile data:', res.data)
      console.log('res.data.repos:', res.data.repos)
    } catch(err) {
      setLoggedIn(false)
      console.log('err.message', err.message)
      window.location = "http://localhost:3000"
    }
  }

  useEffect(() => {
    connectCheck()
  }, [])

  return (
    <div className='jumbo center'>
        <div className='container center '>
            {loggedIn ? '':<Redirect to='/'/>}
            {formStep==1?<Linkedin     nextHandler={nextHandler}/>: ''}
            {formStep==2?<AboutMe      nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
            {formStep==3?<PickProject  nextHandler={nextHandler} prevHandler={prevHandler} repos={repos}/>:''}
            {formStep==4?<UploadResume nextHandler={nextHandler} prevHandler={prevHandler} username={username}/>:''}
            {formStep==5?<Redirect to='/dashboard'/>:''}
        </div>  
    </div>
  );
}

export default CreateWeb;
