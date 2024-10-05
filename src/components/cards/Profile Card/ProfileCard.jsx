import { useNavigate } from 'react-router-dom';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import styles from './ProfileCard.module.css'

const ProfileCard = ({user}) => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}
        onClick={() => navigate(`/profile`)}
        >
            <ProfileImage 
            userId={user.id}
            src={user.image}
            size='42px'

            />
            <p className={styles.name}>{user.name}</p>
        </div>
    )
}
export default ProfileCard;