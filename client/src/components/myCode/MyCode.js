import './MyCode.css';
import {genData} from './genData';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyCode() {

  const [textArea, setTextarea] = useState(undefined)

  const connectCheck = async () => {
    try {
      const res = await axios.get('https://jl9fu2pz4g.execute-api.us-east-2.amazonaws.com/dev/profile',{ withCredentials: true})
      setTextarea('const data = '+JSON.stringify(genData(res.data), null, 3))
      console.log('data:','const Data ='+JSON.stringify(genData(res.data)))
    } catch(err) {
      console.log('err.message', err.message)
      window.location = "https://admiring-bose-672fd3.netlify.app"
    }
  }

  useEffect(() => {
    connectCheck()
  }, [])

  return (
      <div className='container myCode-container'>
      <div className='instructions-container'>
          <div>
            <h3>To build and host your own website you will have to follow these four steps:</h3>
            <br/>
            <p>1. Download the following files: &nbsp;
                <a href='https://drive.google.com/uc?export=download&id=1XU2cbJl3hI39XR3_LhxbzEt1KO9r8NCP' target='_blank'>
                  Template.html
                </a>,&nbsp;
                <a href='https://drive.google.com/uc?export=download&id=10zxR-5-rcCvk90Kjevcs3rkGahsuJj4R' target='_blank'>
                  Styling.css
                </a>
                  &nbsp;and&nbsp;                 
                <a href='https://drive.google.com/uc?export=download&id=1hCOqgB9YBI1pm3sANovCaVPW98FHXl_w' target='_blank'>
                  Script.js
                </a>
            </p>
            <p>2. Copy your uniquely generated data to a file and name it "Data.js"</p>
            <p>3. Host your static website on Github Page</p>
            <p>4. Enjoy!</p>         
          </div>
          <div>
            <div>
              Download &nbsp;
                <a href='https://drive.google.com/uc?export=download&id=1XU2cbJl3hI39XR3_LhxbzEt1KO9r8NCP' target='_blank'>
                  Template.html
                </a>
            </div>
            <div>
              Download &nbsp;
                <a href='https://drive.google.com/uc?export=download&id=10zxR-5-rcCvk90Kjevcs3rkGahsuJj4R' target='_blank'>
                  Styling.css
                </a>
            </div>
            <div>
              Download &nbsp;
                <a href='https://drive.google.com/uc?export=download&id=1hCOqgB9YBI1pm3sANovCaVPW98FHXl_w' target='_blank'>
                  Script.js
                </a>
            </div>
          </div>          
      </div>

        <br/>
        
        <h5>Data.js</h5>
        <textarea rows="30" value={textArea}></textarea>
      </div>
  );
}

export default MyCode;
