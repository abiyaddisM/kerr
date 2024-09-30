import styles from './LocationInput.module.css'

const LocationInput = ({location = '', onChange}) => {

    const handleLocationChange = (term) =>{
        onChange(term)
    }

    return (
        <div className={styles.container}>
            <input type="text" 
            id='location' 
            placeholder='Enter location...'
            value={location}
            onChange={(e)=> handleLocationChange(e.target.value)} />
        </div>
    )
}


export default LocationInput;
