import ProfileImage from '../../general/Profile Image/ProfileImage';
import { useEffect, useState } from 'react';
import ProfileCard from '../Profile Card/ProfileCard';
import styles from './BidCard.module.css'
import JobCard from '../Job Cards/JobCard';
import { PopUp } from '../../pops/Pop Up/PopUp';
import { PopOver } from '../../pops/Pop Over/PopOver';
import axios from 'axios';
import VerifyContainer from '../../containers/Verify Container/VerifyContainer';
import { Link, useNavigate } from 'react-router-dom';



const BidCard = ({bid, received=false, onDelete=()=>{}}) => {
    const url = 'https://auth.bizawit.com/api/v1/job-offer'
    const [isExpanded, setIsExpanded] = useState(false);
    const [jobVisible, setJobVisible] = useState(false)

    const [reject, setReject] = useState(false)
        
    const navigate = useNavigate()

    
    
    async function handleReject() {
        onDelete()

    }

    async function handleAccept(){
        // const offer = {
        //     user_id: 1,
        //     job_id: bid.job_id
        // }
        // await axios.post(url, offer)
        // .then(res=>console.log("posted",  bid.job_id))
        // .catch(err=>console.error(err))
        
        // navigate(`/contract`, {state: user})
    }

    // useEffect(()=>{
    //     console.log(bid)
    // }, [])



    return (
        <div className={styles.bidCard}>
            {/* <div className={styles.date}>
                {bid.created_at}
            </div> */}
            <div>
            {received ?
                <div className={styles.profile}>
                    <ProfileImage
                        userId={bid.id}
                        src={bid.profile_picture}
                        size='30px'/>
                    <p className={styles.user_name}>{bid.first_name + " " + bid.last_name}</p>
                </div>
                :
                <div className={styles.title_container}>
                <p className={styles.job_title}>{bid.job_title} </p>
                {/* <p className={styles.job_info}>{bid.job_description} </p> */}

            </div>
            
        }
        </div>

        {/* {!received && */}
        {/* <div className={styles.job_info}> */}
                    
                    
                    {/* <Link to={`/job/${bid.job_id}`}
                    className={styles.go_to_job}>Go to Job...</Link> */}
                   

        {/* </div> */}

        {/* } */}
        <div className={styles.pitch_info}>
            <p className={styles.pitch}>
                {bid.bid_pitch}
            </p>
            {/* <p className={styles.price}>
                {bid.bid_counter_price}

            </p> */}

        </div>

        
    {received ?
            <div className={styles.buttons}>
                    {/* <PopUp component={ */}
                       <button className={styles.btn} type='button' onClick={handleReject}>Reject</button>
                    {/* // } */}
                    {/* state={reject} setState={setReject}>
                        <VerifyContainer />
                    </PopUp> */}
                    
                    <button className={styles.btn} type="button" onClick={handleAccept}><p>Accept</p></button>

            </div>
            :
            <div className={styles.buttons2}>
                <p>
                    Pending
                </p>
                <button className={styles.cancel_button} onClick={handleReject}>
                    Cancel
                </button>

            </div>
}

        </div>

    )
}

export default BidCard;
