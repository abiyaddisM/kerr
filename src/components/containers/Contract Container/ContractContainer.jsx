import ProfileCard from '../../cards/Profile Card/ProfileCard';
import styles from './ContractContainer.module.css'

const ContractContainer = ({type, reciever}) => {
    return (
        <div className={styles.container}>
            <h1>Job {type} Contract</h1>
            <ProfileCard user={reciever} />    

        </div>
    )
}
export default ContractContainer;