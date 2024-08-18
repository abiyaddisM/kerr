import styles from './ChatCard.module.css'
// eslint-disable-next-line react/prop-types
function ChatCard({image,state,name,lastSentMessage,lastSentTime}){
    return (
            <div className={styles.container}>
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
    )
}
export default ChatCard;
