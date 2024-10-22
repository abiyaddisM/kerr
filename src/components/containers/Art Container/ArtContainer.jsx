import { useEffect, useState } from 'react'
import ArtCard from '../../cards/Art Card/ArtCard.jsx'
import { PopUp } from '../../pops/Pop Up/PopUp.jsx'
import styles from './ArtContainer.module.css'
import ViewContainer from '../View Container/ViewContainer.jsx'
import ViewPage from '../../../pages/View Page/ViewPage.jsx'
import { useNavigate } from 'react-router-dom'



const ArtContainer = ({arts, selectMode=false, selectedPost=null, setSelectedPost=()=>{}, isLoading}) => {

    
    // const [selectedPost, setSelectedPost] = useState([])

    const navigate = useNavigate();

    const handleArtClick = (art) => {
      console.log(art.id)  
      
      navigate(`/art/${art.id}`);
    }

    const selectPost = (e, id) => {
        e.stopPropagation()
        if(selectedPost.includes(id))
            setSelectedPost(selectedPost.filter(postId => postId !== id))
        else
            setSelectedPost([...selectedPost, id])

    }


    useEffect(()=>{
      console.log(arts)

    }, [selectedPost])
  
    const loadingCard = []
    for(let i= 0; i< 20; i++){
        loadingCard.push(
            <div className={styles.loading_card}></div>
        )
    }
    return(
        <div className={styles.art_container}>
          {!arts ? 
          <h1>No Arts Container</h1>
          :
          !isLoading ?
            (arts.map((value)=>{
                    // console.log(value)
                    const newCard = {
                        id: value.id,
                        images:[value.post_thumbnail],
                        title:value.post_title,
                        userName: value.first_name + " " + value.last_name,
                        views:value.view,
                        userImage:value.profile_picture,
                        postDate:value.created_at
                    }
                return (
                <ArtCard key={newCard.id} art={newCard} className={styles.art_card} onClick={()=>handleArtClick(newCard)} selectMode={selectMode} selected={selectMode && selectedPost.includes(newCard.id)} onSelect={(e)=>selectPost(e, newCard.id)}/>
                )
            })
          ) :
              loadingCard
          }

        </div>
    )
}
export default ArtContainer
