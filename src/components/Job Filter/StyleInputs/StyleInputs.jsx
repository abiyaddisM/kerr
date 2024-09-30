import styles from './StyleInputs.module.css'
import closeIcon from '../../../assets/icons/closeIcon.svg'
import { useState } from 'react'


const StyleInputs = ({keys, onChange}) => {
    
    const [newStyle, setNewStyle] = useState('')
    const [artStyles, setartStyles] = useState(keys);

    const handleStyleAdd = () => {
        
        if (newStyle.trim()) { 
            if (!artStyles.includes(newStyle)){
            setartStyles(prevKeys => {
                const updatedStyles = [...prevKeys, newStyle]
                onChange(updatedStyles)
                return updatedStyles;
            }
            );
            }
            setNewStyle('');
            
        }
        
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleStyleAdd(); 
        }
    };
    const handleStyleDelete = (index)=>{
        console.log(index)
        setartStyles(prev => {
        const updatedStyles = prev.filter((_,i) => i!==index);
        onChange(updatedStyles)
        return updatedStyles
    })
    }
    
    return(
    
        <div className={styles.container}>
            
            <input 
                    type="text" 
                    id='style' 
                    placeholder='Enter style...' 
                    value = {newStyle}
                    onKeyDown={handleKeyDown}
                    onChange={(e)=>setNewStyle(e.target.value)}/>

            <div className={styles.style_inputs}>
                        {artStyles.map( (key, index) =>(
                                <div key={index} className={styles.array}>
                                <p>{key}</p>
                                <img src={closeIcon} 
                                    alt="" 
                                    onClick={()=>handleStyleDelete(index)} />   
                                </div>        
                        ))}
            </div>
        </div>
    )
}

export default StyleInputs;