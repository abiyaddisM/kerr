import styles from './Notification.module.css'
import bellIcon from '../../../assets/icons/bellIcon.svg'
import {useAuth} from "../../../utils/AuthContext.jsx";
import {PopOver} from "../../pops/Pop Over/PopOver.jsx";
import ProfileImage from '../Profile Image/ProfileImage.jsx';
import {
    DirectNotification,
    Message,
    Notification1,
    NotificationBing,
    NotificationFavorite,
    NotificationStatus
} from 'iconsax-react';
import NotificationContainer from '../../containers/Notification Container/NotificationContainer.jsx';
import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";


const image = 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg'

const notifs = ["hi there", 'beauty is in the eye of the beholder', 'make the most of it']

const Notification = () => {
    const { user} = useAuth();
    const [selected, setSelected] = useState('');
    const location = useLocation();

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        console.log("The user",user)

    }, []);
    return (
        <div className={styles.notification}>

           {/* <PopOver left={false} component=
           {<img src={bellIcon} alt=""/>}
        //    {<Notification/>}
           >
            <NotificationContainer notifications={notifs}/>
           </PopOver> */}
           <div
               className={styles.icon}
           >
               <NavLink
                   to={`/chat`}
                   style={{textDecoration: 'none', display: 'block'}}
               >
                   <Message className={styles.icon} variant={ selected.includes("/chat") ? "Bold":"Linear"} color="var(--primary-color)"/>
               </NavLink>
           </div>

                <ProfileImage src={user.profile_picture}
                userId={user.id}
                />



            </div>
                )
            }

export default Notification

