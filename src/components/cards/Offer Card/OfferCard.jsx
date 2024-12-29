import BidCard from '../Bid Card/BidCard'
import { Link, useNavigate } from 'react-router-dom'
import ProfileCard from '../Profile Card/ProfileCard'
import ProfileImage from '../../general/Profile Image/ProfileImage'
import styles from './OfferCard.module.css'
import axios from 'axios'

const OfferCard = ({offer, recieved=false, onDelete=()=>{}, onAccept=()=>{}}) => {
    const user = {
            id: offer.user_id,
            image: offer.profile_picture,
            name: offer.first_name + " " + offer.middle_name + " " + offer.last_name
        }

    const navigate = useNavigate()
    

    async function  handleReject() {
        onDelete()
    }

    async function  handleCancel() {
        try{
        const url = `https://auth.bizawit.com/api/v1/job-bid/${bid.id}`
        await axios.delete(url)
    } catch(error) {console.error(error)}
        

    }

    async function handleAccept(){
        onAccept()
    }

    function handleOfferClick(){
        if(recieved)
            navigate(`/job/${offer.job_id}`)
        else
            navigate(`profile/${offer.user_id}`)
    }

    

    return (

        <div className={styles.container} 
            // onClick={handleOfferClick}
            >
            <div className={styles.profile}>
                <ProfileImage 
                    userId={offer.user_id}
                    src={offer.profile_picture}
                    size='42px'/>
            </div>

            <div  className={styles.content}>

            {!recieved ?
            
  
            <div className={styles.user_detail}>
                <p className={styles.name}>{offer.first_name+" "+offer.last_name}</p>
                <p className={styles.username}>@{offer.username}</p>
                <button className={styles.cancel_button} onClick={handleReject}>
                    Cancel
                </button>
            </div>
            :
            
            <div to={`/job/${offer.job_id}`} className={styles.offer_info} >

                <p className={styles.name}>{offer.first_name+" "+offer.last_name}</p>
                <p className={styles.job_title}>{offer.job_title}: </p>
                <p className={styles.job_description}>{offer.job_description} </p>

            

                {/* <p className={styles.job_price}>
                    Price:
                    {offer.job_price}
                </p> */}

                <div className={styles.bottom}>
                    <p className={styles.more} 
                    // onClick={navigate(`/job/${offer.job_id}`)}
                    >View more</p>
                     <div className={styles.buttons}>
                    {/* <PopUp component={ */}
                       <button className={styles.btn} type='button' onClick={handleReject}>Decline</button>
                    {/* // } */}
                    {/* state={reject} setState={setReject}>
                        <VerifyContainer />
                    </PopUp> */}
                    
                        <button className={styles.btn} type="button" onClick={handleAccept}><p>Accept</p></button>

                    </div>
                

                </div>
              
            </div>
            }
        </div>
        </div>

    )
}

export default OfferCard