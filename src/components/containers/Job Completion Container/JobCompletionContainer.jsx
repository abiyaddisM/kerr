import {ArrowLeft, CloudAdd} from 'iconsax-react';
import style from './JobCompletionContainer.module.css'
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import {useRef, useState} from "react";
import {Utils} from "../../../utils/utils.js";
import * as user from "date-fns/locale";
import {useAuth} from "../../../utils/AuthContext.jsx";
import axios from "axios";

const JobCompletionContainer = ({setIsOpen, jobID}) => {
    const [url,setUrl] = useState('');
    const [message,setMessage] = useState('');
    const fileInputRef = useRef(null);
    const {user} = useAuth();
    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUrl(URL.createObjectURL(file))
        }
    };


    const closePopUp = () => {
        setIsOpen(false);
    }
    const upload = async () => {
        const [newUrl] = await Utils.uploadImages([url]);

        return newUrl;
    };
    const handleJobComplete = async () => {
        const newUrl = await upload();
        const data = {
            userID: user.id,
            image:newUrl,
            message:message
        }
        await axios.post(`https://auth.bizawit.com/api/v1/job/${jobID}/complete`, data)
        closePopUp();
    };
    return (
        <div className={style.container}>
            <input
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileChange}
            />


            {
                url !== '' ?
                    <div onClick={() => {
                        setUrl("")
                    }} className={style.image_container}>
                        <img src={url} alt="" className={style.image}/>

                    </div>
                    :
                    <div className={style.upload_container}>
                        <CloudAdd size="24" color="var(--secondary-color)"/>
                        <h1>Choose a photo or drag & drop it here</h1>
                        <p>JPEG, PNG, PDO and GIF formats, up to 50MB</p>
                        <button onClick={handleFileClick}>Browse File</button>
                    </div>
            }
            <input className={style.input} placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
            {/* <div></div> */}

            <div className={style.button_container}>
                <button className={style.button} onClick={closePopUp}>Cancel</button>
                <button className={style.button} onClick={handleJobComplete}>Deliver</button>
            </div>

        </div>
    )
}

export default JobCompletionContainer;
