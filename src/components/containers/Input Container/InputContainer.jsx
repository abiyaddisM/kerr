import styles from './InputContainer.module.css'
import {IconButton} from "../../buttons/Icon Button/IconButton.jsx";
import paperclipIcon from '../../../assets/icons/paperclip.svg';
import addIcon from '../../../assets/icons/add.svg';
import sendIcon from '../../../assets/icons/send.svg';
import {useRef, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Add, Paperclip2, Send2} from "iconsax-react";
import {Utils} from "../../../utils/utils.js";

// eslint-disable-next-line react/prop-types
export function InputContainer({onClick,userID,chatID,chats,setChats}) {
    //state that is bound to the input
    const [inputValue, setInputValue] = useState('');
    //state for the image uploads
    const [imageUrls, setImageUrl] = useState([]);
    //ref for file explorer call
    const fileInputRef = useRef(null);
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async ()=>{
        if(isSending)
            return;
        setIsSending(true);
        const newImageUrl = await Utils.uploadImages(imageUrls);
        onClick({message:inputValue,images: {images:newImageUrl}});

        const index = chats.findIndex(item => item.id === Number(chatID));
        const updatedItems = [...chats];
        updatedItems[index] = { ...updatedItems[index], last_sent_time: new Date().toISOString(),last_sent_message:inputValue};
        const newData = updatedItems.sort((a, b) => {
            const dateA = new Date(a.last_sent_time);
            const dateB = new Date(b.last_sent_time);
            return dateB - dateA;
        });
        setChats(newData);
        sendMessageToServer(userID,Number(chatID),inputValue,newImageUrl);
        setIsSending(false);
        setImageUrl([]);
        setInputValue('')
    }

    //for sending messages on enter key press
    const sendMessageOnEnter = (event)=>{
        if(event.key === 'Enter')
            sendMessage();
    }


    //for activating the hidden input
    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    //to get the file from local storage
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newArr = [...imageUrls,URL.createObjectURL(file)]
            setImageUrl(newArr);
        }
    };
    //for removing an image from the array
    const removeImage = (index)=>{
        const newImage = imageUrls.filter((_, i) => i !== index);
        setImageUrl(newImage);
    }
    return (
        <>
            {
                imageUrls.length !== 0
                &&
                <div className={styles.image_container}>
                    {
                        imageUrls.map((value, index) => {
                            return (
                                <img key={index} src={value} alt="" className={styles.image}
                                     onClick={() => removeImage(index)}/>
                            )
                        })
                    }
                    { isSending &&
                        <div className={styles.loader_container}>
                            <div className={styles.loader}></div>
                        </div>
                    }
                </div>
            }
            <div className={styles.input_container}>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <IconButton backgroundColor={'transparent'} backgroundColorHover={'var(--highlight-color)'} padding={'6px'} src={paperclipIcon} onClick={handleFileClick}>
                    <Paperclip2 size="28" color="var(--secondary-color)"/>

                </IconButton>
                <IconButton backgroundColor={'transparent'} backgroundColorHover={'var(--highlight-color)'} padding={'6px'} src={addIcon}>
                    <Add size="28" color="var(--secondary-color)"/>
                </IconButton>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={'Type your message here...'}
                    value={inputValue} // Bind input's value to state
                    onChange={e=>{setInputValue(e.target.value)}} // Update state on input change
                    onKeyPress={sendMessageOnEnter}
                />
                {
                        <IconButton
                            backgroundColor={'transparent'}
                            border={'1px solid var(--border-color)'}
                            padding={'8px'}
                            src={sendIcon}
                            backgroundColorHover={'var(--highlight-color)'}
                            onClick={sendMessage}
                        >
                            <Send2 size="24" color="var(--secondary-color)"/>
                        </IconButton>
                }
            </div>
        </>
    )
}
function sendMessageToServer(userID,chatID,inputValue,imageUrls){
    console.log(imageUrls)
    const data = {userID:userID,chatID:chatID,messageText:inputValue,messageImage:{images:imageUrls},messageType:'normal'};
    axios.post('https://auth.bizawit.com/api/v1/message',data)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
}
