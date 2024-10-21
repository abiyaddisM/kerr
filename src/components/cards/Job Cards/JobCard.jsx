import styles from './JobCard.module.css';
import RatingStars from '../../general/RatingStars/RatingStars.jsx';
import ProfileImage from '../../general/Profile Image/ProfileImage.jsx';
import { ArrowCircleRight2 } from 'iconsax-react';
import { PopUp } from '../../pops/Pop Up/PopUp.jsx';
import { useEffect, useState } from 'react';
import ApplyContainer from '../../containers/Apply Container/ApplyContainer.jsx';
import ContactContainer from '../../containers/Contact Container/ContactContainer.jsx';
import VerifyContainer from '../../containers/Verify Container/VerifyContainer.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const JobCard = ({ job, onClick=()=>{}}) => {
    const { user, title, hourlyrate, description, rating, totalPrice, successrate } = job;

    const [isApplyOpen, setIsApplyOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)

    const handleJobClicked = (job) => {
        
        onClick(job)
    // console.log('j')
    }

    const handleApplyClicked = () => {
        // navigates to apply window

    }

    const handleContactClicked = () => {
        // navigates to message
    }

    // const handleDelete = (id) => {
    //     try{
    //      onDelete(id)

    //         // .then 
    //     }catch(e){console.log(e)}
    // }

    const profilePic = `https://auth.bizawit.com/api/v1/upload/original/${job.profile_picture}`
    useEffect(()=>console.log(job),[])

    return (
        <div className={styles.jobcard} 
                    onClick={handleJobClicked}>
            <ProfileImage userId={job.user_id} src={job.profile_picture} size='46px' />

            <div className={styles.jobcard_content}>
                <div className={styles.line1}>
                    <div className={styles.nameaddress}>
                        <p className={styles.names}>{job.full_name}</p> 
                        <p className={styles.address}>{job.location}</p>
                    </div>
                    <p className={styles.price}>
                        Br.{job.job_price} 
                    </p>
                    
                </div>
                

                <p className={styles.role}>
                    {job.job_title}
                </p>

                <ul className={styles.keywords}>
                    {job.tags &&
                    job.tags.split(',').map((k, index)=>
                    <li className={styles.key}
                        key={index}>
                        {k}</li>
                )}
                </ul>

                <div className={styles.description}>
                    <p className={styles.jobdescription}>
                        {job.job_description}
                    </p>
                </div>

                {/* <div className={styles.ratings}>
                    

                    <p className={styles.payment}>
                        <p>
                            {totalPrice}
                            <span>Birr</span>
                        </p>
                        <span>total payout</span>
                    </p>
                    <p className={styles.success}>
                        <p>
                            {successrate}
                            <span>%</span>
                        </p>
                        <span>job success</span>
                    </p> */}
                    
                    {/* <p 
                    className={styles.details_link} 
                    onClick={handleJobClicked}>
                        Details...
                    </p> */}
                {/* </div> */}
            </div>


        </div>
    )
}

export default JobCard;
