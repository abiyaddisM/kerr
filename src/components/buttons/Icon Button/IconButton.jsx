import  { useState } from 'react';
import styles from './IconButton.module.css'
// eslint-disable-next-line react/prop-types
export function IconButton({backgroundColor,backgroundColorHover,padding,onClick,src}) {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: isHovered ? backgroundColorHover :backgroundColor ,
        padding: padding
    };

    return (
        <div
            style={style}
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <img src={src} alt="Paperclip Icon"/>
        </div>
    );
}
