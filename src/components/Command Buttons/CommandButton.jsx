import { useNavigate } from 'react-router-dom';
import styles from './CommandButton.module.css'


function handleClick(route){
    console.log(route);
    // navigate(`/${route}`)
}

const CommandButton = ({commandTerm}) =>{

    // const navigate = useNavigate()

   
    return(
        <button 
        className={styles.button} 
        value={commandTerm}
        onClick={()=>handleClick(commandTerm)} >
            {commandTerm}
        </button>
    )
}

export default CommandButton;