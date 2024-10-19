import { ArrowCircleRight2, ArrowLeft } from 'iconsax-react';
import { PopUp } from '../../pops/Pop Up/PopUp.jsx';
import { useEffect, useState } from 'react';
import ApplyContainer from '../../containers/Apply Container/ApplyContainer.jsx';
import ContactContainer from '../../containers/Contact Container/ContactContainer.jsx';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import style from './JobDetailContainer.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ViewBidsContainer from '../View Bids Container/ViewBidsContainer.jsx';
import RatingStars from '../../general/RatingStars/RatingStars.jsx';
import CommandButton from '../../buttons/Command Buttons/CommandButton.jsx';
import JobCompletionContainer from '../Job Completion Container/JobCompletionContainer.jsx';
import JobTerminateContainer from '../Job Terminate Container/JobTerminateContainer.jsx';

const JobDetailContainer = ({ job, isOwner = false, isContracted = false }) => {
    const [activePopup, setActivePopup] = useState(null);
    const [isApplyOpen, setIsApplyOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [isCompleteOpen, setIsCompleteOpen] = useState(false)
    const [isTerminateOpen, setIsTerminateOpen] = useState(false)
    const [isViewBidsOpen, setIsViewBidsOpen] = useState(false);
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])


    const navigate = useNavigate();

    const handleBackButtonClicked = () => {
        navigate(-1);
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
        case 'terminate':
            setIsTerminateOpen(true)
            break;
        case 'view-bids':
            setIsViewBidsOpen(true)
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
        setIsTerminateOpen(false);
        setIsViewBidsOpen(false);        
    }

    const handleJobComplete = () => {
        // Implement the logic for job completion
        console.log("Job completion requested."); // Placeholder for actual logic
        closePopup(); // Close the pop-up after handling the request
    };

    const fetchBids = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${job.id}/job-bid`;
        try {
            const response = await axios.get(url);
            setBids(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOffers = async () => {
        const url = `https://auth.bizawit.com/api/v1/job/${job.id}/job-offer`;
        try {
            const response = await axios.get(url);
            setOffers(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!isOwner && !isContracted) {
            fetchBids();
            fetchOffers();
        }
    }, [isOwner, isContracted, job.id]);

    useEffect(()=>{
        if(activePopup !== null)
            openPopup()
        console.log(profilePic)
    }, [activePopup])

    const profilePic = `https://auth.bizawit.com/api/v1/upload/original/${job.profile_picture}`

    return (
        <div className={style.container}>
            <button className={style.back_button} onClick={handleBackButtonClicked}>
                <ArrowLeft size="20px" color="var(--primary-color)" /> Back
            </button>

            <div className={style.user_info}>
                <div className={style.profile}>
                    <ProfileImage userId={job.user_id} src={profilePic} size='46px' />
                    <div className={style.info}>
                        <p className={style.username}>{job.first_name + " " + job.last_name}</p>
                        <p className={style.location}>{job.location || "Ethiopia"}</p>
                    </div>
                </div>
                <div className={style.user_status}>
                    <div className={style.user_field}>
                        Rating
                        <RatingStars star={3} />
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

            <div className={style.user_info}>
                Freelancer
                <div className={style.profile}>
                    <ProfileImage userId={job.user_id} src={job.profile_picture} size='46px' />
                    <div className={style.info}>
                        <p className={style.username}>{job.first_name + " " + job.last_name}</p>
                        <p className={style.location}>{job.location || "Ethiopia"}</p>
                    </div>
                </div>
                <div className={style.user_status}>
                    <div className={style.user_field}>
                        Rating
                        <RatingStars star={3} />
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
            </div>

            <div className={style.buttons}>
                <CommandButton commandTerm={"Apply"} onClick={()=>openPopup('apply')} />
                <CommandButton commandTerm={"Contact"} onClick={()=>openPopup('contact')} />
                <CommandButton commandTerm={"Request Completion"} onClick={()=>openPopup('complete')} />
                <CommandButton commandTerm={"Request Cancellation"} onClick={()=>openPopup('terminate')} />
                <CommandButton commandTerm={"View bids and offers"} onClick={()=>openPopup('view-bids')} />
                
            </div>

            {/* Render active pop-up based on activePopup state */}
            <PopUp
                state={isApplyOpen}
                setState={setIsApplyOpen}
            >
                <ApplyContainer setIsOpen={closePopup} jobID={job.id} />
            </PopUp>

            <PopUp
                state={isContactOpen}
                setState={setIsContactOpen}
            >
                <ContactContainer />
            </PopUp>

            <PopUp
                state={isCompleteOpen}
                setState={setIsCompleteOpen}
            >
                    <JobCompletionContainer  jobID={job.id} setIsOpen={setIsCompleteOpen} />

            </PopUp>

            <PopUp
                state={isTerminateOpen}
                setState={setIsTerminateOpen}
            >
                <JobTerminateContainer  jobID={job.id} setIsOpen={setIsTerminateOpen} />

            </PopUp>

            <PopUp
                state={isViewBidsOpen}
                setState={setIsViewBidsOpen}
            >
                <ViewBidsContainer jobID={job.id} setIsOpen={setIsViewBidsOpen} />
            </PopUp>
        </div>
    );
};

export default JobDetailContainer;
