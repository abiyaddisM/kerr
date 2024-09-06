import styles from './ArtCard.module.css';

const ArtCard = ({art: {id, image, title, userName, userImage, views, duration} }) => {
    return (
        <div className={styles.art_card}>
            {/* <div className={styles.art_image}> */}
                <img src={image} className={styles.art_image} alt="" />
            {/* </div> */}
            <div className={styles.art_caption}>
                <img 
                className={styles.profile_image} 
                src={userImage}
                alt="profile image" />

                <div className={styles.art_description}>
                    <p className={styles.art_title}>{title}</p>
                    <p>{userName}</p>
                    <div className={styles.post_info}>
                        <p>{views}</p>
                        <p>{duration}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ArtCard;