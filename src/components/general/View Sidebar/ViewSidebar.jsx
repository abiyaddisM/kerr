import styles from "./ViewSidebar.module.css"
import {ArrowLeft,ImportCurve,Share} from "iconsax-react"


function ViewSidebar(){
    return(
        <div className={styles.container}>
            <div className={styles.desc_container}>
                <div className={styles.profile_info}>
                    <button className={styles.back_button}><ArrowLeft size="20" color="#000000"/>Back</button>
                    <div className={styles.profile_container}>
                        <img className={styles.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <div className={styles.user_address}>
                            <p className={styles.username}>Yom Fisseha</p>
                            <p className={styles.address}>Ethiopia,  Addis Ababa</p>
                        </div>
                        
                    </div>
                    

                </div>

                <div className={styles.post_info}>
                    <div className={styles.creation_date}>
                        <p className={styles.top}>Creation Date</p>
                        <p className={styles.bottom}>2024 09 18</p>

                    </div>

                    <div className={styles.view}>
                        <p className={styles.top}>View</p>
                        <p className={styles.bottom}>12,435 views</p>

                    </div>

                    <div className={styles.save}>
                        <p className={styles.top}>Save</p>
                        <p className={styles.bottom}>435 saves</p>

                    </div>

                </div>

                <div className={styles.description}>
                    <h1 className={styles.title}>Night CIty</h1>
                    <p className={styles.paragraph}>A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.</p>

                </div>

                <div className={styles.tags}>
                    <button className={styles.tag_buttons}>CyberPunk</button>
                    <button className={styles.tag_buttons}>Neon</button>
                    <button className={styles.tag_buttons}>Futuristic</button>
                    <button className={styles.tag_buttons}>Landscape</button>
                </div>

            </div>

            <div className={styles.button_container}>
                <button className={styles.social_buttons}><Share size="20" color="#000000"/>Share</button>
                <button className={styles.social_buttons}><ImportCurve size="20" color="#000000"/>Save</button>

            </div>



        </div>

    );
    

}

export default ViewSidebar