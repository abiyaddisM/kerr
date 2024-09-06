import searchIcon from '../../../assets/icons/searchIcon.svg'
import styles from './SearchBar.module.css'
import Notification from '../Notification/Notification.jsx';
import { useState } from 'react';
import {PopUp} from "../../pops/Pop Up/PopUp.jsx";

const SearchBar = () => {
    const [state,setState] = useState(false)
    const search = (<div className={styles.searchbar}>
        <img src={searchIcon} alt="" />
        <input type="search" placeholder='Search'/>
    </div>)
    return(
        <div className={styles.container}>

            <PopUp component={search} state={state} setState={setState}>

            </PopUp>
        <Notification/>
        </div>
    )
}

export default SearchBar
