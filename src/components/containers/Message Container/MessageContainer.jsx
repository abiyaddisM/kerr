import MessageCard from "../../cards/Message Card/MessageCard.jsx";
import style from './MessageContainer.module.css'
import {useEffect, useRef, useState} from "react";
import formatDateTime from "../../../services/formatTimeService.js";
import axios from "axios";
import io from 'socket.io-client';
import {useAuth} from "../../../utils/AuthContext.jsx";
import {useParams} from "react-router-dom";
import {More, Star1} from "iconsax-react";

const SOCKET_SERVER_URL = "https://auth.bizawit.com";
// eslint-disable-next-line react/prop-types
export function MessageContainer({messages,setMessages,chats,chatMessages}) {
    const [name,setName]=useState('');
    const [profilePicture,setProfilePicture]=useState('');
    const {user} = useAuth();
    const {id} = useParams()
    const myId = user.id;
    const scrollView = useRef();
    const [socket, setSocket] = useState(null);


    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);
        newSocket.emit('set room', myId);

        return () => {
            newSocket.disconnect();
        };
    }, []);
    useEffect(() => {
        if (socket) {
            socket.on('message', (msg) => {
                if(msg.chat_id === Number(id)){
                    setMessages(prevItems => [...prevItems, msg]);
                }
                if(msg.chat_id in chatMessages){
                    chatMessages[msg.chat_id].push(msg);
                }
                console.log(msg)
            });
        }
    }, [socket]);
    useEffect(()=>{

        if(id){
            // eslint-disable-next-line react/prop-types
            const chatInfo = chats.find(item => item.id === Number(id))
            setName(chatInfo.first_name + ' ' + chatInfo.last_name)
            setProfilePicture(chatInfo.profile_picture)
        }
    },[id])

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
            console.log(value.message_image.images)
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
                            <span><p className={style.status}>Online</p></span>
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


