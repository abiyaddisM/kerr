import styles from './PopOver.module.css'
import {useEffect, useRef, useState} from "react";
import { motion,AnimatePresence  } from 'framer-motion';
// eslint-disable-next-line react/prop-types
export function PopOver({component,children,left = true}) {
    const [state,setState] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
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
            <div className={styles.container} >
                <div className={styles.component_container} onClick={()=>{setState(!state)}} ref={componentRef}>
                    {component}
                </div>
                <AnimatePresence>
                {state && (
                    <motion.div
                    className={styles.motion_container}
                    style={!left?{right:0}:{left:0}}
                    key="child_container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                        <div  className={styles.child_container} >
                            {children}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
    )
}
