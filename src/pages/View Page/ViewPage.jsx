import styles from "./ViewPage.module.css"
import ViewContainer from "../../components/containers/View Container/ViewContainer";
import ViewSidebar from "../../components/general/View Sidebar/ViewSidebar";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewPage(){
    const {id} = useParams()
    const [images, setImages] = useState([]);
    let isViewed = false;
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://auth.bizawit.com/api/v1/post/${id}`).then(res=>{
            console.log("My shitt",res.data.data[0])
            setData(res.data.data[0]);
            setImages(res.data.data[0].post_image.image);
            console.log("ss",images)
        })
            !isViewed && axios.patch(`https://auth.bizawit.com/api/v1/post/${id}/view`);
            isViewed = true;
    }, []);


    return(
        <div className={styles.container}>
            
            <div className={styles.img_container}>
                <ViewContainer images={images}/>
            </div>
            <div className={styles.sidebar_container}>
                <ViewSidebar
                    description={data.post_caption}
                    views={data.view + 1}
                    saves={data.view}
                    title={data.post_title}
                    profilePicture={data.profile_picture}
                    username={data.first_name + " " + data.last_name}
                    id={data.id}/>
            </div>
        </div>
    );
}

export default ViewPage
