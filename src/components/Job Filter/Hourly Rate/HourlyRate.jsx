
import styles from './HourlyRate.module.css'
const HourlyRate = ({values, selectedValues=[], onSelect}) => {

    function handleCheckChange(index){
        const rangeString = values[index].toString()
        let newSelected
        if(selectedValues.includes(rangeString))
            newSelected = selectedValues.filter(item => item !== rangeString)
        else
            newSelected = [...selectedValues, rangeString]
        // console.log(newSelected)
        
        onSelect(newSelected)
    }

    return (
        <div className={styles.rate_filter}>
            {values.map((value, index)=>(
                <div key={index} className={styles.rate}>
                    <input type="checkbox" 
                    checked ={selectedValues.includes(value.toString())}
                    onChange={() =>handleCheckChange(index)} />
                    {/* <label>{`${value[0] === 0 ? '>' : value[0]} - ${value[1] === Infinity ? '<' : value[1]+1}`}</label> */}
                    <label>
    {value !== 'Any' 
        ? `${value[0] === 0 ? ' < ' : value[0]}${(value[0] !== 0 && value[1] !== Infinity) ? ' - ' : ''}${value[1] === Infinity ? ' >' : value[1] + 1}`
        : 'Any'}
</label>




                </div>
            ))}
                   
        </div>

    )
}

export default HourlyRate
