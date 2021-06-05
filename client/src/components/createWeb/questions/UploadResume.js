import './Questions.css';
import * as ReactBootStrap from "react-bootstrap"
import { useState } from 'react';
import upload from '../../../images/upload.svg'
import checkmark from '../../../images/checkmark.svg'
import axios from 'axios';
import {CLOUD_NAME} from '../../../secret'

function UploadResume({nextHandler,prevHandler, username}) {
    const [uploadComplete, setUploadComplete] =  useState(false)
    const [resume, setResume] = useState(undefined)
    const [loading,setLoading] = useState(false)

    const fileHandler = (e) => {
        const fileType = ['application/pdf']
        const selectedFile = e.target.files[0]
        if (selectedFile && fileType.includes(selectedFile.type)) {
            setUploadComplete(true)
            console.log('we have the file now:',selectedFile)
            setResume(selectedFile)
        } else {
            setUploadComplete(false)
            console.log('please select a file')
        }
    }

    const uploadToCloudinary = async () => {
        let formData = new FormData();
        formData.append('file',resume)
        formData.append('upload_preset','git-me')
        const cloudName = CLOUD_NAME

        const uploadedFile = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData)
        console.log('uploaded file:',uploadedFile.data.url)
        return uploadedFile.data.url
    }

    const saveChanges = async () => {
        setLoading(true)
        let formData = new FormData();
        formData.append('file',resume)
        console.log('formData:',formData.values())
        const updatedWebsite = await axios.post('https://git-me-to.herokuapp.com/edit/upload-resume', {
            file: await uploadToCloudinary(),
            username
        })
        console.log('updatedWebsite:',updatedWebsite.data)
        setLoading(false)
        nextHandler()
    }

    return (
        <div>
            <ReactBootStrap.Form className='form-container center-col' >
                <h2>Upload Resume</h2>
                <p>click to upload</p>
                <input type='file' onChange={(e) => fileHandler(e)} />
                <ReactBootStrap.Image src={upload} className={'upload-icon'} thumbnail/>
                <br/>
                <ReactBootStrap.Button variant="dark" onClick={() => saveChanges()} className='upload-done-button' disabled={!uploadComplete}>
                    {loading ? <ReactBootStrap.Spinner animation="border" /> : 'upload and done'}
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>  
        </div>
    );
}

export default UploadResume;
