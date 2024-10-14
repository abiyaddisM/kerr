import logo from '../../../assets/icons/logo.svg'
import horizontalLine from '../../../assets/icons/horizontalLine.svg'
import styles from './Sidebar.module.css';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { Additem, AddSquare, Briefcase, Brush, BrushSquare, ClipboardText, Home, Message, VideoSquare } from 'iconsax-react'


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
            <img src={logo} className={styles.kerrlogo} alt="Logo"/>
            <div className={styles.buttons}>
                <button
                    className={`${styles.button} ${selected === 'home' ? styles.selected : ''}`}
                    onClick={() => handleClick('home', '/')}
                >
                    {/* <img src={homeIcon} alt="Home" /> */}
                    <Home variant={selected !== 'home' ? '' : "Bold"} color="var(--primary-color)"/>
                    <p className={styles.label}>Home</p>
                </button>

                <button
                    className={`${styles.button} ${selected === 'jobs' ? styles.selected : ''}`}
                    onClick={() => handleClick('jobs', '/jobs')}
                >
                    {/* <img src={briefcaseIcon} alt="Job Listing" /> */}
                    <Briefcase variant={selected !== 'jobs' ? '' : "Bold"} color="var(--primary-color)"/>
                    <p className={styles.label}>Job Listing</p>

                </button>

            </div>

            <div className={styles.line}></div>
            <div className={styles.buttons}>

                <button
                    className={`${styles.button} ${selected === 'user-jobs' ? styles.selected : ''}`}
                    onClick={() => handleClick('user-jobs', '/user-jobs')}
                >
                    {/* WHATS THE ICON?? */}
                    {/* <img src={documentIcon} alt="User Jobs" /> */}
                    <ClipboardText variant={selected !== 'user-jobs' ? '' : "Bold"} color="var(--primary-color)"/>
                    <p className={styles.label}>My Project</p>

                </button>

                <button
                    className={`${styles.button} ${selected === 'chats' ? styles.selected : ''}`}
                    onClick={() => handleClick('chat', '/chat')}
                >
                    <Message variant={selected !== 'chat' ? '' : "Bold"} color="var(--primary-color)"/>
                    {/* <img src={messageIcon} alt="Chats" /> */}
                    <p className={styles.label}>Chat</p>

                </button>
            </div>
            <div className={styles.line}></div>


            <div className={styles.buttons}>

            <button
                className={`${styles.button} ${selected === 'post' ? styles.selected : ''}`}
                onClick={() => handleClick('post', '/post')}
            >
                {/* <img src={brushIcon} alt="Portfolio" /> */}
                <AddSquare variant={selected !== 'post'? '' :"Bold"} color="var(--primary-color)"/>
                <p className={styles.label}>New Post</p>

            </button>
           
             <button
                className={`${styles.button} ${selected === 'library' ? styles.selected : ''}`}
                onClick={() => handleClick('library', '/library')}
            >
                {/* <img src={libraryIcon} alt="Library" /> */}
                <VideoSquare variant={selected !== 'library'? '' :"Bold"} color="var(--primary-color)"/>
                <p className={styles.label}>Library</p>

            </button>
            </div>
        </div>
    );
}

export default SideBar;
