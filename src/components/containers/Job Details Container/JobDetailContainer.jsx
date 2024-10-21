import {ArrowCircleRight2, ArrowLeft, InfoCircle} from 'iconsax-react';
import { PopUp } from '../../pops/Pop Up/PopUp.jsx';
import { useEffect, useState } from 'react';
import ApplyContainer from '../../containers/Apply Container/ApplyContainer.jsx';
import ContactContainer from '../../containers/Contact Container/ContactContainer.jsx';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import style from './JobDetailContainer.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import ViewBidsContainer from '../View Bids Container/ViewBidsContainer.jsx';
import RatingStars from '../../general/RatingStars/RatingStars.jsx';
import CommandButton from '../../buttons/Command Buttons/CommandButton.jsx';
import JobCompletionContainer from '../Job Completion Container/JobCompletionContainer.jsx';
import JobTerminateContainer from '../Job Terminate Container/JobTerminateContainer.jsx';
import ProfileContainer from '../Profile Container/ProfileContainer.jsx';
import { useAuth } from '../../../utils/AuthContext.jsx';
import BidCard from '../../cards/Bid Card/BidCard.jsx';
import ShareContainer from '../Share Container/ShareContainer.jsx';

const JobDetailContainer = ({ job, isClient = false, isFreelancer = false, hasApplied=false, setHasApplied=()=>{}, isContracted=false }) => {
    const [activePopup, setActivePopup] = useState(null);
    const [isApplyOpen, setIsApplyOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isCompleteOpen, setIsCompleteOpen] = useState(false)
    
    const [isViewBidsOpen, setIsViewBidsOpen] = useState(false);
    const [offerJob, setOfferJob] = useState(false)
    const [deliver, setDeliver] = useState({})
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])
    const [appliedBid, setAppliedBid] = useState(null)   
    const {user} = useAuth()
    const {id} = useParams()


    const navigate = useNavigate();

    const handleBackButtonClicked = () => {
        navigate(-1);
    };

    const handleDownload = () => {

        const imageUrl = `https://auth.bizawit.com/api/v1/upload/original/${deliver.image}`; // Replace with your image URL
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'downloaded-image.jpg'; // Filename for the downloaded image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const openPopup = (popup) => {
        closeAllPopups()
        switch (popup){
        case 'apply':
            setIsApplyOpen(true)
            break;
        case 'contact':
            setIsContactOpen(true);
            break;
        case 'complete':
            setIsCompleteOpen(true)
            break;
        case 'view-bids':
            setIsViewBidsOpen(true)
            break;
        case 'offer-job':
            setOfferJob(true)
            break;
        
        }

    }


    const closePopup = () => {
        closeAllPopups()
    };

    const closeAllPopups=()=>{
        setIsApplyOpen(false);
        setIsContactOpen(false);
        setIsCompleteOpen(false);
        setIsViewBidsOpen(false);        
    }

    const handleJobComplete = () => {
        // Implement the logic for job completion
        console.log("Job completion requested."); // Placeholder for actual logic
        closePopup(); // Close the pop-up after handling the request
    };

    const fetchBids = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${id}/job-bid`;
        try {
            const response = await axios.get(url);
            setBids(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOffers = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${id}/job-offer`;
        try {
            const response = await axios.get(url);
            setOffers(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        axios.get(`https://auth.bizawit.com/api/v1/job/${id}/complete`).then((res) => {
            setDeliver(res.data.data[0])
        }).catch(err=>{
            alert("D")
            console.log(err)
        })
    },[])

    const deleteBid = async (id) => {
        try{
        const url = `https://auth.bizawit.com/api/v1/job-bid/${id}`
        await axios.delete(url)
        setHasApplied(false)
        setAppliedBid(null)

    } catch(error) {console.error(error)}
    }


    
    const fetchAppliedBid = async () => {
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
            const userBid = response.data.data.find(bid => bid.user_id === user.id);
            setAppliedBid(userBid || null);
        }
        catch(error){console.error(error)}   
    }

    useEffect(() => {
        if(isClient){
            fetchBids();
            fetchOffers();
            // console.log(job.id)
        }

    }, [isClient, id]);



    useEffect(()=>{
        if(hasApplied){
            fetchAppliedBid();
        }
    }, [hasApplied, user.id])


    useEffect(()=>{
        if(activePopup !== null)
            openPopup()
        console.log(profilePic)
    }, [activePopup])



    const profilePic = `https://auth.bizawit.com/api/v1/upload/original/${job.profile_picture}`
    const payment = () =>{
       /* const data = {
            "amount": job.job_price,
            "currency": "ETB",
            "email": "abebech_bekele@gmail.com",
            "first_name": job.client_first_name,
            "last_name": job.client_last_name,
            "phone_number": "0912345678",
            "tx_ref": Math.round(Math.random() * 1000),
            "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
            "return_url": `http://localhost:3000/job/${id}`,
            "customization[title]": "Payment for my favourite merchant",
            "customization[description]": "I love online payments"
        }
        const headers = {
            'Authorization': 'Bearer CHASECK_TEST-duOZpjAkpPjD691yVYTAosQ56OokcyBx',
            'Content-Type': 'application/json'
        };*/
        axios.put(`https://auth.bizawit.com/api/v1/job/${id}/finish`).then(
            res => {
                console.log(res)
            }
        ).catch(err=>{
            console.log(err)
        })
    }
    return (
        
            <div className={style.container}>
                <button className={style.back_button} onClick={handleBackButtonClicked}>
                    <ArrowLeft size="20px" color="var(--primary-color)"/> Back
                </button>

                <div className={style.user_info}>
                    <div className={style.profile}>
                        <ProfileImage userId={job.client_id} src={job.client_profile_picture} size='46px'/>
                        <div className={style.info}>
                            <p className={style.username}>{job.client_first_name + " " + job.client_last_name}</p>
                            <p className={style.location}>{job.client_location || "Ethiopia"}</p>
                        </div>
                    </div>
                    <div className={style.user_status}>
                        <div className={style.user_field}>
                            Rating
                            <RatingStars star={job.client_rating || 3}/>
                        </div>
                        <div className={style.user_field}>
                            Created at
                            <p className={style.date}>{job.created_at || "20/12/24"}</p>
                        </div>
                    </div>
                </div>

                <div className={style.job}>
                    <p className={style.title}>{job.job_title}</p>
                    <p className={style.job_description}>{job.job_description}</p>
                    <div className={style.tags}>
                        <ul className={style.keywords}>
                            {job.tags &&
                                job.tags.split(',').map((k, index) => (
                                    <li className={style.key} key={index}>
                                        {k}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>


                {(isClient || isFreelancer) ?
                    <div className={style.user_info}>
                        {isContracted ?
                            <>
                                Freelancer
                                <div className={style.profile}>
                                    <ProfileImage userId={job.freelance_id} src={job.freelance_profile_picture}
                                                  size='46px'/>
                                    <div className={style.info}>
                                        <p className={style.username}>{job.freelance_first_name + " " + job.freelance_last_name}</p>
                                        <p className={style.location}>{job.freelance_location || "Ethiopia"}</p>
                                    </div>
                                </div>
                                <div className={style.user_status}>
                                    <div className={style.user_field}>
                                        Rating
                                        <RatingStars star={job.freelance_rating || 0}/>
                                    </div>
                                    <div className={style.user_field}>
                                        Job Completed
                                        <p className={style.date}>{job.created_at || "20/12/24"}</p>
                                    </div>
                                    <div className={style.user_field}>
                                        Completion Rate
                                        <p className={style.date}>{job.created_at || "20/12/24"}</p>
                                    </div>
                                </div>
                            </>
                            :
                            <p>Applications is still open</p>
                        }
                   

            </div>
            :
            <div className={style.applied_bid}>
            {(hasApplied && appliedBid) ?(
                <>
                You have applied to this job.
                <BidCard bid={appliedBid} onDelete={()=>deleteBid(appliedBid.id)}/>
                </>
            )
             :
            <p>No pending applications on this job. Apply?</p>
             }
            </div>
            }





            <div className={style.buttons}>
                {(!isClient && !isFreelancer) &&(
                <>
                {!hasApplied &&
                <CommandButton commandTerm={"Apply"} onClick={()=>openPopup('apply')} />
                }
                <CommandButton commandTerm={"Contact"} onClick={()=>openPopup('contact')} />
                </>
                )}

                {isFreelancer &&
                <>
                <CommandButton commandTerm={"Deliver"} onClick={()=>openPopup('complete')} />
                
                </>
                }
                {isClient && 
                <>
                <CommandButton commandTerm={"View bids and offers"} onClick={()=>openPopup('view-bids')} />
                <CommandButton commandTerm={"Offer Job"} onClick={()=>openPopup('offer-job')} />
                </>
                    }

                {
                    isClient && deliver &&
                    <div className={style.deliver_container}>
                        <div className={style.deliver_header}>
                            <InfoCircle size="24" color="var(--secondary-color)"/>
                            <h2>Final Version</h2>
                        </div>
                        <div className={style.deliver_image_container}>
                            <img className={style.deliver_image} src={`https://auth.bizawit.com/api/v1/upload/600/${deliver.image}`} alt=""/>
                        </div>
                        <p className={style.deliver_message}>{deliver.message}</p>
                        <div className={style.deliver_button_container}>
                            <CommandButton commandTerm={"Download"} onClick={handleDownload}/>
                            <CommandButton commandTerm={"Decline"} />
                            <CommandButton commandTerm={"Pay"} onClick={payment}/>
                        </div>
                    </div>

                }

            </div>

            {/*The Pop Upssss*/}

               
        


     

            {/* Render active pop-up based on activePopup state */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            <PopUp
                state={isApplyOpen}
                setState={setIsApplyOpen}
                height={'fit-content'}
                width={'fit-content'}
            >
                {!hasApplied &&
                <ApplyContainer setIsOpen={closePopup} jobID={id} is_negotiable={job.job_negotiation == 1} job_price={job.job_price} onSuccess={()=>{
                    setHasApplied(true)
                    
                }}/>
                // :
                // <BidCard  setIsOpen={setIsViewBidsOpen} />
                }
            </PopUp>

            <PopUp
                state={isContactOpen}
                setState={setIsContactOpen}
                height={'fit-content'}
                width={'fit-content'}
            >
                <ContactContainer />
            </PopUp>

            <PopUp
                state={isCompleteOpen}
                setState={setIsCompleteOpen}
                height={'fit-content'}
                maxWidth={500}
            >
                    <JobCompletionContainer  jobID={id} setIsOpen={setIsCompleteOpen} />

            </PopUp>



            <PopUp
                maxHeight={550}
                maxWidth={800}
                state={isViewBidsOpen}
                setState={setIsViewBidsOpen}
                height={'fit-content'}
                width={'fit-content'}
            >
                <ViewBidsContainer jobID={id} setIsOpen={setIsViewBidsOpen} />
            </PopUp>
            <PopUp
            maxHeight={550}
            maxWidth={800}
            state={offerJob}
            setState={setOfferJob}>
                <ShareContainer id={user.id}/>
                {/* <ProfileContainer setIsOpen={setOfferJob} share={true} /> */}
            </PopUp>
            </div>
            
        </div>
        
    );

};

export default JobDetailContainer;
