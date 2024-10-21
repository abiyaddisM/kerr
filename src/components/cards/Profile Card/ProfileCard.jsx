import { useNavigate } from 'react-router-dom';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import styles from './ProfileCard.module.css'

const ProfileCard = ({user, onClick=() => {}}) => {


    const handleProfileClicked = () => {
        // if (share)
        //     navigate(`/chat`)
        // else
        //     navigate(`/profile/${user.id}`)

        onClick()
        
    }

    return (
        <div className={styles.container}
        onClick={handleProfileClicked}
        >
            <ProfileImage 
            userId={user.id}
            src={user.profile_picture}
            size='42px'

            />
            <p className={styles.name}>{user.first_name + " " + user.last_name}</p>
        </div>
    )
}
export default ProfileCard;