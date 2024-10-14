import BidCard from '../Bid Card/BidCard'
import { Link, useNavigate } from 'react-router-dom'
import ProfileCard from '../Profile Card/ProfileCard'
import styles from './OfferCard.module.css'

const OfferCard = ({offer, recieved=false}) => {
    const user = {
            id: offer.user_id,
            image: offer.profile_picture,
            name: offer.first_name + " " + offer.middle_name + " " + offer.last_name
        }

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
    return (
        
        <div className={styles.offerCard}>
            {!recieved ?
            <ProfileCard user={user}/>
        :
            // <BidCard bid={offer}/>
            <div className={styles.job_link}>

            <div className={styles.job_description}>
                <div className={styles.top}>
                <p className={styles.job_title}>{offer.job_title}: </p>
                 <p className={styles.additional_info}>
                    {offer.job_negotiation !==0 && 
                        <p>Negotiating</p>
                    }
                    {
                    (offer.job_public !== 0 &&
                        <p>Public Job</p>
                    )
                }
                </p>

                </div>
                <div className={styles.job_info}>
                    
                    <p>{offer.job_description} </p>
                    
                    <Link to={`/job/${offer.job_id}`}
                    className={styles.go_to_job}>Go to Job...</Link>
                   

                </div>
             </div> 
            

                <p className={styles.job_price}>
                    Price:
                    {offer.job_price}
                </p>

               <div className={styles.buttons}>
                    {/* <PopUp component={ */}
                       <button className={styles.btn} type='button' onClick={handleReject}>Reject</button>
                    {/* // } */}
                    {/* state={reject} setState={setReject}>
                        <VerifyContainer />
                    </PopUp> */}
                    
                    <button className={styles.btn2} type="button" onClick={handleAccept}><p>Accept</p></button>

                </div>
            </div>
            }
        </div>
    )
}

export default OfferCard