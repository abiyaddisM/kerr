import styles from './VerifyContainer.module.css'

const VerifyContainer = () => {
    return(
        <div className={styles.container}>
            
            
            <div className={styles.buttons}>

                    <button className={styles.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                    <button className={styles.btn2} type="submit"><p>Post</p></button>

            </div>
        </div>
    )
}

export default VerifyContainer