import { useEffect } from 'react'
import UserJobCard from '../../cards/User Job Card/UserJobCard.jsx'
import styles from './UserJobsContainer.module.css'
import { useNavigate } from 'react-router-dom'

const UserJobsContainer = ({userJobs,isLoading}) => {
    const loadingCard = []
    for(let i= 0; i< 20; i++){
        loadingCard.push(
            <div className={styles.loading_card}></div>
        )
    }
    const navigate = useNavigate()

    const handleJobClick = (job) => {
      console.log(job.job_id)  
      navigate(`/job/${job.job_id}`);
    }

    return (
        <div className={styles.container}>
            {!isLoading?
            userJobs.map((job)=>(
                <UserJobCard  
                key={job.id}
                job={job}
                onClick={()=>handleJobClick(job)}
                />
            ))
            :
            loadingCard
        }
        </div>
    )
}
export default UserJobsContainer
