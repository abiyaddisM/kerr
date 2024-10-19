import styles from './Notification.module.css'
import bellIcon from '../../../assets/icons/bellIcon.svg'
import {useAuth} from "../../../utils/AuthContext.jsx";
import {PopOver} from "../../pops/Pop Over/PopOver.jsx";
import ProfileImage from '../Profile Image/ProfileImage.jsx';
import { DirectNotification, Notification1, NotificationBing, NotificationFavorite, NotificationStatus } from 'iconsax-react';
import NotificationContainer from '../../containers/Notification Container/NotificationContainer.jsx';
import {useEffect} from "react";


const image = 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg'

const notifs = ["hi there", 'beauty is in the eye of the beholder', 'make the most of it']

const Notification = () => {
    const {logout, user} = useAuth();
    useEffect(() => {
        console.log("The user",user)

    }, []);
    return (
        <div className={styles.notification}>
           <PopOver left={false} component=
           {<img src={bellIcon} alt=""/>}
        //    {<Notification/>}
           >
            <NotificationContainer notifications={notifs}/>
           </PopOver>

            {/* <PopOver component={ */}
                <ProfileImage 
                src={`https://auth.bizawit.com/api/v1/upload/600/${user.profile_picture}`} 
                // userId={1}
                />
                {/* }/> */}

            
            {/* <PopOver component={<img src={image}/>} className={styles.profile_image}>
                < div
                    className = {styles.button_container} >
                    <button
                        className = {styles.button} > Profile </button>
                    <button className={styles.button}>Theme</button>
                    <button className={styles.button}>Contact us</button>
                    <button className={styles.button}>About us</button>
                </div>
            </PopOver> */}

            </div>
                )
            }

export default Notification

