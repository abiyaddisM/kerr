
import styles from './PostPage.module.css';
import {ArrowLeft, Add, ArrowSwapVertical} from "iconsax-react";
import {useRef, useState} from "react";
import axios from "axios";
import {Utils} from "../../utils/utils.js";
import {useAuth} from "../../utils/AuthContext.jsx";


export const PostPage = () => {
    const [imageUrls, setImageUrl] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const fileInputRef = useRef(null);
    const {user} = useAuth();


    const post = async () => {
        alert("dd")
        console.log("dd")
        if(imageUrls.length <= 0)
            return
        const newImageUrl = await Utils.uploadImages(imageUrls);
        const postData = {
            userId:user.id,
            postTitle:title,
            postCaption:description,
            postThumbnail:newImageUrl[0],
            postImage: {images:newImageUrl},

        }
        console.log(newImageUrl)
        axios.post("http://localhost:3000/api/v1/post", postData).then(res=>{
            alert("hey")
        }).catch(err=>{
            alert("problem")
        })
    }


    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newArr = [...imageUrls,URL.createObjectURL(file)]
            setImageUrl(newArr);
        }
    };
    const removeImage = (index)=>{
        const newImage = imageUrls.filter((_, i) => i !== index);
        setImageUrl(newImage);
    }
    return (

        <div className={styles.container}>
            <div className={styles.art_container}>
                {
                    imageUrls.length === 0 && <div className={styles.select_chat}>
                        <span>Add at least one Image</span>
                    </div>
                }
                {
                    imageUrls.map((value, index) => {
                        return (
                            <div key={value} className={styles.image_container} onClick={() => {
                                removeImage(index)
                            }}>
                                <img src={value} alt="" className={styles.image}/>
                            </div>
                        )
                    })
                }
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
                {/*<button className={styles.add_button} >Add</button>*/}
            </div>
            <aside className={styles.side_container}>

                <div className={styles.profile_info}>
                    <input type="text" placeholder="Title" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="Description" rows="12" className={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className={styles.button_container}>
                    <button className={styles.social_buttons} onClick={handleFileClick}>
                        <Add size="20" color="#000000"/>Add Image
                    </button>
                    <button className={styles.social_buttons} onClick={post}>
                        {/*<Share size="20" color="#000000"/>Post*/}
                        <ArrowSwapVertical  size="20" color="#000000"/>
                        Post
                    </button>
                </div>
            </aside>
        </div>
    )
}
