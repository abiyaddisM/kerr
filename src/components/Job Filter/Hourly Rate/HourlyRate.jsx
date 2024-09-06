
import styles from './HourlyRate.module.css'
const HourlyRate = () => {
    return (
        <div className={styles.rate_filter}>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">Any</label>
                    </div>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">1000<span>Birr</span>-10,000<span>Birr</span></label>
                    </div>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">&lt; 100<span>Birr</span></label>
                    </div>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">10,000<span>Birr</span> - 20,000<span>Birr</span></label>
                    </div>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">100<span>Birr</span> - 1000<span>Birr</span></label>
                    </div>
                    <div className={styles.rate}>
                        <input type="checkbox" name="rate" id="" />
                        <label htmlFor="rate">&gt; 20,000</label>
                    </div>
                </div>

    )
}

export default HourlyRate
