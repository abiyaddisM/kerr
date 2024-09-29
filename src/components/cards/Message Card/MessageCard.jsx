import './MessageCard.module.css'
import styles from './MessageCard.module.css';

// eslint-disable-next-line react/prop-types
function MessageCard ({time,images,text,left,visible,pfp}){
    // eslint-disable-next-line react/prop-types
    const image = images && images.map((value,index)=>{
        return <img key={index} className={styles.image} src={value} alt=""/>
    })
    return (
        <div className={left ? `${styles.container} ${styles.container_left}` : styles.container}>
            <img src={pfp} className={visible ? (left ? `${styles.image_icon} ${styles.image_icon_left}`: styles.image_icon) : (left ? `${styles.image_icon} ${styles.image_icon_left} ${styles.image_icon_invisible}`:` ${styles.image_icon} ${styles.image_icon_invisible}`)} alt=""/>
            <div className={left ? `${styles.info_container} ${styles.info_container_left}` : styles.info_container  }>
                <span className={styles.time}>{time}</span>
                <div className={styles.image_container}>{image}</div>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
export default MessageCard;
