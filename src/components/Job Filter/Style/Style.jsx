import styles from './Style.module.css'
import closeIcon from '../../../assets/icons/closeIcon.svg'


const StyleInputs = ({keys, onDelete}) => {
    
    return(
    
        <div className={styles.container}>

        <div className={styles.style_inputs}>
                    {keys.map( (key, index) =>(
                            <div key={index} className={styles.style_input}>
                            <p>{key}</p>
                            <img src={closeIcon} 
                                alt="" 
                                onClick={()=>onDelete(index)} />   
                            </div>        
                    ))}
        </div>
        </div>
    )
}

export default StyleInputs;