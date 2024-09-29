import { useAuth } from "../../utils/AuthContext.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../components/general/Loading/Loading.jsx";
import styles from "./SignUpPage.module.css";
import logo from "../../assets/icons/logo.svg";
import { TextInput } from "../../components/inputs/Text Input/TextInput.jsx";
import { PasswordInput } from "../../components/inputs/Password Input/PasswordInput.jsx";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import {DropDownInput} from "../../components/inputs/Drop Down Input/DropDownInput.jsx";

export const SignUpPage = () => {
    const [page, setPage] = useState(0);
    const [title, setTitle] = useState('Welcome, Nice to Meet You!');
    const [direction,setDirection] = useState(0);
    const [formData,setFormData] = useState({
        username:'',
        password:'',
        email:'',
        reEnterPassword:'',
        firstName:'',
        lastName:'',
        phone:'',

    })
    const handleChange = (target) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        switch (page) {
            case 0:
                setTitle('Welcome, Nice to Meet You!');
                break;
            case 1:
                setTitle('Simple Info About Yourself');
                break;
            case 2:
                setTitle('Professional Life?');
                break;
            case 3:
                setTitle('Finalize Your Registration');
                break;
            default:
                setTitle('');
        }
    }, [page]);
    function moveForward(){
        setDirection(1)
        setTimeout(()=>{
            setPage(page + 1)

        },1)

    }
    function moveBackward(){
        setDirection(-1)
        setTimeout(()=>{
            setPage(page - 1)

        },1)
    }

    const getPages = () => {
        switch (page) {
            case 0:
                return (
                    <motion.div
                        key="page0"
                        initial={{ translateX: direction !== 0 ? direction === 1 ? '50vw': '-50vw':0, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: '-50vw', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={styles.input_container}
                    >
                           <TextInput placeholder={'Username'} value={formData.username} onChange={handleChange} getTarget={true} name={'username'}/>
                           <TextInput placeholder={'Email'} value={formData.email} onChange={handleChange} getTarget={true} name={'email'}/>
                           <PasswordInput value={formData.password} onChange={handleChange} getTarget={true} name={'password'}/>
                           <PasswordInput value={formData.reEnterPassword} onChange={handleChange} placeholder={'Re-enter password'}  getTarget={true} name={'reEnterPassword'}/>
                    </motion.div>
                );
            case 1:
                return (
                    <motion.div
                        key="page1"
                        initial={{ translateX: direction === 1 ? '50vw': '-50vw', opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: direction === 1 ?  '-50vw' : '50vw', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={styles.input_container}
                    >
                        <TextInput placeholder={'First Name'} value={formData.firstName} onChange={handleChange} getTarget={true} name={'firstName'}/>
                        <TextInput placeholder={'Last Name'} value={formData.lastName} onChange={handleChange} getTarget={true} name={'lastName'} />
                        <TextInput placeholder={'Phone Number'} value={formData.phone} onChange={handleChange} getTarget={true} name={'phone'} />
                        <DropDownInput placeholder={'Gender'} data={[{key: 'f',value: 'Female'},{key:'m',value:'Male'}]}/>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="page2"
                        initial={{ translateX: direction === 1 ? '50vw': '-50vw', opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: direction === 1 ?  '-50vw' : '50vw', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={styles.input_container}
                    >
                        <TextInput placeholder={'Username'} value={username} onChange={(e) => setUsername(e.target.value)} />
                        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="page3"
                        initial={{ translateX: direction === 1 ? '50vw': '-50vw', opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: direction === 1 ?  '-50vw' : '50vw', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={styles.bottom_container}
                    >
                        <TextInput placeholder={'Industries'} value={username} onChange={(e) => setUsername(e.target.value)} />
                        <TextInput placeholder={'Years of Experience'} value={username} onChange={(e) => setUsername(e.target.value)} />
                    </motion.div>
                );
            default:
                return null;
        }
    }


    return (
        <>
            {/*<Loading state={isLoading}/>*/}

            <div className={styles.container}>
                <div className={styles.image_container}>
                    <div className={styles.img}></div>
                </div>
                <main className={styles.main_container}>
                    <div className={styles.top_container}>
                        <img className={styles.logo} src={logo} alt="" />
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.sub_title}>To continue, please enter your details</p>
                    </div>
                    <div className={styles.bottom_container}>
                       <div className={styles.transition_container}>
                           <AnimatePresence mode={"wait"}>
                               {getPages()}
                           </AnimatePresence>
                       </div>
                        <div className={styles.button_container}>
                            {page > 0 && (<button className={styles.button} onClick={moveBackward}>Back</button>)}
                            <button className={styles.button} onClick={moveForward}>Next</button>
                        </div>
                        <div className={styles.line}></div>
                        <p className={styles.sign_up_p}>Already have an account? <b><Link to={'/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link></b></p>
                    </div>
                </main>
            </div>
        </>
    );
}
