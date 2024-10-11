
import { ArrowCircleRight2, ArrowLeft } from 'iconsax-react';
import { PopUp } from '../../pops/Pop Up/PopUp.jsx';
import { useEffect, useState } from 'react';
import ApplyContainer from '../../containers/Apply Container/ApplyContainer.jsx';
import ContactContainer from '../../containers/Contact Container/ContactContainer.jsx';
import ProfileCard from '../../cards/Profile Card/ProfileCard';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import style from './JobDetailContainer.module.css'
import { useNavigate } from 'react-router-dom';
import BidCard from '../../cards/Bid Card/BidCard.jsx';
import axios from 'axios';
import ViewBidsContainer from '../View Bids Container/ViewBidsContainer.jsx';
import OfferCard from '../../cards/Offer Card/OfferCard.jsx';

const JobDetailContainer = ({job, isOwner=false, isPrivate=false, isContracted=false, isApplied=false}) => {

    // const [job, setJob] = useState({})
    const [isApplyOpen, setIsApplyOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isCompleteOpen, setIsCompleteOpen] = useState(false)
    const [isTerminateOpen, setIsTerminateOpen] = useState(false)
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])

    const navigate = useNavigate()

    function contactPoster(){

    }

    const handleApplyClicked = () => {
        // navigates to apply window

    }

    const handleContactClicked = () => {
        // navigates to message
    }

    const handleBackButtonClicked = () =>{
        navigate(-1)
    }

    function handleCancelClick(){
        setIsCompleteOpen(false)
        setIsTerminateOpen(false)
    }

    function handleJobComplete(){
        
    }

    

    const fetchBids = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${job.id}/job-bid`

        try {
            const response = await axios.get(url)
            setBids(response.data.data);
        // console.log('API Response:', response);

            // console.log(bids)
        }
        catch(error){
            console.error(error)
        }

    }

    const fetchOffers = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${job.id}/job-offer`
        try{
            const response = await axios.get(url)
            setOffers(response.data.data);
            
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        if(!isOwner && !isContracted){
            fetchBids()
            fetchOffers()
        }
        console.log(job)

    },[])

    return (
        <div className={style.container}>
            {/* <JobCard className={style.job} job={job}/> */}
            <button className={style.back_button} onClick={handleBackButtonClicked}>
                        <ArrowLeft size="20" color="var(--primary-color)"/>Back
            </button>
            {!job.job_public &&
            <div className={style.isPublic}>
                
                <p>Private listing</p> 
            </div>

            }

            <div className={style.title}>
                <h1>{job.job_title}</h1>
                <p className={style.date}>Posted on: {job.created_at}</p>
            </div>
            <div className={style.tags}>
                <ul className={style.keywords}>
                    {job.tags &&
                    job.tags.split(',').map((k, index)=>
                    <li className={style.key}
                        key={index}>
                        {k}</li>
                )}
                </ul>
            </div>

            <div className={style.description}>
                <h3>Description</h3>
                <p className={style.job_description}>
                    {job.job_description}
                </p>
            </div>

            <div className={style.price}>
                <div className={style.price_info}>
                    <h3>Price:</h3>
                    <p className={style.job_price}>{job.job_price}</p>
                </div>
                
                 <div className={style.isNegotiable}>
                    <div className={style.negotiate}>
                    {!job.job_negotiation?

                        <p>This job is negotiable.
                             <p className={style.contact_link} onClick={contactPoster}>Contact?</p></p>
                        :
                        <p>Non-negotiable</p> 

                    }
                    </div>
                    
            </div>
            </div>
            

            <div className={style.posted_by}>
                <h2>Posted By</h2>
                <div className={style.user_info}>
                    <div className={style.profile}>
                        <ProfileImage userId={job.user_id} src={job.profile_picture} size='50px'/>
                        <p>{job.full_name}</p>
                    </div>
                </div>
               
            </div>

             <div className={style.state}>
                {job.job_state !== 1 ? (
                    <p>Job is accepting applications</p>
                ) : (
                    <p>Job is not accepting applications</p>
                )}
            </div>
            <div className={style.bids}>
                    <h3>Bids</h3>
            {!isOwner && !isContracted &&
            // <ViewBidsContainer bi
                <div className={style.received_bids}>
                        { bids &&
                        bids.length > 0 ?
                        bids.map((bid, index) => (
                            <div key={index}>
                                {/* <p>{bid.created_at}</p> */}
                            <BidCard bid={bid} received={true}/>
                            </div>)

                        ):(
                            <div className={style.empty}>
                                <p>No bids received</p>
                            </div>
                        )
                    
                    }
                </div>

            }
            </div>
                
           <div className={style.offers}>
                    <h3>Offers</h3>
                    <div className={style.sent_offers}>
                        { offers &&
                        offers.length > 0 ?
                        offers.map((offer) => (
                            <div key={offer.id}>
                                {/* <p>{bid.created_at}</p> */}
                            {/* <BidCard bid={offers} received={true}/> */}
                            <OfferCard offer={offer}/>
                            </div>)

                        ):(
                            <div className={style.empty}>
                                <p>No bids received</p>
                            </div>
                        )
                    
                    }
                </div>

            </div>

            {isContracted ?
            <div className={style.buttons}>
                 
                        <PopUp

                        component={<button className={style.btn} type='button' onClick={handleContactClicked}>Contact
                            <ArrowCircleRight2 size="18px" variant="Bulk" color="var(--dark-border-color"/>
                            {/* <img src={arrowrightIcon} alt="" /> */}
                        </button>}
                        state={isContactOpen}
                        setState={setIsContactOpen}
                        >
                            <ContactContainer/>
                        </PopUp>
                
                        <PopUp
                        component={<button className={style.btn2} type="button" onClick={handleApplyClicked}><p>Apply</p></button>}
                        state={isApplyOpen}
                        setState={setIsApplyOpen}
                        >
                            <ApplyContainer setIsOpen={setIsApplyOpen} jobID={job.jobID}/>
                        </PopUp>
                        
                    </div> :
                    <div className={style.buttons}>
                        <PopUp component={<button className={style.btn} type="button" 
                        // onClick={handleCompleteClicked}
                        ><p>Completed</p></button>}
                        state={isCompleteOpen}
                        setState={setIsCompleteOpen}>
                                <div className={style.popup}>
                                    <h1>Request job completion?</h1>
                                    <div></div>
                                    <div className={style.buttons}>

                                        <button className={style.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                                        <button className={style.btn2} type="button" onClick={handleJobComplete}><p>Submit</p></button>

                                    </div>
                                </div>
                        </PopUp>

                        <PopUp component={<button className={style.btn2} type="button" 
                        // onClick={handleCompleteClicked}
                        ><p>Terminate</p></button>}
                        state={isTerminateOpen}
                        setState={setIsTerminateOpen}>
                                <div className={style.popup}>
                                    <h1>Request job termination?</h1>
                                    <h2>Reason for termination</h2>

                                    <div className={style.buttons}>


                                        <button className={style.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                                        <button className={style.btn2} type="button" onClick={handleJobComplete}><p>Terminate</p></button>

                                    </div>
                                </div>
                        </PopUp>
                    </div>
}
        </div>
    )
}

export default JobDetailContainer;