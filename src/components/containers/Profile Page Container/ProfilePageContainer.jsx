import { useState } from 'react'
import RadioButtons from '../../buttons/RadioButtons/RadioButtons'
import style from './ProfilePageContainer.module.css'
import { PopUp } from '../../pops/Pop Up/PopUp'
import RatingStars from '../../general/RatingStars/RatingStars'
import { PopOver } from '../../pops/Pop Over/PopOver'
import { useNavigate } from 'react-router-dom'

const keywords=["post","job"]
function ProfilePageContainer(){
    const[Category,setCategory]=useState("post")
    const[Rate,setRate]=useState(false)
    const [isDeleted, setIsDeleted] = useState(false);
    const [isclosed, setIsClosed] = useState(false);

    const navigate=useNavigate();
    

    function handleCatageorySelect(index){
        setCategory(keywords[index])
        console.log(Category)
    }

    const handleDelete = () => {
        setTimeout(() => {
            setIsDeleted(true);
        }, 2000);

        


      };
    

    function goToChat(){
        navigate('/chat')

    }


        return(
        <div className={style.container}>
            <div className={style.profilecontainer}>
            <img className={style.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p className={style.username}>Yom Fisseha</p>
                <p className={style.address}>@YOMMMM</p>

                <div className={style.profile_info}>
                    <div className={style.Rating}>
                        <p className={style.top}>Rating</p>
                        <p className={style.bottom}>Not Rated Yet</p>

                    </div>

                    <div className={style.Rating}>
                        <p className={style.top}>Category</p>
                        <p className={style.bottom}>3D Art</p>

                    </div>

                    <div className={style.Rating}>
                        <p className={style.top}>Category</p>
                        <p className={style.bottom}>3D Art</p>

                    </div>

                </div>

                <div className={style.profile_Buttons}>
                    <PopOver left={true} component={<button className={style.pbuttons}>Rate</button>} state={Rate} setState={setRate}>
                        <div className={style.Ratingcontainer}>

                        <div className={style.profilecontainer}>
            <img className={style.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p className={style.username}>Yom Fisseha</p>
                <p className={style.address}>@YOMMMM</p>

                <div className={style.profile_info}>
                    <div className={style.Rating}>
                        <p className={style.top}>Rating</p>
                        <p className={style.bottom}>Not Rated Yet</p>

                    </div>

                    <div className={style.Rating}>
                        <p className={style.top}>Category</p>
                        <p className={style.bottom}>3D Art</p>

                    </div>

                    <div className={style.Rating}>
                        <p className={style.top}>Category</p>
                        <p className={style.bottom}>3D Art</p>

                    </div>

                </div>


                            <RatingStars star={1}></RatingStars>
                        </div> 

                        </div>
                    </PopOver>
                    <button onClick={goToChat} className={style.pbuttons}>Message</button>
                    <PopOver left={true} component={<button className={style.pbuttons} state={isclosed} setState={setIsClosed}>Delete</button>}>
                    {!isDeleted ? 
                        (<>
                        <div className={style.delbtncon}>
                        <div className={style.delcon}>
                            <p className={style.deltext}>This action will delete "something" permanently.</p>
                            <p className={style.deltext}>Do you want to continue?</p>
                        </div>
                        <div className={style.ynbtncon}>
                                <button className={style.ynbtn}>Cancel</button>
                            <button className={style.ynbtn} onClick={handleDelete} >Delete</button>     
                        </div>

                        </div>
                        </>):(<p>Deleted Succesfully!</p>)
                        
                        
                    }
                    </PopOver>

                </div>
            </div>

            <div className={style.filter_buttons}>
                <RadioButtons 
                    // keywords={keywords} 
                    onSelect={handleCatageorySelect} 
                    selected={Category}>
                    <button value={"post"} className={`${style.fbuttons} ${Category==="post" ? style.selected:""}`} 
                        onClick={()=>setCategory("post")}>Post</button>
                    <button value={"job"} className={`${style.fbuttons} ${Category==="job" ? style.selected:""}`}
                        onClick={()=>setCategory("job")}>Job</button>
                </RadioButtons>
                


            </div>

           {Category==="post" && 
                <div className={style.post_container}>
                    <img className={style.pics} src="https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a" alt="" />
                    <img className={style.pics} src="https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"alt="" />
                    <img className={style.pics} src="https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg"alt="" />
                    <img className={style.pics} src="https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"alt="" />
                    <img className={style.pics} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"alt="" />
                </div>}

            {Category==="job" && 
                <div className={style.job_container}>

            </div>}

            


        </div>
    )


}

export default ProfilePageContainer