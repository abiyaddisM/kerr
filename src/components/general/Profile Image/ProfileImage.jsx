import { useNavigate } from 'react-router-dom';
import styles from './ProfileImage.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProfileImage = ({userId, src='', size='28px'}) => {

    const [user, setUser] = useState({})
    
    const navigate = useNavigate();

    function handelProfileClick(id){
        navigate(`/profile`);
    }

    useEffect(() => {
        const fetchPicture = async () => {
            try {
                const response = await axios.get(`https://auth.bizawit.com/api/v1/user/${userId}`);
                console.log()(response.data[0][0]);
            } catch (error) {
                console.error(error);
            }
        };

        if (!src) {
            fetchPicture();
        }
    }, [src, userId]);
    return(
            <img 
            className={styles.profile_image}
            src={`https://auth.bizawit.com/api/v1/upload/600/${src}`} 
            style={{ width:size, height:size }}
            onClick={()=>handelProfileClick(userId)}
        />
        
    )
}

export default ProfileImage;
