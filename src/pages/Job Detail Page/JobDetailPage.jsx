import { useLocation, useParams } from 'react-router-dom'
import JobDetailContainer from '../../components/containers/Job Details Container/JobDetailContainer'
import JobContainer from '../../components/containers/JobContainer/JobContainer'
import styles from './JobDetailPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

const JobDetailPage = () => {

    // const location = useLocation()
    // const job = location.state?.job || {}
    
    
    const {job_id} = useParams()
    const [job, setJob] = useState(null)

    useEffect(()=>{
        const fetchJob = async () => {
            const url = `https://auth.bizawit.com/api/v1/job/${job_id}`
            // console.log(job_id)
            try{
                const response = await axios.get(url)
                setJob(response.data.data[0])
            }
            catch(error){console.error(error)
        }
    }
        fetchJob();
        
    }, [job_id])

    return (
        <div className={styles.container}>
            {job?
            <JobDetailContainer job={job} />
            :
            <p>Job not found</p> 
            }
        </div>
    )
}

export default JobDetailPage