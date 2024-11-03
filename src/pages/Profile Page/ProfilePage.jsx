import style from './ProfilePage.module.css'
import ProfilePageContainer from '../../components/containers/Profile Page Container/ProfilePageContainer';
import { useAuth } from '../../utils/AuthContext';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const {user} = useAuth()
    const {id} = useParams()

    return (
        <div className={style.container}>
            <ProfilePageContainer id={id} isPersonal={user.id == id}/>
            

        </div>
    )
}

export default ProfilePage;