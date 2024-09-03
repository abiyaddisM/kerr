import logo from '../../../assets/icons/logo.svg'
import homeIcon from '../../../assets/icons/homeIcon.svg'
import briefcaseIcon from '../../../assets/icons/briefcaseIcon.svg'
import documentIcon from '../../../assets/icons/documentIcon.svg'
import messageIcon from '../../../assets/icons/messageIcon.svg'
import horizontalLine from '../../../assets/icons/horizontalLine.svg'
import brushIcon from '../../../assets/icons/brushIcon.svg'
import libraryIcon from '../../../assets/icons/libraryIcon.svg'
import styles from './Sidebar.module.css';


const routeMap = {
    '/': 'home',
    '/jobs': 'jobs',
    '/user-jobs': 'user-jobs',
    '/chat': 'chats',
    '/library': 'library',
    '/other': 'other' // Example for additional routes
};

const SideBar = () => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        setSelected(routeMap[currentPath] || '');
    }, [location.pathname]);

    const handleClick = (name, route) => {
        setSelected(name);
        navigate(route);
    };

    return (
        <div className={styles.sidebar}>
            <img src={logo} className={styles.kerrlogo} alt="Logo" />
            
            <button
                className={`${styles.button} ${selected === 'home' ? styles.selected : ''}`}
                onClick={() => handleClick('home', '/')}
            >
                <img src={homeIcon} alt="Home" />
            </button>
            
            <button
                className={`${styles.button} ${selected === 'jobs' ? styles.selected : ''}`}
                onClick={() => handleClick('jobs', '/jobs')}
            >
                <img src={briefcaseIcon} alt="Job Listing" />
            </button>

            <img src={horizontalLine} className={styles.hr} alt="" />

            <button
                className={`${styles.button} ${selected === 'user-jobs' ? styles.selected : ''}`}
                onClick={() => handleClick('user-jobs', '/user-jobs')}
            >
                <img src={documentIcon} alt="User Jobs" />
            </button>

            <button
                className={`${styles.button} ${selected === 'chats' ? styles.selected : ''}`}
                onClick={() => handleClick('chats', '/chat')}
            >
                <img src={messageIcon} alt="Chats" />
            </button>

            <img src={horizontalLine} className={styles.hr} alt="" />

            <button
                className={`${styles.button} ${selected === 'library' ? styles.selected : ''}`}
                onClick={() => handleClick('library', '/library')}
            >
                <img src={brushIcon} alt="Library" />
            </button>

            <button
                className={`${styles.button} ${selected === 'other' ? styles.selected : ''}`}
                onClick={() => handleClick('other', '/other')}
            >
                <img src={libraryIcon} alt="Other" />
            </button>
        </div>
    );
}

export default SideBar;
