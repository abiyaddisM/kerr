import styles from './Loading.module.css'
import logo from '../../../assets/icons/logo.svg'
export const Loading = ({state} ) => {
    return (
        state &&
         <div className={styles.container}>
        <div className={styles.circle}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>
        </div>

    )
}
