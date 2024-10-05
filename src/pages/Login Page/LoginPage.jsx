import styles from './LoginPage.module.css'
import logo from '../../assets/icons/logo.svg'
import {PasswordInput} from "../../components/inputs/Password Input/PasswordInput.jsx";
import {useState} from "react";
import axios from "axios";
import {useAuth} from "../../utils/AuthContext.jsx";
import {Loading} from "../../components/general/Loading/Loading.jsx";
import {TextInput} from "../../components/inputs/Text Input/TextInput.jsx";
import {Link} from "react-router-dom";



export const LoginPage = () => {
    const { login } = useAuth();
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    function _login(){
        setIsLoading(true)
       setTimeout(()=>{
           axios.post('https://auth.bizawit.com/api/v1/auth',{username:username,password:password})
               .then((res)=>{
                   // eslint-disable-next-line react-hooks/rules-of-hooks
                   login(res.data.token)
                   setIsLoading(false)
               })
               .catch((error)=>{
                   alert("problem")
                   console.log(error.message)
                   setIsLoading(false)
               })
       },2000)
    }
    return (
        <>
            <Loading state={isLoading}/>
            <div className={styles.container}>

                <main className={styles.main_container}>
                    <div className={styles.top_container}>
                        <img className={styles.logo} src={logo} alt=""/>
                        <h1 className={styles.title}>Welcome Back</h1>
                        <p className={styles.sub_title}>To continue, please enter your details</p>
                    </div>
                    <div className={styles.bottom_container}>
                        <TextInput placeholder={'Username'} value={username} onChange={setUsername} onEnterKeyPress={_login}/>
                        <PasswordInput value={password} onChange={setPassword} onEnterKeyPress={_login}/>
                            <button onClick={_login} className={styles.button}>Login</button>
                        <div className={styles.line}></div>
                        <p className={styles.sign_up_p}>Don't have an account? <b><Link style={{textDecoration:"none",color:"black"}} to={"/sign-up"}>Sign Up</Link></b></p>
                    </div>
                </main>
                <div className={styles.image_container}>
                    <div className={styles.img} ></div>
                </div>
            </div>
        </>
    )
}
