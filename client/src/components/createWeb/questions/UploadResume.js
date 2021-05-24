import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import upload from '../../../images/upload.svg'
import checkmark from '../../../images/checkmark.svg'

function UploadResume({nextHandler,prevHandler}) {
    const [uploadComplete, setUploadComplete] =  useState(false)
    const [resume, setResume] = useState(undefined)

    const fileHandler = (e) => {
        const fileType = ['application/pdf']
        const selectedFile = e.target.files[0]
        if (selectedFile && fileType.includes(selectedFile.type)) {
            setUploadComplete(true)
            console.log('we have the file now:',selectedFile)
        } else {
            setUploadComplete(false)
            console.log('please select a file')
        }
    }

    return (
        <div>
            <ReactBootStrap.Form className='form-container center-col' >
                <h2>Upload Resume</h2>
                <p>click to upload</p>
                <input type='file' onChange={(e) => fileHandler(e)} />
                <ReactBootStrap.Image src={upload} className={'upload-icon'} thumbnail/>
                <br/>
                <ReactBootStrap.Button variant="dark" onClick={() => ''} className='upload-done-button' disabled={!uploadComplete}>
                    upload and done
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>  
        </div>
    );
}

export default UploadResume;
