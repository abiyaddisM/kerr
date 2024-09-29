import styles from './DropDownInput.module.css'
import {useEffect, useRef, useState} from "react";
import {ArrowDown2} from "iconsax-react";


export const DropDownInput = ({onChange,placeholder = 'Null',data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown element
    const [selected,setSelected] = useState(-1);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className={styles.dropdown} ref={dropdownRef}>
                <button onClick={toggleDropdown} className={styles.dropdown_toggle}>
                    {selected === -1 ? placeholder : <p style={{color:'var(--text-heavy-color)'}}>{data[selected].value}</p>}
                    <ArrowDown2 size="16 " color="var(--secondary-color)" className={isOpen ? styles.dropdown_toggle_rotate:styles.dropdown_toggle_rotate_smooth}/>
                </button>
                {isOpen && (
                    <ul className={styles.dropdown_menu}>
                        {data && data.map((val,index)=>{
                            onChange && selected === index && onChange(val.key);
                            return (
                                <li key={val.key}><button onClick={()=>setSelected(index)} className={index === selected ? styles.button_active:styles.button}>{val.value}</button></li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </>
    )
}
