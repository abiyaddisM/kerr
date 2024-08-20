import styles from './JobFilter.module.css'
import ClientRating from './Client Rating/ClientRating'
import HourlyRate from './Hourly Rate/HourlyRate';
import StyleInputs from './Style/Style';
import { useState } from 'react';


const JobFilter = () => {


    const [newStyle, setNewStyle] = useState('')

    const [artStyles, setartStyles] = useState([]);

    const handleAdd = () => {
        if (newStyle.trim()) { // Only add non-empty values
            setartStyles(prevKeys => [...prevKeys, newStyle]);
            setNewStyle(''); // Clear the input field
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior
            handleAdd(); // Call the handleAdd function when Enter is pressed
        }
    };
    const handleStyleDelete = (index)=>{
        console.log(index)
        setartStyles(prev => prev.filter((_,i) => i!==index))
    }
    return(
        
        <div className={styles.filtercontainer}>
            <div className={styles.title}>
                <p>Filter</p>
                <p>Advanced</p>
            </div>

            <div className={styles.filter}>
                <label htmlFor="search">Search</label>
                <input type="text" id='search' placeholder='Search...'/>
            </div>

            <div className={styles.filter}>
                <label htmlFor="style">Style</label>
                <input 
                    type="text" 
                    id='style' 
                    placeholder='Enter style...' 
                    value = {newStyle}
                    onKeyDown={handleKeyDown}
                    onChange={(e)=>setNewStyle(e.target.value)}/>
                    <StyleInputs keys={artStyles} onDelete={handleStyleDelete} />
            </div>

            <div className={styles.filter}>
                <label htmlFor="location">Location</label>
                <input type="text" id='location' placeholder='Enter location...' />
            </div>

            <div className={styles.filter}>
                <label htmlFor="rating">Client Rating</label>
                <ClientRating/>
            </div>

            <div className={styles.filter}>
                <label htmlFor="sort">Sort By</label>
                <select className={styles.sort_by} id="sort" name="sort">
                    <option value="Recent Post">Recent Post</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            <div className={styles.filter}>
                <label htmlFor="rate">Hourly Rate</label>
                <HourlyRate/>
            </div>
        </div>
        
    )
}

export default JobFilter