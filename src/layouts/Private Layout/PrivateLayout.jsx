
import SideBar  from "../../components/general/Sidebar/Sidebar.jsx";
import TopBar from "../../components/general/Top Bar/TopBar.jsx";
import styles from './PrivateLayout.module.css'
import {useEffect, useState} from "react";
import io from "socket.io-client";
import {useAuth} from "../../utils/AuthContext.jsx";
import {useSocket} from "../../utils/SocketContext.jsx";
const SOCKET_SERVER_URL = "https://auth.bizawit.com";

const PrivateLayout = ({children}) => {
    const {user} = useAuth();
    const {setSocket} = useSocket();
    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);
        newSocket.emit('set room', user.id);
        newSocket.emit('online', {room:'online-' + user.id,id:user.id});

        return () => {
            newSocket.emit('offline', {room:'online-' + user.id,id:user.id});
            newSocket.disconnect();
        };
    }, []);

    return (
        <div className={styles.layout}>
            <div className={styles.side_bar} >
                <div className={styles.side_bar_wrapper}>
                    <SideBar/>
                </div>
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
