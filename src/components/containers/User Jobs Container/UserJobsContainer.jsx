import UserJobCard from '../../cards/User Job Card/UserJobCard.jsx'
import styles from './UserJobsContainer.module.css'

const UserJobsContainer = ({userJobs}) => {
    return (
        <div className={styles.container}>
            {userJobs.map((job, index)=>(
                <UserJobCard  
                key={index}
                job={job}/>
            ))}
        </div>
    )
}
export default UserJobsContainer
