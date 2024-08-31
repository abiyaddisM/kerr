import { useState } from 'react';
import styles from './RadioButtons.module.css'


const RadioButtons = ({keywords}) => {

    const [selected, setSelected] = useState(null);

    const handleSelect = (keyword) => {
        console.log(keyword);
        setSelected(keyword);
    }

    return (
        <div className={styles.container}>
            {keywords.map((k, index)=>(
                <div key={index} 
                className={`${styles.button} ${selected === k? styles.selected : ''}`}
                onClick={() => handleSelect(k)}>
                    <p>{k}</p>
                </div>
            ))}
        </div>
    )
}

export default RadioButtons;