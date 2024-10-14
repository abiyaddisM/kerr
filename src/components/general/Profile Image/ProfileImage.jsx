import { useNavigate } from 'react-router-dom';
import styles from './ProfileImage.module.css'

const ProfileImage = ({userId, src, size='28px'}) => {
    
    const navigate = useNavigate();

    function handelProfileClick(id){
        navigate(`/profile`);
    }
    return(
            <img 
            className={styles.profile_image}
            src={src} 
            alt="Profile Image"
            style={{ width:size, height:size }}
            onClick={()=>handelProfileClick(userId)}
        />
        
    )
}

export default ProfileImage;