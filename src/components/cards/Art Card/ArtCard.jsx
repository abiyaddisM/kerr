// import { differenceInWeeks } from 'date-fns';
import ProfileImage from '../../general/Profile Image/ProfileImage';
import styles from './ArtCard.module.css';
import dot from '../../../assets/icons/dot.svg'
import { useNavigate } from 'react-router-dom';
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import {NotificationCircle, TickCircle, TickSquare} from "iconsax-react";



const ArtCard = ({art, onClick, selected=false, onSelect=()=>{}, selectMode=false}) => {
    
    const {id, images, title, userName, userImage, views, postDate} = art
    const navigate = useNavigate()
    

    function handleArtClicked(art){
        //expad the art in new window
        // console.log(art);
        onClick(art);
        
    }

    function handleSelect(id){
        onSelect(id);
    }

    
    function calculateDuration() {
        const currentDate = new Date();
        const postDateObj = new Date(postDate);
        const diffInMilliseconds = currentDate - postDateObj;
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInDays < 1) {
            if (diffInMinutes < 60) {
                return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''}`;
            }
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''}`;
        }

        if (diffInDays < 7) {
            return `${diffInDays} day${diffInDays !== 1 ? 's' : ''}`;
        }
        if (diffInDays < 30) {
            return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''}`;
        }
        if (diffInDays < 365) {
            return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`;
        }
        if (diffInYears >= 1) {
            return `${diffInYears} year${diffInYears !== 1 ? 's' : ''}`;
        }
    }

    const viewCount = views > 999? 
        `${(Math.floor((views / 1000)*10)/10).toFixed(1)}K`
        : views;
    

    return (
        <div className={styles.art_card}
            onClick={handleArtClicked}>
                <div className={styles.image_container}>
                    {selectMode &&
                    (selected?
                    <TickCircle className={styles.tick} color="var(--highlight-color)" onClick={handleSelect}/>
                    :
                    <NotificationCircle className={styles.tick} color="var(--highlight-color)" onClick={handleSelect} />)
                    }
                    <img src={`https://auth.bizawit.com/api/v1/upload/600/${images[0]}`} className={styles.art_image} />

                </div>
            
            
            {/* {!selectMode && */}
            <div className={styles.art_caption}>
                
                <ProfileImage 
                src={`https://auth.bizawit.com/api/v1/upload/600/${userImage}`} 
                />

                <div className={styles.art_description}>
                    <p className={styles.art_title}>{title}</p>
                    <p>{userName}</p>
                    <div className={styles.post_info}>
                        <p>{viewCount} views</p>
                        <img src={dot} alt="" />
                        <p>{calculateDuration()}</p>
                    </div>

                </div>

            </div>
           
{/* // } */}
        </div>

    );
}

export default ArtCard;
