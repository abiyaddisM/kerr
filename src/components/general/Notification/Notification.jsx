import styles from './Notification.module.css'
import bellIcon from '../../../assets/icons/bellIcon.svg'
import {PopOver} from "../../pops/Pop Over/PopOver.jsx";
import {useAuth} from "../../../utils/AuthContext.jsx";


const image = 'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CnlHAhBd1D0h5E0nrFu8lENfYMdV5GvOwb3MplvjcSbi5PW7IIt23UlWYEgaVwPSNH3LZ4WrlWBPLNLIXeVsIiM43apMo9pHtsjI7tuz-uvHCZEif7T8sVuzNyyl2KP8Cm0L4WuBC7MJoJvSpIMG6ZUvV7BHLvMpKBMiENfEGU4n3wDoixBDNWN5hZwRwii-uu7CWL-xq6zdXUng1Vy0QxjoDFV5LPfKNLawf0Z6FMp2tMSU9QMhd5wK3NJ0C9VofUrIXcJNVUC26gGVqcOv8t06iod9KvlC8Fxs8V9EDIhulGSB24sFZAwnjEXzL-3C2JkFP~SWf6KyGT0KUcChZw__'
const Notification = () => {
    const {logout,user} = useAuth();
    return (
        <div className={styles.notification}>
            <PopOver component={<img src={bellIcon} alt="" />}>
            </PopOver>
            <PopOver component={<img src={user.profile_picture} className={styles.profile_image} alt="" />}>
                <button onClick={logout}>Logout</button>
            </PopOver>
        </div>
    )
}

export default Notification
