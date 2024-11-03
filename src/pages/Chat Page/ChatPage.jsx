import {MessageContainer} from "../../components/containers/Message Container/MessageContainer.jsx";
import {ChatContainer} from "../../components/containers/Chat Container/ChatContainer.jsx";
import styles from './ChatPage.module.css'
import {InputContainer} from "../../components/containers/Input Container/InputContainer.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../../utils/AuthContext.jsx";
import {useParams} from "react-router-dom";
import {useSocket} from "../../utils/SocketContext.jsx";

function ChatPage(){
    const [messages,setMessages] = useState([]);
    const [chats,setChats] = useState([]);
    const [chatLoading,setChatLoading] = useState(false);
    const {user} = useAuth()
    const userID = user.id;
    const {id} = useParams();
    const [chatMessages,setChatMessages] =useState({});
    const {socket} = useSocket();
    const [prevMessage,setPrevMessage] = useState(-1);
    const sendMessage = (data)=>{
        const newMessage = { user_id: userID, created_at: new Date().toISOString(), message_text: data.message,message_image:data.images };
        const updatedMessages = [...messages, newMessage]; // Create a new array
        setMessages(updatedMessages);

        setChatMessages((prev) => ({
            ...prev,
            [Number(id)]: [...(prev[Number(id)] || []), newMessage], // Ensure immutability
        }));    }

    useEffect(()=>{
        setChatLoading(true)
        axios.get('https://auth.bizawit.com/api/v1/chat',{params:{userID:userID}})
            .then((res=>{
                    console.log(res.data[0])
                    const newData = res.data[0].sort((a, b) => {
                        const dateA = new Date(a.last_sent_time);
                        const dateB = new Date(b.last_sent_time);
                        return dateB - dateA;
                    });
                    setChats(newData)
                    setChatLoading(false)
            }))
            .catch((error)=>{
                console.log(error);
            })
    },[]);


    useEffect(() => {
        if (socket) {
            const handleMessage = (msg) => {
                const index = chats.findIndex(item => item.userID === msg.userID);
                const updatedItems = [...chats];  // Create a copy of the array
                updatedItems[index] = { ...updatedItems[index], isOnline: msg.online };
                setChats(updatedItems);
            };
            socket.on('online', handleMessage);
            for (const value of chats) {
                socket.emit('joinOnlineRoom', {room:'online-' + value.userID,id:value.userID});
            }

        }
    },[chats,socket]);


    useEffect(() => {
        if (socket) {
            const handleMessage = (msg) => {
                if(prevMessage === msg.id)
                    return

                setPrevMessage(msg.id);

                setChats((prevChats) => {
                    const index = prevChats.findIndex(item => item.id === Number(msg.chat_id));
                    if (index === -1) return prevChats; // Return if the chat isn't found

                    const updatedChats = [...prevChats];
                    updatedChats[index] = {
                        ...updatedChats[index],
                        last_sent_time: msg.created_at,
                        last_sent_message: msg.message_text,
                    };

                    return updatedChats.sort((a, b) =>
                        new Date(b.last_sent_time) - new Date(a.last_sent_time)
                    );
                });
               if(id){
                   if (msg.chat_id === Number(id)) {
                       setMessages(prevItems => [...prevItems, msg]);
                       console.log(msg);
                   }
                   if (msg.chat_id in chatMessages) {
                       setChatMessages((prev) => ({
                           ...prev,
                           [msg.chat_id]: [...(prev[msg.chat_id] || []), msg], // Ensure immutability
                       }));                   }
               }
                console.log(msg);
            };

            // Register the socket listener
            socket.on('message', handleMessage);

            // Clean up the event listener on component unmount or when socket changes
            return () => {
                socket.off('message', handleMessage);
            };
        }
    }, [socket, chatMessages]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <div className={!isMobile ? styles.container : (!id ? styles.container_id : styles.container)}>

            {/*<IconButton src={themeIcon} padding={'5px'} backgroundColor={'transparent'} backgroundColorHover={'transparent'} onClick={changeTheme}/>*/}

            <div className={styles.chat_container} style={id && isMobile ? {display:"none"} : {}}>
                <ChatContainer chats={chats} isLoading={chatLoading} />
            </div>
            {id ? (
                <>
                    <div className={styles.message_container} >
                        <MessageContainer messages={messages} setMessages={setMessages} chats={chats}
                                          chatMessages={chatMessages} setChatMessages={setChatMessages} isMobile={isMobile}/>
                    </div>
                    <div className={styles.input_container}>
                        <InputContainer onClick={sendMessage} userID={userID} chatID={id} chats={chats} setChats={setChats}/>
                    </div>
                </>
            )
                :
                (
                    <div className={styles.select_chat} style={isMobile ? {display:"none"} : {}}>
                        <span>Select a chat to start messaging</span>
                    </div>
                )
            }

        </div>
    )
}

export default ChatPage;
