import { useState } from 'react';
import styles from './RatingStars.module.css'

const RatingStars = ({star}) => {
    const [rating, setRating] = useState(star);
    const [hoverIndex, setHoverIndex] = useState(null)

    const handleClick = (index) => {
        setRating(rating===index+1 ? 0 : index+1)
    }

    const handleMouseEnter = (index) => {
        setHoverIndex(index)
    };

    const handleMouseLeave = () => {
        setHoverIndex(null)
    }

    return (
        <div className={styles.rating_stars}>
            { Array.from({ length: 5 }, (_, index) => (
                <svg
                    key={index}
                    className={`${styles.star} 
                    ${rating > index? styles.filled : ''}
                    ${hoverIndex > index ? styles.hover : ''}`}
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <path
                        d="M8.03658 1.36651L9.09247 3.49572C9.23645 3.79212 9.62041 4.07642 9.94437 4.13086L11.8582 4.45145C13.082 4.65712 13.37 5.55236 12.4881 6.4355L11.0003 7.93563C10.7483 8.18968 10.6103 8.67964 10.6883 9.03048L11.1142 10.8875C11.4502 12.3574 10.6763 12.926 9.38643 12.1578L7.59263 11.0871C7.26867 10.8935 6.73473 10.8935 6.40476 11.0871L4.61096 12.1578C3.3271 12.926 2.54719 12.3513 2.88315 10.8875L3.3091 9.03048C3.3871 8.67964 3.24911 8.18968 2.99714 7.93563L1.5093 6.4355C0.6334 5.55236 0.915369 4.65712 2.13923 4.45145L4.05302 4.13086C4.37099 4.07642 4.75494 3.79212 4.89893 3.49572L5.95481 1.36651C6.53075 0.211164 7.46664 0.211164 8.03658 1.36651Z"
                        stroke="var(--dark-border-color)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ))}
        </div>
    )
}

export default RatingStars;
