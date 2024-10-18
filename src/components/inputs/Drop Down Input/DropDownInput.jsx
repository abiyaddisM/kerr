import styles from './DropDownInput.module.css'
import {useEffect, useRef, useState} from "react";
import {ArrowDown2} from "iconsax-react";


// eslint-disable-next-line react/prop-types
export const DropDownInput = ({onChange,placeholder = 'Null',data,value,name}) => {
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
                    {!value ? placeholder : <p style={{color:'var(--text-heavy-color)'}}>{value}</p>}
                    <ArrowDown2 size="16 " color="var(--secondary-color)" className={isOpen ? styles.dropdown_toggle_rotate:styles.dropdown_toggle_rotate_smooth}/>
                </button>
                {isOpen && (
                    <ul className={styles.dropdown_menu}>
                        {data && data.map((val,index)=>{
                            return (
                                <li key={val.key}><button onClick={()=> {
                                    setSelected(index);
                                    setIsOpen(false)
                                    onChange({value:data[index].value,name:name})
                                }} className={index === selected ? styles.button_active:styles.button}>{val.value}</button></li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </>
    )
}
