import {MessageContainer} from "../../components/containers/Message Container/MessageContainer.jsx";
import {ChatContainer} from "../../components/containers/Chat Container/ChatContainer.jsx";
import styles from './ChatPage.module.css'
import {InputContainer} from "../../components/containers/Input Container/InputContainer.jsx";
import {useEffect, useState} from "react";
import {IconButton} from "../../components/buttons/Icon Button/IconButton.jsx";
import themeIcon from "../../assets/icons/moon.svg";
import axios from "axios";
import {useAuth} from "../../utils/AuthContext.jsx";
import {useParams} from "react-router-dom";
import {number} from "prop-types";

function ChatPage(){
    const [messages,setMessages] = useState([]);
    const [chats,setChats] = useState([]);
    const [chatLoading,setChatLoading] = useState(false);
    const {user} = useAuth()
    const userID = user.id;
    const {id} = useParams();
    const [chatMessages] =useState({});


    const sendMessage = (data)=>{
        const newMessage = { user_id: userID, created_at: new Date().toISOString(), message_text: data.message,message_image:data.images };
        const updatedMessages = [...messages, newMessage]; // Create a new array
        setMessages(updatedMessages);
        chatMessages[Number(id)].push(newMessage);
    }

    useEffect(()=>{
        setChatLoading(true)
        axios.get('https://auth.bizawit.com/api/v1/chat',{params:{userID:userID}})
            .then((res=>{
                setTimeout(()=>{
                    setChats(res.data[0])
                    setChatLoading(false)
                },3000)
            }))
            .catch((error)=>{
                console.log(error);
            })
    },[])
    return (
        <div className={styles.container}>

            {/*<IconButton src={themeIcon} padding={'5px'} backgroundColor={'transparent'} backgroundColorHover={'transparent'} onClick={changeTheme}/>*/}

            <div className={styles.chat_container}>
                <ChatContainer chats={chats} isLoading={chatLoading}/>
            </div>
            {id ? (
                <>
                    <div className={styles.message_container}>
                        <MessageContainer messages={messages} setMessages={setMessages} chats={chats}
                                          chatMessages={chatMessages}/>
                    </div>
                    <div className={styles.input_container}>
                        <InputContainer onClick={sendMessage} userID={userID} chatID={id}/>
                    </div>
                </>
            )
                :
                (
                    <div className={styles.select_chat}>
                        <span>Select a chat to start messaging</span>
                    </div>
                )
            }

        </div>
    )
}

export default ChatPage;
