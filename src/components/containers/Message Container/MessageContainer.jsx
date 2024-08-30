import MessageCard from "../../cards/Message Card/MessageCard.jsx";
import style from './MessageContainer.module.css'
import {useEffect, useRef, useState} from "react";
import formatDateTime from "../../../services/formatTimeService.js";
import axios from "axios";
// eslint-disable-next-line react/prop-types
export function MessageContainer({messages,setMessages,selectedChat}) {
    const [chatMessages,setChatMessages] = useState({});
    const chatID = 2;
    const myId = 1;
    const scrollView = useRef();
    useEffect(()=>{
        const fetchMessages = () => {
            axios.get('http://localhost:3000/api/v1/message', {
                params:{
                    chatID:chatID,
                    page: 1,
                }
            }).then((response)=>{
                chatMessages[chatID] = response.data;
                setMessages(response.data)
            })
                .catch ((err)=> {
                    console.log('Failed to load messages',err);
                });
        };
        if(chatID in chatMessages){
            console.log('Hey')
        }else{
            fetchMessages();
        }
    },[selectedChat])
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
            />
        }
    })

    return (
        <div className={style.container} >
            {message}
            <div ref={scrollView}/>
        </div>
    )
}


