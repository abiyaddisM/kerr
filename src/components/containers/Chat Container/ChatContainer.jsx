import styles from './ChatContainer.module.css'
import './ChatContainer.module.css'
import ChatCard from "../../cards/Chat Card/ChatCard.jsx";
import axios from "axios";
import {useAuth} from "../../../utils/AuthContext.jsx";
import {useEffect, useState} from "react";
import formatDateTime from "../../../services/formatTimeService.js";
import {NavLink, useNavigate} from "react-router-dom";
export function ChatContainer({chats, isLoading}) {
    const {user} = useAuth();
    const load = [];
    for (let i = 0; i < 11  ; i++) {
        load.push(<div className={styles.loading}></div>)
    }
    return (
           <div className={styles.container}>
               {/* eslint-disable-next-line react/prop-types */}
               {chats.map((value=>{
                   return(

                           <ChatCard
                               key={value.id}
                               chatID={value.id}
                               image={value.profile_picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'}
                               state={false}
                               name={value.first_name + ' ' + value.last_name}
                               lastSentMessage={value.last_sent_message || '...'}
                               lastSentTime={formatDateTime(value.created_at)}
                           />
                      )
               }))}
               {isLoading && load}
           </div>

    )
}
