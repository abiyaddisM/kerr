import { element } from 'prop-types'
import styles from './UserJobCard.module.css'
import ProfileCard from '../Profile Card/ProfileCard'
import ProfileImage from '../../general/Profile Image/ProfileImage'

const UserJobCard = ({job: {user, location, jobTitle, jobDescription, messages, date, isActive}}) =>{
    return (
        <div className={styles.job_card}>

            <ProfileImage 
                userId ={user.id}
                src={user.image}
                size='46px'/>

            <div className={styles.details}>
                <div className={styles.user_details}>
                    <div className={styles.username}>
                        <p className={styles.name}>{user.name}</p>
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