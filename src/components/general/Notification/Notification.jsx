import styles from './Notification.module.css'
import bellIcon from '../../../assets/icons/bellIcon.svg'
import {PopOver} from "../../pops/Pop Over/PopOver.jsx";
import {useAuth} from "../../../utils/AuthContext.jsx";


const image = 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg'
const Notification = () => {
    const {logout,user} = useAuth();
    return (
        <div className={styles.notification}>
            <PopOver component={<img src={bellIcon} alt="" />}>
            </PopOver>
            <PopOver component={<img src={image} className={styles.profile_image} alt="" />}>
                <div className={styles.button_container}>
                    <button className={styles.button}>Profile</button>
                    <button className={styles.button}>Theme</button>
                    <button className={styles.button}>Contact us</button>
                    <button className={styles.button}>About us</button>
                </div>
            </PopOver>
        </div>
    )
}

export default Notification
