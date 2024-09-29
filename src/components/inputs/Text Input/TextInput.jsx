import styles from "./TextInput.module.css";

export const TextInput = ({placeholder,value,onChange,onEnterKeyPress,name,getTarget = false}) => {
    return (
        <>
            <input
                name={name}
                className={styles.input}
                placeholder={placeholder}
                type="text" value={value}
                onChange={(e)=>{getTarget ? onChange(e.target) :onChange(e.target.value)}}
                onKeyPress={(e)=>{
                    if(e.key ==='Enter')
                        onEnterKeyPress();
                }}/>
        </>
    )
}
