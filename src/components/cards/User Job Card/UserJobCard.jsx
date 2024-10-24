import { element } from 'prop-types'
import styles from './UserJobCard.module.css'
import ProfileCard from '../Profile Card/ProfileCard'
import ProfileImage from '../../general/Profile Image/ProfileImage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const UserJobCard = ({job, onClick, assigned}) =>{

    const goToJob = (id) =>{
        onClick(id)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
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
                        <p className={styles.name}>

  {assigned 
    ? `${job.first_name ?? ''} ${job.last_name ?? ''}`.trim() 
    : job.full_name ?? ''}
</p>
                        <p className={styles.location}>{job.location}</p>
                    </div>
                    {assigned &&
                    
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
                    }
                    
                    
                </div>
                <p className={styles.title}>{job.job_title}</p>
                <p className={styles.description}>{job.job_description}</p>
                <div className={styles.messages}>
                    {/* <p>{' unread messages' }</p> */}
                    <p>{formatDate(job.created_at)}</p>
                </div>

            </div>
        </div>
    )
}
export default UserJobCard