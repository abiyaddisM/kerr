import styles from './Notification.module.css'
import bellIcon from '../../../assets/icons/bellIcon.svg'
import {PopOver} from "../../pops/Pop Over/PopOver.jsx";
import ProfileImage from '../Profile Image/ProfileImage.jsx';
import ProfileCard from '../../cards/Profile Card/ProfileCard.jsx';


const image = '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg';
const user = {
    id: '1',
    image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    name: 'Aaron Mesfin'
}
const Notification = () => {
    return (
        <div className={styles.notification}>
            <PopOver component={<img src={bellIcon} alt="" />}>
                <button>Press me</button>
            </PopOver>
            <PopOver component={
                <ProfileImage  userId={1} src={image} size='32px'/>
                }>
                yoo
            </PopOver>
        </div>
    )
}

export default Notification
