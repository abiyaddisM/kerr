import styles from './JobFilter.module.css'
import ClientRating from './Client Rating/ClientRating'
import HourlyRate from './Hourly Rate/HourlyRate';
import StyleInputs from './StyleInputs/StyleInputs';
import { useEffect, useState } from 'react';
import Timeline from './Timeline/Timeline';
import LocationInput from './LocationInput/LocationInput';


const JobFilter = ({onStateChange}) => {

    const ratings = ['All', '3 Star', '1 Star', '4 Star', '2 Star', '5 Star' ]
    const hourlyRates = [
        'Any',
        [0, 99], 
        [100, 999], 
        [1000, 9999], 
        [10000, 19999], 
        [20000, Infinity]
    ]

    const [searchTerm, setSearchTerm] = useState('')

    // const [newStyle, setNewStyle] = useState('')

    const [artStyles, setartStyles] = useState([]);

    const [location, setLocation] = useState('')

    const [clientRating, setClientRating] = useState([ratings[0]])

    const [timeline, setTimeline] = useState('')

    const [hourlyRange, setHourlyRange] = useState([hourlyRates[0]])

    const handleRatingSelect = (newSelected) => {
        setClientRating(newSelected)
        // console.log(newSelected);
    }

    const handleRangeSelect = (newSelected) => {
        setHourlyRange(newSelected)
        // console.log(newSelected)
    }

    
    const handleSearchTermChange = (term) => {
        setSearchTerm(term)
    }

    const handleLocationChange = (term) => {
        setLocation(term)
    }

    const handleTimelineChange = (newTimeline) => {
        setTimeline(newTimeline)
    }
    
    const handleStyleChange = (newStyles) => {
        setartStyles(newStyles)
        // console.log(newStyles)

    }

    useEffect(()=>{
        onStateChange({searchTerm, artStyles, location, clientRating, timeline, hourlyRange})
    }, [searchTerm, artStyles, location, clientRating, timeline, hourlyRange])


    return(
        
        <div className={styles.filtercontainer}>
            <div className={styles.title}>
                <p>Filter</p>
                <p>Advanced</p>
            </div>

            <div className={styles.filter}>
                <label htmlFor="search">Search</label>
                <input type="text" id='search' placeholder='Search...'  
                value={searchTerm} onChange={(e)=>handleSearchTermChange(e.target.value)}/>

            </div>

            <div className={styles.filter}>
                <label htmlFor="style">Style</label>
                <StyleInputs keys={artStyles}  onChange={handleStyleChange} />
            </div>

            <div className={styles.filter}>
                <label htmlFor="location">Location</label>
                {/* <input type="text" id='location' placeholder='Enter location...' /> */}
                <LocationInput location={location} onChange={handleLocationChange}/>
            </div>

            <div className={styles.filter}>
                <label htmlFor="rating">Client Rating</label>
                <ClientRating values={ratings} selectedValues={clientRating} onSelect = {handleRatingSelect} />
            </div>

            <div className={styles.filter}>
                <Timeline timeline={timeline} onChange={handleTimelineChange}/>
            </div>

            <div className={styles.filter}>
                <label htmlFor="rate">Hourly Rate</label>
                <HourlyRate values={hourlyRates} selectedValues={hourlyRange} onSelect={handleRangeSelect}/>
            </div>
        </div>
        
    )
}

export default JobFilter