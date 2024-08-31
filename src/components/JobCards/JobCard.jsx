import styles from './JobCard.module.css';
import arrowrightIcon from '../../assets/icons/arrow-rightIcon.svg'
import RatingStars from '../RatingStars/RatingStars';


const JobCard = ({job: {image, name, title, hourlyrate, description, rating, totalPrice, successrate}}) => {

    const handleApplyClicked = () => {
        // navigates to apply window 
        
    }

    const handleContactClicked = () => {
        // navigates to message 
    }

    return (
        <div className={styles.jobcard}>

            <img 
            className={styles.profile_image} 
            src={image}
            alt="profile image" />

            
            <div className={styles.jobcard_content}>
                <div className={styles.line1}>
                    <div className={styles.nameaddress}>

                        <p className={styles.names}>{name}</p>
                        <p className={styles.address}>Ethiopia, Summit</p>
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.apply} onClick={handleApplyClicked}>
                            Apply
                        </button>
                        <button className={styles.contact} onClick={handleContactClicked}>
                            Contact
                            <img src={arrowrightIcon} alt="" />
                        </button>
                    </div>
                    
                </div>

                <p className={styles.role}>
                    {title}
                    <span className={styles.rate}>{hourlyrate} Birr/hr</span>    
                </p>

                
                    <ul className={styles.keywords}>
                        <l1 className={styles.key}>Realistic</l1>
                        <li className={styles.key}>Portrait</li>
                        <li className={styles.key}>Cool</li>
                        <li className={styles.key}>Futuristic</li>

                    </ul>
                

                <div className={styles.description}>
                    <p className={styles.jobdescription}>
                        {description}
                    </p>
                </div>

                <div className={styles.ratings}>

                    <RatingStars star={rating}/>

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
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default JobCard