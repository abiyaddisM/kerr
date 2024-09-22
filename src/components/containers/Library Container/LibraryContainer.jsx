import styles from "./LibraryContainer.module.css"
import ArtCard from '../../cards/Art Card/ArtCard.jsx'


function LibraryContainer(){

    const image1 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
    

    const arts = [
        {
        id: 1,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },
      {
        id: 2,
        image:image1,
        title: 'See of the eye',
        userName: 'some guy',
        userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        views: '2.5K',
        duration: '4 weeks'
      },]



    return(
        <div className={styles.art_container}>
        {arts.map((value)=>{
            return <ArtCard key={value.id} art={value} className={styles.art_card}/>
        })}
    </div>

    );
     
 
 }
 
 export default LibraryContainer;