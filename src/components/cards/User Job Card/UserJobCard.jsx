import { element } from 'prop-types'
import styles from './UserJobCard.module.css'

const UserJobCard = ({job: {userImage, userName, location, jobTitle, jobDescription, messages, date, isActive}}) =>{
    return (
        <div className={styles.job_card}>
            <img 
            className={styles.profile_image} 
            src={userImage}
            alt="profile image" />

            <div className={styles.details}>
                <div className={styles.user_details}>
                    <div className={styles.username}>
                        <p className={styles.name}>{userName}</p>
                        <p className={styles.location}>{location}</p>
                    </div>
                    <p className={
                        isActive == true ? styles.active:
                        isActive == false? styles.cancelled:
                        styles.completed
                    }>
                        {
                            isActive === true? 'Active':
                            isActive === false? 'Cancelled':
                            'Completed'
                        }    
                    </p>
                </div>
                <p className={styles.title}>{jobTitle}</p>
                <p className={styles.description}>{jobDescription}</p>
                <div className={styles.messages}>
                    <p>{messages>0 && messages+ ' unread messages' }</p>
                    <p>{date}</p>
                </div>

            </div>
        </div>
    )
}
export default UserJobCard