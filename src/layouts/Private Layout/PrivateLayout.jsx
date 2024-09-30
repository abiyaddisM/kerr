
import SideBar  from "../../components/general/Sidebar/Sidebar.jsx";
import TopBar from "../../components/general/Top Bar/TopBar.jsx";
import styles from './PrivateLayout.module.css'

const PrivateLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.side_bar} l>
                <SideBar/>
            </div>
            <div className={styles.search_bar}>
                <TopBar/>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout;
