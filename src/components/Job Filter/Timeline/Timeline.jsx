import { useState } from 'react'
import styles from './Timeline.module.css'

const Timeline = ({timeline, onChange}) => {

    const [selectedTimeline, setSelectedTimeline] = useState(timeline || 'Recent Post')

    const handleTimelineChange = (e) => {
        const newTimeline = e.target.value;
        setSelectedTimeline(newTimeline);
        onChange(newTimeline);
    }
    return (
        <div className={styles.customSelectContainer}>
            <select className={styles.sort_by} 
            id="sort" 
            name="sort"
            value={selectedTimeline}
            onChange={handleTimelineChange}>
                <option value="Recent Post">Recent Post</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    )
}

export default Timeline