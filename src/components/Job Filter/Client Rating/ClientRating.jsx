import { useState } from 'react';
import styles from './ClientRating.module.css'

const ClientRating = ({values, selectedValues=[], onSelect}) => {

    // const [selectedValues, setSelectedValues] = useState(values[0])

    function handleCheckChange (index) {
        let newSelected;
        if(selectedValues.includes(values[index]))
            newSelected = selectedValues.filter(value=> value != values[index])
        else
            newSelected = [...selectedValues, values[index]]

        onSelect(newSelected)    

    }
    
    return(
        <div className={styles.rating_filter}>
                    {values.map((value, index)=> (
                        <div key={index} className={styles.rating}>
                            <input type='checkbox' 
                            checked = {selectedValues.includes(value)}
                            onChange={()=>handleCheckChange(index)}
                                />
                            <label>{value}</label>
                            </div>
                    ))
                    }
               
                </div>
    )
}
export default ClientRating;