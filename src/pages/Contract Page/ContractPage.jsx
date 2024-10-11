import { useEffect } from 'react'
import styles from './ContractPage.module.css'
import ContractContainer from '../../components/containers/Contract Container/ContractContainer'
import { useLocation } from 'react-router-dom'

const ContractPage = () => {

    // useEffect(()=>{
    //     const getUsers = () =>{
            
    //     }
    // })
    const location = useLocation();
    const typ = location.state?.type || {}

    return(
        <div className={styles.container}>
            <ContractContainer type={'Termination'} reciever={typ}/>
        </div>
    )
}

export default ContractPage;