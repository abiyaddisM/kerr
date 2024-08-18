import styles from './ClientRating.module.css'

const ClientRating = () => {
    return(
        <div className={styles.rating_filter}>
                    <div className={styles.rating}>
                        <input type="checkbox" name="all" id="" />
                        <label htmlFor="rating">All</label>
                    </div>
                    <div className={styles.rating}>
                        <input type="checkbox" name="3" id="" />
                        <label htmlFor="rating">3 Star</label>
                    </div>
                    <div className={styles.rating}>
                        <input type="checkbox" name="1" id="" />
                        <label htmlFor="rating">1 Star</label>
                    </div>
                    <div className={styles.rating}>
                        <input type="checkbox" name="4" id="" />
                        <label htmlFor="rating">4 Star</label>
                    </div>
                    <div className={styles.rating}>
                        <input type="checkbox" name="2" id="" />
                        <label htmlFor="rating">2 Star</label>
                    </div>
                    <div className={styles.rating}>
                        <input type="checkbox" name="5" id="" />
                        <label htmlFor="rating">5 Star</label>
                    </div>
                </div>
    )
}
export default ClientRating;