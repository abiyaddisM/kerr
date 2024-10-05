import { useState } from 'react'
import ArtCard from '../../cards/Art Card/ArtCard.jsx'
import { PopUp } from '../../pops/Pop Up/PopUp.jsx'
import styles from './ArtContainer.module.css'
import ViewContainer from '../View Container/ViewContainer.jsx'
import ViewPage from '../../../pages/View Page/ViewPage.jsx'
import { useNavigate } from 'react-router-dom'



const ArtContainer = ({arts}) => {

    
    
    const navigate = useNavigate();

    const handleArtClick = (art) => {
      console.log(art.id)  
      
      navigate(`/art/${art.id}`, {state: {art}});
    }
  
    
    return(
        <div className={styles.art_container}>
          {arts.length != 0 ?
            (arts.map((a)=>{
                return (
                // <PopUp key={a.id} component={
                <ArtCard key={a.id} art={a} className={styles.art_card} onClick={()=>handleArtClick(a)}/>
                // } state={isClicked} setState={setIsClicked}>
                  
                  // <ViewPage arts={[clickedArt]} />
                  // </PopUp>
                )
            })
          ) :(
            <h1 className={styles.empty}>No artworks available.</h1>
          )
          }

        </div>
    )
}
export default ArtContainer
