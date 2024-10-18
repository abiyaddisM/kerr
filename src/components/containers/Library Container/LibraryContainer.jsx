import styles from "./LibraryContainer.module.css"
import ArtCard from '../../cards/Art Card/ArtCard.jsx'
import ArtContainer from "../Art Container/ArtContainer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { GalleryAdd, GalleryRemove, MouseCircle } from 'iconsax-react'



function LibraryContainer(){

  const image1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"
  const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
  const image3 =  "https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"
  const image4 = "https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg"

    const arts = [
        {
        id: 1,
        images:[image1, image3, image4],
        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image2, image1],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image1, image3, image2],
        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image1, image3, image2],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image2, image1],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image1, image3, image2],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image3, image2],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        images:[image3, image2],

        title: 'See of the eye',
        tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },]

      const [posts, setPosts] = useState([])
      const [selectActivate, setSelectActivate] = useState(false)
      const [selectedPost, setSelectedPost] = useState([])

      useEffect(()=>{
        const fetchPosts = async () => {
          const response = await axios.get('https://auth.bizawit.com/api/v1/gallery/1')
          setPosts(response.data);
          
        }
        fetchPosts()
        console.log(posts)
      },[])

      

      function removeFromGallery(){

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