import './CreateWeb.css';
import '../SharedStyle.css';
import Url from './questions/Url'
import AboutMe from './questions/AboutMe'
import PickProject from './questions/PickProject'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import Linkedin from './questions/Linkedin';
import UploadResume from './questions/UploadResume'

function CreateWeb() {
  const {url, aboutMe, projects} = useForm()
  const [formStep, setFormStep] = useState(1)

  const nextHandler = (event) => {
    setFormStep(formStep+1)
    console.log('................>',formStep)
  }

  const prevHandler = (event) => {
    setFormStep(formStep-1)
  }

  return (
    <div className='jumbo center'>
        <div className='container center '>
            {formStep==1?<Linkedin     nextHandler={nextHandler}/>:''}
            {formStep==2?<AboutMe      nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
            {formStep==3?<PickProject  nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
            {formStep==4?<UploadResume nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
        </div>  
    </div>
  );
}

export default CreateWeb;
