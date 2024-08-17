import searchIcon from '../../assets/icons/searchIcon.svg'
import styles from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = () => {
    return(
        <div className={styles.searchbar}>
            <img src={searchIcon} alt="" />
            <input type="search" placeholder='Search'/>
        </div>
    )
}

export default SearchBar