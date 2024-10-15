import logo from '../../../assets/icons/logo.svg'
import horizontalLine from '../../../assets/icons/horizontalLine.svg'
import styles from './Sidebar.module.css';
import {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);



    return (
        <div className={styles.sidebar}>
                <img src={logo} className={styles.kerrlogo} alt="Logo"/>

            <div className={styles.buttons}>

                <NavLink
                    to={`/`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>
                        <p className={styles.label}>Home</p>
                        <Home variant={selected !== '/' ? '' : "Bold"} color="var(--primary-color)"/>
                    </button>
                </NavLink>

                <NavLink
                    to={`/jobs`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>

                    <Briefcase variant={selected !== '/jobs' ? '' : "Bold"} color="var(--primary-color)"/>
                    <p className={styles.label}>Job Listing</p>

                    </button>
                </NavLink>



            </div>

            <div className={styles.line}></div>
            <div className={styles.buttons}>

                <NavLink
                    to={`/user-jobs`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>

                        <ClipboardText variant={selected !== '/user-jobs' ? '' : "Bold"} color="var(--primary-color)"/>
                        <p className={styles.label}>My Project</p>

                    </button>
                </NavLink>

                <NavLink
                    to={`/chat`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>
                        <Message variant={!selected.includes("/chat") ? '' : "Bold"} color="var(--primary-color)"/>
                        <p className={styles.label}>Chat</p>

                    </button>
                </NavLink>

            </div>
            <div className={styles.line}></div>


            <div className={styles.buttons}>
                <NavLink
                    to={`/post`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>

                        <AddSquare variant={selected !== '/post'? '' :"Bold"} color="var(--primary-color)"/>
                        <p className={styles.label}>New Post</p>
                    </button>
                </NavLink>

                <NavLink
                    to={`/library`}
                    className={({isActive}) => isActive ? `${styles.selected} ${styles.button_wrapper}` : styles.button_wrapper}
                    style={{textDecoration: 'none', display: 'block'}}
                >
                    <button className={styles.button}>

                        <VideoSquare variant={selected !== '/library'? '' :"Bold"} color="var(--primary-color)"/>
                        <p className={styles.label}>Library</p>
                    </button>
                </NavLink>

            </div>
        </div>
    );
}

export default SideBar;
