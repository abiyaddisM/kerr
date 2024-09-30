import styles from './ChatCard.module.css'
import './ChatCard.module.css'
import {NavLink} from "react-router-dom";
// eslint-disable-next-line react/prop-types
function ChatCard({image,state,name,lastSentMessage,lastSentTime,onClick,chatID}){

    return (
        <NavLink
            to={`/chat/${chatID}`}
            className={({ isActive }) => isActive ? styles.active_link : ""}
            style={{textDecoration: 'none', display: 'block'}}
        >
            <div className={styles.container} onClick={onClick}>
                <div className={styles.image_container}>
                    <img className={styles.image} src={image} alt=""/>
                    <div className={state ? `${styles.indicator} ${styles.indicator_on}` : `${styles.indicator} ${styles.indicator_off}`}/>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.name_container}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.last_sent_message}>{lastSentMessage}</p>
                    </div>
                    <p className={styles.last_sent_time}>{lastSentTime}</p>
                </div>
            </div>
        </NavLink>

    )
}
export default ChatCard;
