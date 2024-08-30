import {AnimatePresence, motion} from "framer-motion";
import styles from "./PopUp.module.css";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function PopUp({component,children,state,setState}) {

    return (
        <div className={styles.parent_container}>


                <div className={styles.component_container} onClick={()=>{setState(!state)}}>
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
                           <div className={styles.cover} onClick={() => {
                                setState(false)
                            }}>
                               <motion.div
                                   key="child_container"
                                   initial={{ scale:0.9,translateY:-200}}
                                   animate={{scale:1,translateY:0}}
                                   exit={{ scale:0.9,translateY: -200 }}
                                   transition={{ duration: 0.1 , ease: "easeInOut"}}
                               >
                                <div  className={styles.child_container} onClick={(event)=>event.stopPropagation()}>
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
