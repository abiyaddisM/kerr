import styles from "./LibraryContainer.module.css"
import ArtCard from '../../cards/Art Card/ArtCard.jsx'
import ArtContainer from "../Art Container/ArtContainer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { GalleryAdd, GalleryRemove, MouseCircle } from 'iconsax-react'
import { useActionData } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext.jsx";



function LibraryContainer({arts, selectedPost, setSelectedPost, onDelete}){

      
      const [selectActivate, setSelectActivate] = useState(false)
      

    const removeFromGallery = () => {
      onDelete()
      setSelectActivate(false)
      setSelectedPost([])
    }


    return(

        <div 
        // className={styles.art_container}
        >
        {/* {arts.map((value)=>{
            return <ArtCard key={value.id} art={value} className={styles.art_card}/>
        })} */}
        
        {/* <ArtContainer arts={posts} /> */}
        
          <div className={styles.selectButton}>
              {  selectActivate && selectedPost.length>0?
              <GalleryRemove size={"20px"} 
            color="var(--secondary-color)"
            variant='Outline'
            onClick={removeFromGallery}/>
              :
              <MouseCircle size={"20px"} 
            color="var(--secondary-color)"
            variant = {selectActivate? 'Bulk' : 'Outline'} 
            onClick={()=>setSelectActivate(!selectActivate)}
            />}
          </div>
            

        
        {/* <ArtContainer arts={posts} selectMode={selectActivate} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/> */}
        <ArtContainer arts={arts} selectMode={selectActivate} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
    </div>

    );
     
 
 }
 
 export default LibraryContainer;