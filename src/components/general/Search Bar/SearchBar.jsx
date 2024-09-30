import styles from './SearchBar.module.css'
import searchIcon from '../../../assets/icons/searchIcon.svg'

const SearchBar = ({searchTerm, onChange, focus=false}) => {
    return (
        <div className={styles.searchbar}>
            <img src={searchIcon} alt="" />
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