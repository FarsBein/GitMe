import './CreateWeb.css';
import '../SharedStyle.css';
import { useState } from 'react';



function ReactForm() {
  const [formStep, setFormStep] = useState(1)

  const nextHandler = (event) => {
    setFormStep(formStep+1)
  }

  const prevHandler = (event) => {
    setFormStep(formStep-1)
  }

  return (
    <div className='jumbo center'>
        <div className='container center '>
            {formStep==1?'':''}
            {formStep==2?'':''}
            {formStep==3?'':''}
            cool
        </div>  
    </div>
  );
}

export default ReactForm;
