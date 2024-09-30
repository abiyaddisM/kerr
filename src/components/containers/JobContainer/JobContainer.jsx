// import { useState } from "react";
import JobCard from "../../cards/Job Cards/JobCard.jsx";
import styles from './JobContainer.module.css'


const JobContainer = ({jobs}) => {
    // const [jobs, setJobs] = useState([]);

    return(
        <div className={styles.jobContainer}>
            {jobs.length !== 0? 
            (jobs.map((j)=>{
                return( <JobCard
                key={j.id}
                job={j}
                />)
            })
            ):(
            <h1 className={styles.empty}>No jobs available.</h1>
            )}

        </div>
    );
}

export default JobContainer
