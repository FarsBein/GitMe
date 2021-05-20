import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import upload from '../../../images/upload.svg'
import checkmark from '../../../images/checkmark.svg'

function UploadResume({nextHandler,prevHandler}) {
    const [uploadComplete, setUploadComplete] =  useState(false)

    return (
        <div>
            <ReactBootStrap.Form className='form-container center-col' onClick={() => setUploadComplete(!uploadComplete)}>
                <h2>Upload Resume</h2>
                {
                    uploadComplete ? 
                        <ReactBootStrap.Image src={checkmark} className={'upload-icon'} thumbnail/> : 
                        <ReactBootStrap.Image src={upload} className={'upload-icon'} thumbnail/>
                }
            </ReactBootStrap.Form>  
        </div>
    );
}

export default UploadResume;
