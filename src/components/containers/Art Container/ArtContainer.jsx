import ArtCard from '../../cards/Art Card/ArtCard.jsx'
import styles from './ArtContainer.module.css'




const ArtContainer = ({arts}) => {

    return(
        <div className={styles.art_container}>
          {arts.length != 0 ?
            (arts.map((a)=>{
                return <ArtCard key={a.id} art={a} className={styles.art_card}/>
            })
          ) :(
            <h1 className={styles.empty}>No artworks available.</h1>
          )
          }

        </div>
    )
}
export default ArtContainer
