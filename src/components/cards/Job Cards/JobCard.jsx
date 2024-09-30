import styles from './JobCard.module.css';
import arrowrightIcon from '../../../assets/icons/arrow-rightIcon.svg';
import RatingStars from '../../general/RatingStars/RatingStars.jsx';
import ProfileImage from '../../general/Profile Image/ProfileImage.jsx';

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {
    const { user, title, hourlyrate, description, rating, totalPrice, successrate } = job;

    const handleApplyClicked = () => {
        // navigates to apply window
    }

    const handleContactClicked = () => {
        // navigates to message
    }

    return (
        <div className={styles.jobcard}>
            <ProfileImage userId={user.id} src={user.image} size='46px' />

            <div className={styles.jobcard_content}>
                <div className={styles.line1}>
                    <div className={styles.nameaddress}>
                        <p className={styles.names}>{user.name}</p> {/* Access name from user object */}
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
                    <span className={styles.rate}>{hourlyrate} <span>Birr/hr</span></span>
                </p>

                <ul className={styles.keywords}>
                    {job.keywords.map((k, index)=>
                    <li className={styles.key}
                        key={index}>
                        {k}</li>
                )}
                </ul>

                <div className={styles.description}>
                    <p className={styles.jobdescription}>
                        {description}
                    </p>
                </div>

                <div className={styles.ratings}>
                    <RatingStars star={rating} />

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

export default JobCard;
