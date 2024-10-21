import { element } from 'prop-types'
import styles from './UserJobCard.module.css'
import ProfileCard from '../Profile Card/ProfileCard'
import ProfileImage from '../../general/Profile Image/ProfileImage'
import { useNavigate } from 'react-router-dom'

const UserJobCard = ({job, onClick}) =>{

    const goToJob = (id) =>{
        onClick(id)
    }

    return (
        <div className={styles.job_card} onClick={goToJob}>

            <ProfileImage 
                userId ={job.id}
                src={job.profile_picture}
                size='46px'/>

            <div className={styles.details}>
                <div className={styles.user_details}>
                    <div className={styles.username}>
                        <p className={styles.name}>{job.first_name + " " + job.last_name}</p>
                        <p className={styles.location}>{job.location}</p>
                    </div>
                    <p className={
                        job.contract_state == 1 ? styles.active:
                        job.contract_state == 2 ? styles.completed:
                        styles.cancelled
                    }>
                        {
                            job.contract_state == 1 ? 'Active':
                            job.contract_state == 2 ? 'Completed':
                            'Cancelled'
                        }    
                    </p>
                </div>
                <p className={styles.title}>{job.job_title}</p>
                <p className={styles.description}>{job.job_description}</p>
                <div className={styles.messages}>
                    {/* <p>{' unread messages' }</p> */}
                    <p>{job.created_at}</p>
                </div>

            </div>
        </div>
    )
}
export default UserJobCard