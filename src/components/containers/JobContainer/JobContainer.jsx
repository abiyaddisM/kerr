// import { useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../../cards/Job Cards/JobCard.jsx";
import { PopUp } from "../../pops/Pop Up/PopUp.jsx";
import styles from './JobContainer.module.css'
import JobDetailContainer from "../Job Details Container/JobDetailContainer.jsx";


const JobContainer = ({jobs,isLoading}) => {
   
    const navigate = useNavigate();

    const handleJobClick = (job) => {
      navigate(`/job/${job.job_id}`);
    }

    const loadingCard = []
    for(let i= 0; i< 20; i++){
        loadingCard.push(
            <div className={styles.loading_card}></div>
        )
    }


    return(
        <div className={styles.jobContainer} style={jobs.length !== 0 ? {height:'fit-content'} : {height:'100%'}}>
            {
                isLoading ?
                    loadingCard
                    :
                    jobs.length !== 0?
                            (
                                jobs.map((j)=>{
                                    return(
                                        <JobCard key={j.job_id} job={j} onClick={()=>handleJobClick(j)}/>
                                    )
                                })
                            ):(
                                <div className={styles.empty_container}>
                                    <h1 className={styles.empty}>No jobs available.</h1>
                                </div>
                            )
            }

        </div>
    );
}

export default JobContainer
