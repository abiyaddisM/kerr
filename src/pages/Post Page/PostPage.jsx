import { Add } from 'iconsax-react';
import styles from './PostPage.module.css';
import {ArrowLeft,ImportCurve,Share} from "iconsax-react"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const PostPage = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    
    const handleCancel = () => {

    }

    const handlePost = () => {

    }

    const handleBackButtonClicked = () =>{
        navigate(-1)
    }


    return(
        <div className={styles.container}>
            <h1>New Post</h1>
            <div></div>
            <div className={styles.img_container}>
                {/* <div className={styles.image_input}> */}
                    <Add size='100px' variant='Bulk' color="var(--highlight-color)"/>
                {/* </div> */}
            </div>
            <div className={styles.caption_container}>
                <button className={styles.back_button} onClick={handleBackButtonClicked}>
                        <ArrowLeft size="20" color="#000000"/>Back
            </button>
                <h2>Caption</h2>
                <div className={styles.caption_content}>
                    <div>
                <label htmlFor="" >Title</label>
                <input type="text" name="post_title" id="" className={styles.title} />
                </div>
                <div>
                <label htmlFor="">Description</label>
                <textarea type="text" name="post_description" id="" className={styles.description} />
                </div>
                </div>
                

                  <div className={styles.buttons}>
                    <button className={styles.btn2} type="button" onClick={handlePost}><p>Post</p></button>

                    <button className={styles.btn} type='button' onClick={handleCancel}>Cancel</button>

                </div>
            </div>
        </div>
    )

}
export default PostPage;