import UserJobCard from '../../cards/User Job Card/UserJobCard.jsx'
import styles from './UserJobsContainer.module.css'

const UserJobsContainer = ({userJobs, assigned=true}) => {
    
    const navigate = useNavigate()

    const handleJobClick = (job) => {
      console.log(job.job_id)  
      navigate(`/job/${job.job_id}`);
    }


    return (
        <div className={styles.container}>
            {userJobs.map((job, index)=>(
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
