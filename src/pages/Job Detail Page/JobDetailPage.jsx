import { useLocation, useParams } from 'react-router-dom'
import JobDetailContainer from '../../components/containers/Job Details Container/JobDetailContainer'
import JobContainer from '../../components/containers/JobContainer/JobContainer'
import styles from './JobDetailPage.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../utils/AuthContext'

const JobDetailPage = () => {

    // const location = useLocation()
    // const job = location.state?.job || {}
    
    const {user} = useAuth()
    const {id} = useParams()
    const [job, setJob] = useState(null)
    const [applied, setApplied] = useState(false)
    const [appliedBid, setAppliedBid] = useState(null)

    useEffect(()=>{
            

        const fetchJobDetails = async () => {
            try{
                const url = `https://auth.bizawit.com/api/v1/job/${id}`
                const response = await axios.get(url)
                setJob(response.data.data[0])
            }
            catch(error){console.error(error)
        }
    }

    

    const fetchBids = async () => {
        console.log(user.id )
        try{
            const url = `https://auth.bizawit.com/api/v1/job-bid`
            const response = await axios.get(url, {
                params: {
                    userID: user.id,
                    type: 'sender'
                },
                headers: {
                    'Content-Type' : 'application/json',
                },
            });
            
            setApplied(response.data.data.some(bid => bid.job_id == id))
            const userBid = response.data.data.find(bid => bid.user_id === user.id);
            setAppliedBid(userBid || null);
        }
        catch(error){console.error(error)}
    }
        fetchJobDetails();
        fetchBids();
        
    }, [id])

    return (
        <div className={styles.container}>
            {job?
            <JobDetailContainer job={job} isClient={user.id == job.client_id} isFreelancer={user.id == job.freelance_id} isContracted={job.client_id && job.freelance_id} hasApplied={applied} setHasApplied={setApplied} appliedBid={appliedBid}/>
            :
            <p>Job not found</p> 
            }
        </div>
    )
}

export default JobDetailPage