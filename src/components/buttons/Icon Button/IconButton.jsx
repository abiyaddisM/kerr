import  { useState } from 'react';
import styles from './IconButton.module.css'
// eslint-disable-next-line react/prop-types
export function IconButton({src, term,onClick}) {
    const [isHovered, setIsHovered] = useState(false);

    // const style = {
    //     backgroundColor: isHovered ? backgroundColorHover :backgroundColor ,
    //     padding,
    //     border
    // };

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <p>{term}</p>
            {src}
        </div>
    );
}
