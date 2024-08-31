import SearchBar from "../components/Search Bar/SearchBar";
import SideBar  from "../components/Sidebar/Sidebar";
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <div >
            <SideBar/>
            </div>
            {/* <SearchBar/> */}
            <div className={styles.content}>
                <SearchBar/>
                {children}
            </div>
        </div>
    )
}

export default Layout;