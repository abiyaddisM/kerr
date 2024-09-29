import styles from './InputContainer.module.css'
import {IconButton} from "../../buttons/Icon Button/IconButton.jsx";
import paperclipIcon from '../../../assets/icons/paperclip.svg';
import addIcon from '../../../assets/icons/add.svg';
import sendIcon from '../../../assets/icons/send.svg';
import {useRef, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Add, Paperclip2, Send2} from "iconsax-react";

// eslint-disable-next-line react/prop-types
export function InputContainer({onClick,userID,chatID}) {
    //state that is bound to the input
    const [inputValue, setInputValue] = useState('');
    //state for the image uploads
    const [imageUrls, setImageUrl] = useState([]);
    //ref for file explorer call
    const fileInputRef = useRef(null);

    const sendMessage = ()=>{
        onClick({message:inputValue,images: {images:imageUrls}});
        sendMessageToServer(userID,Number(chatID),inputValue,imageUrls);
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
                        imageUrls.map((value,index)=>{
                            return (
                                <img key={index} src={value} alt="" className={styles.image} onClick={()=>removeImage(index)}/>
                            )
                        })
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
                <IconButton backgroundColor={'transparent'} backgroundColorHover={'#F4F7F9'} padding={'6px'} src={paperclipIcon} onClick={handleFileClick}>
                    <Paperclip2 size="28" color="var(--secondary-color)"/>

                </IconButton>
                <IconButton backgroundColor={'transparent'} backgroundColorHover={'#F4F7F9'} padding={'6px'} src={addIcon}>
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
                <IconButton
                    backgroundColor={'transparent'}
                    border={'1px solid var(--border-color)'}
                    padding={'8px'}
                    src={sendIcon}
                    onClick={sendMessage}
                >
                    <Send2 size="24" color="var(--secondary-color)"/>
                </IconButton>
            </div>
        </>
    )
}
function sendMessageToServer(userID,chatID,inputValue,imageUrls){
    const data = {userID:userID,chatID:chatID,messageText:inputValue,messageImage:{images:imageUrls.length === 0 ? [] : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB']},messageType:'normal'};
    axios.post('http://localhost:3000/api/v1/message',data)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
}
