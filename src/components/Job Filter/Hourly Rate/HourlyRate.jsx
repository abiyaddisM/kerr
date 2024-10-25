import styles from './HourlyRate.module.css'

const HourlyRate = ({ values, selectedValues = [], onSelect }) => {

    function handleCheckChange(index) {
        let newSelected;

        // If the first index (e.g., "Any") is selected, clear all others
        if (index === 0) {
            newSelected = selectedValues.includes(values[0].toString())
                ? [] // Deselect "Any" if it's already selected
                : [values[0].toString()]; // Select only "Any"
        } else {
            const rangeString = values[index].toString();
            if (selectedValues.includes(rangeString)) {
                newSelected = selectedValues.filter(item => item !== rangeString);
            } else {
                // Deselect "Any" if another range is selected
                newSelected = [...selectedValues.filter(item => item !== values[0].toString()), rangeString];
            }
        }
        
        onSelect(newSelected);
    }

    return (
        <div className={styles.rate_filter}>
            {values.map((value, index) => (
                <div key={index} className={styles.rate}>
                    <input
                        type="checkbox"
                        checked={selectedValues.includes(value.toString())}
                        onChange={() => handleCheckChange(index)}
                    />
                    <label>
                        {value !== 'Any'
                            ? `${value[0] === 0 ? ' < ' : value[0]}${(value[0] !== 0 && value[1] !== Infinity) ? ' - ' : ''}${value[1] === Infinity ? ' >' : value[1] + 1}`
                            : 'Any'}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default HourlyRate;
