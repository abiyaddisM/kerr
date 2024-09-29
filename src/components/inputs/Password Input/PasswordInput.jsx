import styles from "./PasswordInput.module.css";
import {Eye, EyeSlash} from "iconsax-react";
import {useState} from "react";

export const PasswordInput = ({ value, onChange ,onEnterKeyPress,placeholder = 'Password',name,getTarget = false}) => {
    const eye = <Eye className={styles.icon} size="28" color="var(--border-color)" variant="Bold" />;
    const eyeSlash = <EyeSlash className={styles.icon} size="28" color="var(--border-color)" variant="Bold" />;

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <div className={styles.container} >
            <input className={styles.input}
                    placeholder={placeholder}
                   name={name}
                    type={isPasswordVisible ? "text" : "password"}
                    value={value}
                   onChange={(e)=>{getTarget ? onChange(e.target) :onChange(e.target.value)}}
                   onKeyPress={(e)=>{
                       if(e.key ==='Enter')
                           onEnterKeyPress();
                   }}
            />
            <div className={styles.icon_container} onClick={togglePasswordVisibility}>
                {isPasswordVisible ? eyeSlash : eye} {/* Toggle icons */}
            </div>
        </div>
    );
}
