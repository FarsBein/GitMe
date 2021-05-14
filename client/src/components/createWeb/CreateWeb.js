import './CreateWeb.css';
import '../SharedStyle.css';
import Url from './questions/Url'
import AboutYou from './questions/AboutYou'
import PickProject from './questions/PickProject'
import { useState } from 'react';
import {useForm} from 'react-hook-form'


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
            {formStep==1?<Url         nextHandler={nextHandler}/>:''}
            {formStep==2?<AboutYou    nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
            {formStep==3?<PickProject nextHandler={nextHandler} prevHandler={prevHandler}/>:''}
        </div>  
    </div>
  );
}

export default CreateWeb;
