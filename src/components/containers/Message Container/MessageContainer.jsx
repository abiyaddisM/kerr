import MessageCard from "../../cards/Message Card/MessageCard.jsx";
import style from './MessageContainer.module.css'
import {useEffect, useRef, useState} from "react";
import formatDateTime from "../../../services/formatTimeService.js";
import axios from "axios";
import io from 'socket.io-client';
import {useAuth} from "../../../utils/AuthContext.jsx";
import {useParams} from "react-router-dom";
import {More, Star1} from "iconsax-react";
import {useSocket} from "../../../utils/SocketContext.jsx";

const SOCKET_SERVER_URL = "https://auth.bizawit.com";
// eslint-disable-next-line react/prop-types
export function MessageContainer({messages,setMessages,chats,chatMessages,setChats}) {
    const [name,setName]=useState('');
    const [isOnline,setIsOnline]=useState(false);
    const [profilePicture,setProfilePicture]=useState('');
    const {user} = useAuth();
    const {id} = useParams()
    const myId = user.id;
    const scrollView = useRef();
    const {socket} = useSocket();


    useEffect(() => {
        let prevMessage = -1;
        if (socket) {
            const handleMessage = (msg) => {
                if(prevMessage === msg.id)
                    return

                prevMessage = msg.id;
                const index = chats.findIndex(item => item.id === Number(msg.chat_id));
                const updatedItems = [...chats];
                updatedItems[index] = { ...updatedItems[index], last_sent_time: msg.created_at, last_sent_message:msg.message_text};
                const newData = updatedItems.sort((a, b) => {
                    const dateA = new Date(a.last_sent_time);
                    const dateB = new Date(b.last_sent_time);
                    return dateB - dateA;
                });
                setChats(newData);
                if (msg.chat_id === Number(id)) {
                    setMessages(prevItems => [...prevItems, msg]);
                    console.log(msg);
                }
                if (msg.chat_id in chatMessages) {
                    chatMessages[msg.chat_id].push(msg);
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
    }, [socket, chatMessages]); // Make sure to include the necessary dependencies

    useEffect(() => {
        if (id) {
            // Find chatInfo by id
            const chatInfo = chats.find(item => item.id === Number(id));

            // Check if chatInfo is defined before accessing its properties
            if (chatInfo) {
                setName(chatInfo.first_name + ' ' + chatInfo.last_name);
                setProfilePicture(chatInfo.profile_picture);
                setIsOnline(chatInfo.isOnline)
            } else {
                // Handle the case where no matching chat is found (optional)
                setName('');  // or set some default values
                setProfilePicture('');
            }
        }
    }, [id, chats]); // Added `chats` to dependencies if it changes over time


    useEffect(()=>{
        const fetchMessages = () => {
            axios.get('https://auth.bizawit.com/api/v1/message', {
                params:{
                    chatID:id,
                    page: 1,
                }
            }).then((response)=>{
                chatMessages[id] = response.data;
                setMessages(response.data)
            })
                .catch ((err)=> {
                    console.log('Failed to load messages',err);
                });
        };
        if(id in chatMessages){
            setMessages(chatMessages[id])
        }else{
            fetchMessages();
        }
    },[id])

    useEffect(()=>{
        scrollView.current?.scrollIntoView({ behavior: 'smooth',block: 'start'  });
    },[messages]);
    // eslint-disable-next-line react/prop-types
    const message = messages.map((value,index,array)=>{
        if(value){
            const visibility = index === array.length - 1 || array[index + 1].id !== value.id;
            return <MessageCard
                key = {index}
                time={formatDateTime(value.created_at)}
                text={value.message_text}
                images={value.message_image.images ? value.message_image.images:[]}
                left={value.user_id !== myId}
                visible={visibility}
                pfp={value.user_id === user.id ? user.profile_picture : profilePicture}
            />
        }
    })

    return (
        <div className={style.container}>
            <div className={style.info_container}>
                <div className={style.left_container}>
                    <img className={style.profile_image} src={`https://auth.bizawit.com/api/v1/upload/600/${profilePicture}`} alt=""/>
                    <div className={style.stat_container}>
                            <h2 className={style.title}>{name}</h2>
                            <span>{
                                isOnline ?
                                    <p className={style.status_online}>Online</p>
                                    :
                                    <p className={style.status_offline}>Offline</p>
                            }</span>
                    </div>
                </div>
                <div className={style.right_container}>
                    <Star1 size="24" color="var(--secondary-color)"/>
                    <More size="24" color="var(--secondary-color)" style={{transform:'rotate(90deg)'}}/>
                </div>
            </div>
            <div className={style.message_container} >
                {message}
                <div ref={scrollView}/>
            </div>
        </div>
    )
}


