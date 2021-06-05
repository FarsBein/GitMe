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
  const [formStep, setFormStep] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true)
  const [repos, setRepos] = useState(undefined)
  const [username, setUsername] = useState(undefined)

  const nextHandler = () => {
    setFormStep(formStep+1)
  }

  const prevHandler = () => {
    setFormStep(formStep-1)
  }

  const connectCheck = async () => {
    try {
      const profile = await axios.get('https://git-me-to.herokuapp.com/profile',{ withCredentials: true})
      const repos = await axios.get('https://git-me-to.herokuapp.com/profile/repos',{ withCredentials: true})
      setRepos(repos.data)
      setUsername(profile.data.username)
      setLoggedIn(true)
      nextHandler()
      console.log('connectCheck profile:', profile.data)
      console.log('connectCheck repos:', repos.data)
    } catch(err) {
      setLoggedIn(false)
      console.log('err.message', err.message)
      window.location = "https://admiring-bose-672fd3.netlify.app"
    }
  }

  useEffect(() => {
    connectCheck()
  }, [])

  return (
    <div className='jumbo center'>
        <div className='container center '>
            {loggedIn ? '':<Redirect to='/'/>}
            {formStep==0?'LOADING YOUR REPOSITORIES, PLEASE GIVE US 10 SECONDS...': ''}
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
