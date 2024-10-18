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

const user = 
  {
      id: '1',
      image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
      name: 'Aaron Mesfin'
  }

const job =    {
        id: '4',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 2,
        user: user,
        keywords: ['Realistic', 'Portrait', '3D', 'Oil'],
        hourlyrate: 950,
        totalPrice: 3000,
        successrate: 90
    }

const BidCard = ({bid, received=false}) => {
    const url = 'https://auth.bizawit.com/api/v1/job-offer'
    const [isExpanded, setIsExpanded] = useState(false);
    const [jobVisible, setJobVisible] = useState(false)

    const [reject, setReject] = useState(false)
        
    const navigate = useNavigate()

    
    
    async function handleReject() {


    }

    async function handleAccept(){
        // const offer = {
        //     user_id: 1,
        //     job_id: bid.job_id
        // }
        // await axios.post(url, offer)
        // .then(res=>console.log("posted",  bid.job_id))
        // .catch(err=>console.error(err))
        
        navigate(`/contract`, {state: user})
    }

    // useEffect(()=>{
    //     console.log(bid)
    // }, [])

    const profilePic = `https://auth.bizawit.com/api/v1/upload/original/${bid.profile_picture}`


    return (
        <div className={styles.bidCard}>
            {/* <div className={styles.date}>
                {bid.created_at}
            </div> */}
            <div>
            {received ?
            <div className={styles.profile}>
                <ProfileImage 
                    userId={user.id}
                    src={profilePic}
                    size='30px'/> 
                <p className={styles.user_name}>{user.name}</p>
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
                <button className={styles.cancel_button}>
                    Cancel
                </button>

            </div>
}

        </div>

    )
}

export default BidCard;