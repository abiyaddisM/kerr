
import styles from './PostPage.module.css';
import {ArrowLeft, Add, ArrowSwapVertical, CloudAdd, Folder, AddSquare, InfoCircle} from "iconsax-react";
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
    const [isPosting, setIsPosting] = useState(false);


    const post = async () => {
        if(isPosting)
            return
        setIsPosting(true);
        if(imageUrls.length <= 0)
            return
        const newImageUrl = await Utils.uploadImages(imageUrls);
        const postData = {
            userId:user.id,
            postTitle:title,
            postCaption:description,
            postThumbnail:newImageUrl[0],
            postImage: {image:newImageUrl},

        }
        console.log(newImageUrl)
        axios.post("https://auth.bizawit.com/api/v1/post", postData).then(res=>{
             setImageUrl([])
            setTitle('')
            setDescription('')
            setIsPosting(false)
        }).catch(err=>{
            setIsPosting(false)
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
                { isPosting &&
                    <div className={styles.loader_container}>
                        <div className={styles.loader}></div>
                    </div>
                }
                {
                    imageUrls.length === 0 && <div className={styles.upload_container}>
                        <CloudAdd size="24" color="var(--secondary-color)"/>
                        <h1>Choose a photo or drag & drop it here</h1>
                        <p>JPEG, PNG, PDO and GIF formats, up to 50MB</p>
                        <button onClick={handleFileClick}>Browse File</button>
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
                    <input type="text" placeholder="Title" className={styles.input} value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                    <textarea placeholder="Description" rows="8" className={`${styles.input} ${styles.text_area}`}
                              value={description} onChange={(e) => setDescription(e.target.value)}/>
                    
                </div>

                <div className={styles.button_container}>
                    <button className={styles.social_buttons} onClick={handleFileClick}>
                        <Folder variant="Bold"   size="20" color="var(--secondary-color)"/>Browse
                    </button>
                    <button className={styles.social_buttons} onClick={post}>
                        {/*<Share size="20" color="#000000"/>Post*/}
                        <AddSquare variant="Bold"  size="20" color="var(--secondary-color)"/>
                        Post
                    </button>
                </div>
            </aside>
        </div>
    )
}
