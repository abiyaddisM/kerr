import MessageCard from "../../cards/Message Card/MessageCard.jsx";
import style from './MessageContainer.module.css'
import {useEffect, useRef, useState} from "react";
import formatDateTime from "../../../services/formatTimeService.js";
import axios from "axios";
import io from 'socket.io-client';
import {useAuth} from "../../../utils/AuthContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {ArrowLeft, More, Star1} from "iconsax-react";
import {useSocket} from "../../../utils/SocketContext.jsx";
import styles from "../../general/View Sidebar/ViewSidebar.module.css";

const SOCKET_SERVER_URL = "https://auth.bizawit.com";
// eslint-disable-next-line react/prop-types
export function MessageContainer({messages,setMessages,chats,chatMessages,setChatMessages,isMobile}) {
    const [name,setName]=useState('');
    const [isOnline,setIsOnline]=useState(false);
    const [profilePicture,setProfilePicture]=useState('');
    const {user} = useAuth();
    const {id} = useParams()
    const myId = user.id;
    const scrollView = useRef();

    const navigate = useNavigate();

    function handleBackButtonClicked(){
        navigate(-1)
    }
     // Make sure to include the necessary dependencies

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
                setChatMessages((prev) => ({
                    ...prev,
                    [id]: response.data, // Replace or set the messages for the specific chat
                }));                setMessages(response.data)
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
                 <div  style={{display:"flex",gap:10,alignItems:'center'} }>
                     <ArrowLeft size="20" color="#000000" onClick={handleBackButtonClicked} style={!isMobile? {display:"none"}:{cursor:"pointer"}}/>
                     <div className={style.left_container}>
                         <img className={style.profile_image}
                              src={`https://auth.bizawit.com/api/v1/upload/600/${profilePicture}`} alt=""/>
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
                 </div>
                <div className={style.right_container}>
                    <Star1 size="24" color="var(--secondary-color)"/>
                    <More size="24" color="var(--secondary-color)" style={{transform: 'rotate(90deg)'}}/>
                </div>
            </div>
            <div className={style.message_container}>
                {message}
                <div ref={scrollView}/>
            </div>
        </div>
    )
}


