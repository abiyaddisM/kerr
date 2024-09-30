import logo from '../../../assets/icons/logo.svg'
import homeIcon from '../../../assets/icons/homeIcon.svg'
import briefcaseIcon from '../../../assets/icons/briefcaseIcon.svg'
import documentIcon from '../../../assets/icons/documentIcon.svg'
import messageIcon from '../../../assets/icons/messageIcon.svg'
import horizontalLine from '../../../assets/icons/horizontalLine.svg'
import brushIcon from '../../../assets/icons/brushIcon.svg'
import libraryIcon from '../../../assets/icons/libraryIcon.svg'
import styles from './Sidebar.module.css';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const routeMap = {
    '/': 'home',
    '/jobs': 'jobs',
    '/user-jobs': 'user-jobs',
    '/chat': 'chats',
    '/library': 'library',
    '/portfolio': 'portfolio' // Example for additional routes
};

const SideBar = () => {
    const [selected, setSelected] = useState('');
    const [hover, setHover] = useState('')
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
            <div className={styles.buttons}>
            <button
                className={`${styles.button} ${selected === 'home' ? styles.selected : ''}`}
                onClick={() => handleClick('home', '/')}
            >
                <img src={homeIcon} alt="Home" />
                <p className={styles.label}>Home</p>
            </button>
            
            <button
                className={`${styles.button} ${selected === 'jobs' ? styles.selected : ''}`}
                onClick={() => handleClick('jobs', '/jobs')}
            >
                <img src={briefcaseIcon} alt="Job Listing" />
                <p className={styles.label}>Job Listing</p>

            </button>

            </div>
            
            
            <img src={horizontalLine} className={styles.hr} alt="" />
            <div className={styles.buttons}>

            <button
                className={`${styles.button} ${selected === 'user-jobs' ? styles.selected : ''}`}
                onClick={() => handleClick('user-jobs', '/user-jobs')}
            >
                <img src={documentIcon} alt="User Jobs" />
                <p className={styles.label}>My Project</p>

            </button>

            <button
                className={`${styles.button} ${selected === 'chats' ? styles.selected : ''}`}
                onClick={() => handleClick('chats', '/chat')}
            >
                <img src={messageIcon} alt="Chats" />
                <p className={styles.label}>Chat</p>

            </button>
            </div>

            <img src={horizontalLine} className={styles.hr} alt="" />

            <div className={styles.buttons}>

            <button
                className={`${styles.button} ${selected === 'portfolio' ? styles.selected : ''}`}
                onClick={() => handleClick('portfolio', '/portfolio')}
            >
                <img src={brushIcon} alt="Portfolio" />
                <p className={styles.label}>Portfolio</p>

            </button>

            <button
                className={`${styles.button} ${selected === 'library' ? styles.selected : ''}`}
                onClick={() => handleClick('library', '/library')}
            >
                <img src={libraryIcon} alt="Library" />
                <p className={styles.label}>Library</p>

            </button>
            </div>
        </div>
    );
}

export default SideBar;
