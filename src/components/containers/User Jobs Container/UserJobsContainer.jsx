import { useEffect } from 'react'
import UserJobCard from '../../cards/User Job Card/UserJobCard.jsx'
import styles from './UserJobsContainer.module.css'
import { useNavigate } from 'react-router-dom'

const UserJobsContainer = ({userJobs, assigned=true}) => {
    
    const navigate = useNavigate()

    const handleJobClick = (job) => {
      console.log(job.job_id)  
      navigate(`/job/${job.job_id}`);
    }


    return (
        <div className={styles.container}>
            {userJobs.length?
            userJobs.map((job)=>(
                <UserJobCard  
                key={job.id}
                job={job}
                onClick={()=>handleJobClick(job)}
                assigned={assigned}
                />
            ))
            :
            <div>No jobs found</div>
        }
        </div>
    )
}
export default UserJobsContainer
