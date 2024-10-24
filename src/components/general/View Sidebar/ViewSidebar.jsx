import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ViewSidebar.module.css"
import {ArrowLeft,ImportCurve,Share} from "iconsax-react"
import { PopUp } from "../../pops/Pop Up/PopUp";
import ShareContainer from "../../containers/Share Container/ShareContainer";
import SaveContainer from "../../containers/Save Container/SaveContainer";
import axios from "axios";
import ProfileImage from "../Profile Image/ProfileImage";
import { useAuth } from "../../../utils/AuthContext";



// eslint-disable-next-line react/prop-types
function ViewSidebar({username,views,saves,title,id,description,profilePicture, userid}){
    const navigate = useNavigate();
    const [save, setSave] = useState(false);
    const [share, setShare] = useState(false);
    const {user} = useAuth()

    // const url = "https://auth.bizawit.com/api/v1/post"
    
    function handleBackButtonClicked(){
        navigate(-1)
    }

    function handleShareClick(){
        console.log(window.location.href)
    }

    function handleSaveClick(){
        const url = `https://auth.bizawit.com/api/v1/gallery`
        const post = {
            userID: user.id,
            postID: id
        }
        axios.post(url, post)
        .then(res=>console.log(res.data))
        .catch(err=>console.error(err))
        
    }

    

    return(
        <div className={styles.container}>
            <div className={styles.desc_container}>
                <div className={styles.profile_info}>
                    <button className={styles.back_button} onClick={handleBackButtonClicked}>
                        <ArrowLeft size="20" color="#000000"/>Back</button>
                    <div className={styles.profile_container}>
                        <ProfileImage className={styles.porifile_pic} userId={userid} src={profilePicture} alt="" />
                        <div className={styles.user_address}>
                            <p className={styles.username}>{username}</p>
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
                        <p className={styles.bottom}>{views} views</p>

                    </div>

                    <div className={styles.save}>
                        <p className={styles.top}>Save</p>
                        <p className={styles.bottom}>{saves} saves</p>

                    </div>

                </div>

                <div className={styles.description}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.paragraph}>{description}</p>

                </div>
            </div>

            <div className={styles.button_container}>
                <PopUp 
                maxHeight={500}
                maxWidth={600}
                component={
                <button className={styles.social_buttons}
                    onClick={handleShareClick}
                ><Share variant={"Bold"} size="20" color="#000000"/>Share
                </button>} 
                state={share} setState={setShare}
                >
                    <ShareContainer id={id}/>
                </PopUp> 
                {/* <PopUp component={ */}
                    <button className={styles.social_buttons}
                    onClick={handleSaveClick}
                ><ImportCurve variant={"Bold"} size="20" color="#000000"/>Save
                </button>
                {/* } */}
                {/* state={save} setState={setSave}> */}
                    {/*<SaveContainer setIsOpen={setSave} id={id}/>*/}
                {/* </PopUp>  */}
                

            </div>



        </div>

    );
    

}

export default ViewSidebar
