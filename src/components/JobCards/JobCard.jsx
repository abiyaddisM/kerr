import styles from './JobCard.module.css';
import arrowrightIcon from '../../assets/icons/arrow-rightIcon.svg'
import RatingStars from '../RatingStars/RatingStars';
const JobCard = () => {

    const handleApplyClicked = () => {
        // navigates to apply window 
        
    }

    const handleContactClicked = () => {
        // navigates to message 
    }

    return (
        <div className={styles.jobcard}>

            {/* TO BE DELETED place holder image  */}
            <img 
            className={styles.profile_image} src="https://s3-alpha-sig.figma.com/img/5092/512c/8486c7c89c9bd726da4a9370ff0c1d02?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xt-gzOMhlAuWrIgJRXK5MahzrFOsOps~JvwwPjFjKgmER6ZdMnlbfFaBDEqAtmDNP7H4cWK4JzhhdzXHYhKyXR9HriMrFzE50ZUAJnh8zP~NjmnQXetpY-glzhtvVg5YnTMpiynSyCpjW39TzoD3nbAWe4IxLd7RltjiR~bEH1bXiQpq5~t7BddyUMZeGEp5c2D-dbfXrQKiF3rjpxiPwr-txyTCwGbxRh3~qIiKuF3gXXBqjNpSERlDgFn5LE~hV2fCho653fiHGxIXXRhFlqkXqkh9zOrEPmoOegifr8pX9OwVfiYIf~uqMeE0wIvNTKtOKxk2vvoUpMaA6Ij37Q__" 
            alt="profile image" />

            
            <div className={styles.jobcard_content}>
                <div className={styles.line1}>

                    <div className={styles.nameaddress}>
                        <p className={styles.names}>Kate Smith</p>
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
                    Tech Start Up Logo Design
                    <span className={styles.rate}>650 Birr/hr</span>    
                </p>

                
                    <ul className={styles.keywords}>
                        <l1 className={styles.key}>Realistic</l1>
                        <li className={styles.key}>Portrait</li>
                        <li className={styles.key}>Cool</li>
                        <li className={styles.key}>Futuristic</li>

                    </ul>
                

                <div className={styles.description}>
                    <p className={styles.jobdescription}>
                        We are seeking a talented digital artist to create a 
                        realistic portrait that embodies a futuristic vibe 
                        with a cool color palette. The portrait should seamlessly 
                        blend realistic human features with elements that evoke a 
                        sense of advanced technology and forward-thinking aesthetics. 
                        The overall color tone should convey a sense of calmness and 
                        sophistication. The artwork should evoke a sense of the future, 
                        incorporating modern and high-tech elements
                    </p>
                </div>

                <div className={styles.ratings}>

                    <RatingStars/>

                    <p className={styles.payment}>
                        <p>
                            20,504
                            <span>Birr</span>
                        </p>
                        
                        <span>total payout</span>
                    </p>
                    <p className={styles.success}>
                        <p>
                            91
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