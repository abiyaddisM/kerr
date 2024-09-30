import styles from './ProfileContainer.module.css'
import ProfileCard from '../../cards/Profile Card/ProfileCard';

const ProfileContainer = ({profiles = []}) => {
    return (
        <div className={`${styles.container} ${profiles.length === 0? styles.empty: ''}`}>
            {profiles.length !== 0? 
            (
                profiles.map((profile, index) => 
                <ProfileCard 
                key={index}
                user={profile}/>
            )
            ):(
                <h1>No profiles available.</h1>

            )}
        </div>
    )
}

export default ProfileContainer;