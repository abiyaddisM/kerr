import {MessageContainer} from "../../components/containers/Message Container/MessageContainer.jsx";
import {ChatContainer} from "../../components/containers/Chat Container/ChatContainer.jsx";
import styles from './ChatPage.module.css'
import {InputContainer} from "../../components/containers/Input Container/InputContainer.jsx";
import {useEffect, useState} from "react";
import {IconButton} from "../../components/buttons/Icon Button/IconButton.jsx";
import themeIcon from "../../assets/icons/moon.svg";
import axios from "axios";

function ChatPage(){
    const [selectedChat,setSelectedChat] = useState(2)
    const [messages,setMessages] = useState([]);
    const [chats,setChats] = useState([]);
    const userID = 1;


    const sendMessage = (data)=>{
        const newMessage = { user_id: 1, created_at: new Date().toISOString(), message_text: data.message,message_image:data.images };
        const updatedMessages = [...messages, newMessage]; // Create a new array
        setMessages(updatedMessages);
    }

    return (
        <div className={styles.container}>
            
            {/*<IconButton src={themeIcon} padding={'5px'} backgroundColor={'transparent'} backgroundColorHover={'transparent'} onClick={changeTheme}/>*/}

            <div className={styles.message_container}>
                <MessageContainer selectedChat={selectedChat} messages={messages} setMessages={setMessages}/>
            </div>
            <div className={styles.chat_container}>
                <ChatContainer/>
            </div>
            <div className={styles.input_container}>
                <InputContainer onClick={sendMessage} userID={userID} chatID={selectedChat}/>
            </div>
        </div>
    )
}

export default ChatPage;
