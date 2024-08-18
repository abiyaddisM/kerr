import styles from './PopOver.module.css'
import {useEffect, useRef, useState} from "react";
import { motion,AnimatePresence  } from 'framer-motion';
// eslint-disable-next-line react/prop-types
export function PopOver({component,children,left = false}) {
    let [state,setState] = useState(false);
    return (
        <div>
            <div className={styles.cover} onClick={()=>{setState(false)}}/>
            <div className={styles.container} >
                <div onClick={()=>{setState(!state)}}>
                    {component}
                </div>
                <AnimatePresence>
                {state && (
                    <motion.div
                    key="child_container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                        <div  className={styles.child_container} style={!left?{right:0}:{left:0}}>
                            {children}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}
