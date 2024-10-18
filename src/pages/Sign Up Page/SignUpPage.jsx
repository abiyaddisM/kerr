import { useAuth } from "../../utils/AuthContext.jsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import { Loading } from "../../components/general/Loading/Loading.jsx";
import styles from "./SignUpPage.module.css";
import logo from "../../assets/icons/logo.svg";
import { TextInput } from "../../components/inputs/Text Input/TextInput.jsx";
import { PasswordInput } from "../../components/inputs/Password Input/PasswordInput.jsx";
import {Link, useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import {DropDownInput} from "../../components/inputs/Drop Down Input/DropDownInput.jsx";
import {Utils} from "../../utils/utils.js";

export const SignUpPage = () => {
    const [page, setPage] = useState(0);
    const [title, setTitle] = useState('Welcome, Nice to Meet You!');
    const [direction,setDirection] = useState(0);
    const [profileUrl,setProfileUrl] = useState('');
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        username:'',
        password:'',
        email:'',
        reEnterPassword:'',
        firstName:'',
        lastName:'',
        phone:'',
        gender:'',
        location:'',
        industry:'',
        experience:'',
        profilePicture:''

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
                setTitle('Add A Picture');
                break;
            default:
                setTitle('');
        }
        console.log(formData);

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
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileUrl(URL.createObjectURL(file))
        }
    };
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
                        <DropDownInput placeholder={'Gender'} data={[{key: 'f',value: 'Female'},{key:'m',value:'Male'}]} value={formData.gender} name="gender" onChange={handleChange}/>
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
                        <TextInput placeholder={'Location'} value={formData.location} onChange={handleChange} getTarget={true} name={'location'}/>
                        <TextInput placeholder={'Industry'} value={formData.industry} onChange={handleChange} getTarget={true} name={'industry'}/>
                        <DropDownInput placeholder={'Experience'}  value={formData.experience} name="experience" onChange={handleChange}
                                       data={[
                                           {key:'0',value: 'No Experience'},
                                           {key:'1',value:'Less than 1 year'},
                                           {key:'2',value:'1 year'},
                                           {key:'3',value:'2 - 3 year'},
                                           {key:'4',value:'4 - 6 year'},
                                           {key:'5',value:'More than 6 year'},
                                       ]}
                        />
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="page3"
                        initial={{translateX: direction === 1 ? '50vw' : '-50vw', opacity: 0}}
                        animate={{translateX: 0, opacity: 1}}
                        exit={{translateX: direction === 1 ? '-50vw' : '50vw', opacity: 0}}
                        transition={{type: 'spring', stiffness: 300, damping: 30}}
                        className={styles.bottom_container}
                    >
                        <div className={styles.picture_container}>
                            <img className={styles.picture} src={profileUrl} alt=""/>
                        </div>
                        <button className={styles.button} onClick={handleFileClick} >Add</button>

                    </motion.div>
                );
            default:
                return null;
        }
    }
    const upload = async () => {
        const [url] = await Utils.uploadImages([profileUrl]);
        console.log(url)
        setFormData(
            {
                ...formData,
                profilePicture: url
            }
        )
    }
    const submit = async () =>{
       profileUrl !== "" && await upload();
       axios.post("https://auth.bizawit.com/api/v1/user",formData)
           .then(() => {
               navigate('/login');
           }).catch(()=>{
               alert("error")
       })
    }

    return (

        <>
            <input
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileChange}
            />
            {/*<Loading state={isLoading}/>*/}

            <div className={styles.container}>
                <div className={styles.image_container}>
                    <div className={styles.img}></div>
                </div>
                <main className={styles.main_container}>
                    <div className={styles.top_container}>
                        <img className={styles.logo} src={logo} alt=""/>
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
                            {page < 3 ?<button className={styles.button} onClick={moveForward}>Next</button>
                                :<button className={styles.button} onClick={submit}>Sign Up </button>
                        }

                        </div>
                        <div className={styles.line}></div>
                        <p className={styles.sign_up_p}>Already have an account? <b><Link to={'/login'} style={{
                            textDecoration: "none",
                            color: "black"
                        }}>Login</Link></b></p>
                    </div>
                </main>
            </div>
        </>
    );
}
