import {AnimatePresence, motion} from "framer-motion";
import styles from "./PopUp.module.css";
import {useEffect, useRef, useState} from "react";
import closeIcon from '../../../assets/icons/closeIcon.svg'
import { func } from "prop-types";

// eslint-disable-next-line react/prop-types
export function PopUp({component=null,children,state,setState,maxWidth,maxHeight,height,width}) {
    function closePopUp(){
        setState(false);

    }
    const componentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(children)
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setState(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.parent_container}>


                <div className={styles.component_container}  onClick={()=>{setState(!state)}} >
                    {component}
                </div>
                <AnimatePresence>

                    {state && (

                        <motion.div
                            key="container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                           <div className={styles.cover} >
                               <motion.div
                                   key="child_container"
                                   initial={{ scale:0.9,translateY:-200}}
                                   animate={{scale:1,translateY:0}}
                                   exit={{ scale:0.9,translateY: -200 }}
                                   transition={{ duration: 0.1 , ease: "easeInOut"}}
                                   className={styles.my}

                               >
                                <div ref={componentRef} className={styles.children_container} style={{maxHeight:maxHeight,maxWidth:maxWidth,height:height,width:width}} >
                                    {children}
                                </div>

                               </motion.div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
        </div>
    )
}
