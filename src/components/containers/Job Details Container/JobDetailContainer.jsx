import JobCard from '../../cards/Job Cards/JobCard';
import style from './JobDetailContainer.module.css'

const JobDetailContainer = ({job}) => {
    return (
        <div className={style.container}>
            <JobCard className={style.job} job={job}/>
        </div>
    )
}

export default JobDetailContainer;