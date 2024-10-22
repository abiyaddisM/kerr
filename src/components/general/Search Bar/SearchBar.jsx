import styles from './SearchBar.module.css'
import searchIcon from '../../../assets/icons/searchIcon.svg'
import {SearchNormal1} from "iconsax-react";

const SearchBar = ({searchTerm, onChange, focus=false}) => {
    return (
        <div className={styles.searchbar}>
            <div className={styles.icon_container}>
                <SearchNormal1 size="18" color="var(--secondary-color)"/>
            </div>
            <input
                type="search" 
                placeholder='Search' 
                value={searchTerm} 
                onChange={onChange}
                autoFocus = {focus}/>
        </div>
    )
}

export default SearchBar
