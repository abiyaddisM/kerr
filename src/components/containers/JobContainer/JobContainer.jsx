// import { useState } from "react";
import { useState } from "react";
import JobCard from "../../cards/Job Cards/JobCard.jsx";
import { PopUp } from "../../pops/Pop Up/PopUp.jsx";
import styles from './JobContainer.module.css'
import JobDetailContainer from "../Job Details Container/JobDetailContainer.jsx";


const JobContainer = ({jobs}) => {
    // const [jobs, setJobs] = useState([]);
    const [openDetails, setOpenDetails] = useState(false)

    return(
        <div className={styles.jobContainer}>
            {jobs.length !== 0? 
            (jobs.map((j)=>{
                return( 
                // <PopUp 
                // component={
                
                <JobCard key={j.user_id} job={j}/>
            // } 
                // state={openDetails} setState={setOpenDetails}>
                    // <JobDetailContainer job={j}/>
                // </PopUp>
            )
            })
            ):(
            <h1 className={styles.empty}>No jobs available.</h1>
            )}

        </div>
    );
}

export default JobContainer
