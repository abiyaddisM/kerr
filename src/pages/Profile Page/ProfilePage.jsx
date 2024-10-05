import style from './ProfilePage.module.css'
import ProfilePageContainer from '../../components/containers/Profile Page Container/ProfilePageContainer';

const ProfilePage = () => {
    return (
        <div className={style.container}>
            <ProfilePageContainer/>

        </div>
    )
}

export default ProfilePage;