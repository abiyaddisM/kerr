import styles from './Notification.module.css'
import bellIcon from '../../assets/icons/bellIcon.svg'
import {PopOver} from "../pops/Pop Over/PopOver.jsx";


const image = 'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HxXwboFcW~OzP7l8JE7ao7DdCHIRT9cfG0n9gMRgUyGzkwpgXPQiJ~encA95RHrlQPCQ5GVDn4DMNxw7~Si3vlSeRRcCfIcWvGMViUr5Rf9TSJsq1ipyJtOsTw58WktIjewYhV0jei~Ebg2hogbp6iEpmjEpvjWcE4WUhmqh3jL0JEsOi6CYg9rMT6N2iyHjKrlXOojojp0R7nZMr5iWH6~KkDV7lFJ0mJMDB9~kEJDWxhG1ibLBxF5Qsg01ObtvumqtSbaJyu0Q0HvxeK2vrZnwQKHcHRGmCwFrWR8zyRGskDeOF1UDtza2hIr2edYboFWcd~igvBwXC6QDc3scqQ__'
const Notification = () => {
    return (
        <div className={styles.notification}>
            <PopOver component={<img src={bellIcon} alt="" />}>
                <button>Press me</button>
            </PopOver>
            <PopOver component={<img src={image} className={styles.profile_image} alt="" />}>
                yoo
            </PopOver>
        </div>
    )
}

export default Notification
