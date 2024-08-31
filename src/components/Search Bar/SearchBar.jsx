import searchIcon from '../../assets/icons/searchIcon.svg'
import styles from './SearchBar.module.css'
import Notification from '../Notification/Notification';
import { useState } from 'react';

const SearchBar = () => {
    return(
        <div className={styles.container}>
        <div className={styles.searchbar}>
            <img src={searchIcon} alt="" />
            <input type="search" placeholder='Search'/>
        </div>
        <Notification/>
        </div>
    )
}

export default SearchBar