import CommandButton from '../Command Buttons/CommandButton';
import styles from './Keywords.module.css'

const Keywords = () =>{
    return(
        <div className={styles.container}>
            <CommandButton 
                className={styles.button}
                commandTerm={'Trending'}/>
            <CommandButton 
                className={styles.button}
                commandTerm={'Recent'}/>
            <CommandButton 
                className={styles.button}
                commandTerm={'All Time Popular'}/>
            <CommandButton 
                className={styles.button}
                commandTerm={'Most Views'}/>
            <CommandButton 
                className={styles.button}
                commandTerm={'Oldest'}/>

        </div>
    )
}

export default Keywords;
