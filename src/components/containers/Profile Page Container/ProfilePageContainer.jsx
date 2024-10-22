import { useEffect, useState } from 'react'
import axios from 'axios'
import RadioButtons from '../../buttons/RadioButtons/RadioButtons'
import style from './ProfilePageContainer.module.css'
import { PopUp } from '../../pops/Pop Up/PopUp'
import RatingStars from '../../general/RatingStars/RatingStars'
import { PopOver } from '../../pops/Pop Over/PopOver'
import { useNavigate } from 'react-router-dom'
import ArtCard from '../../cards/Art Card/ArtCard'
import ProfileImage from '../../general/Profile Image/ProfileImage'
import JobContainer from '../JobContainer/JobContainer'
import JobCard from '../../cards/Job Cards/JobCard'
import {BookSaved, NotificationCircle, TickCircle, GalleryRemove, MouseCircle, Trash} from "iconsax-react";
import {useAuth} from "../../../utils/AuthContext.jsx";
import CommandButton from "../../buttons/Command Buttons/CommandButton.jsx";



const keywords=["post","job"]


const ProfilePageContainer = ({id, isPersonal=true})=>{

    const[Category,setCategory]=useState("post")
    const[Rate,setRate]=useState(false)
    const [profile, setProfile] = useState({})
    const {logout, user} = useAuth();

    const [jobs, setJobs] = useState([])
    const [posts, setPosts] = useState(null)
    const [selectMode, setSelectMode] = useState(false)
    const [selectedPost, setSelectedPost] = useState([])
    const [selectedJob, setSelectedJob] = useState([])
    
    const navigate = useNavigate()

    

    const fetchPosts = async () =>{
        console.log(user.id)
        try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/user/${id}/post`)
            setPosts(res.data.data)
        }
        catch(e){console.error(e)}
    }

    const fetchJobs = async () =>{
        try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/user/${id}/job`)
            setJobs(res.data.data)
            }catch(e){console.log(e)}

    }




    const selectPost = (e, id) => {

        e.stopPropagation()
        if(selectedPost.includes(id))
            setSelectedPost(selectedPost.filter(postId => postId !== id))
        else
            setSelectedPost([...selectedPost, id])
        console.log(selectedPost)

    }

    const selectJob = (e, id) => {
        e.stopPropagation()
        if(selectedJob.includes(id))
            setSelectedJob(selectedJob.filter(jid=> id!==jid))
        else
            setSelectedJob([...selectedJob, id])
        console.log(selectedJob)


    }

    const handlePostClick = (art) => {
        console.log(art.id)
        navigate(`/art/${art.id}`, {state: {art}});
    }

    const handleJobClicked = (jobId) => {
        // console.log(job)
        navigate(`/job/${jobId}`)
    }

    function handleCatageorySelect(index){
        setCategory('')
        setCategory(keywords[index])
        setSelectedPost([])
        setSelectedJob([])
        setSelectMode(false)
        console.log(Category)
    }

    const deleteJob = async (id) => {
    try{
        const updatedContent = jobs.filter((job)=> job.job_id !== id)
        await setJobs(updatedContent)
        console.log(id)
        await axios.delete(`https://localhost:3000/api/v1/job/${id}`);

    }catch (error) {
    console.error("Error deleting job:", error);}    
    }


    const deletePost = async (id) => {
        try{
            const updatedContent = posts.filter((post)=> post.id !== id)
            await setPosts(updatedContent)

            console.log(id)
            await axios.delete(`https://auth.bizawit.com/api/v1/post/${id}`);


        }catch (error) {
        console.error("Error deleting post:", error);
    }    
    }
    
const deleteSelection = async () => {
    if (Category === "post" && selectedPost.length > 0) {
        await Promise.all(selectedPost.map(async (postId) => {
            await deletePost(postId);
        }));
    } else if (Category === "job" && selectedJob.length > 0) {
        await Promise.all(selectedJob.map(async (jobId) => {
            await deleteJob(jobId);
        }));
    }
    // Reset selected items after deletion
    setSelectedPost([]);
    setSelectedJob([]);
};


    const rateUser = () => {

    }

    
    function goToChat(){
        axios.post('https://auth.bizawit.com/api/v1/chat',{user1ID:1,user2ID:3}).then(
            res => {
                console.log("ME",res)
            }
        )
        // navigate(`/chat/3`)
    }




    useEffect(()=>{
        const fetchUserInfo = async () =>{
            try{
                const response = await axios.get(`https://auth.bizawit.com/api/v1/user/${id}`)
                setProfile(response.data[0][0])
            }
            catch(error) {console.error(error)}
        }

        fetchUserInfo()
        console.log(isPersonal)
    }, [])


    useEffect (()=>{
        console.log("ss")
        if(Category === 'job'){
            fetchJobs()
        }
        else
            fetchPosts()
    }, [<Category></Category>, jobs])

    




        return(

        <div className={style.container}>
            <div className={style.profilecontainer}>
                <div className={style.profile}>
                    <ProfileImage size='113px' src={profile.profile_picture} alt="" />
                    <p className={style.username}>{profile.first_name + " " + profile.last_name}</p>
                    <p className={style.address}>@{profile.username}</p>
                </div>


                <div className={style.profile_info}>
                    <div className={style.Rating}>
                        <p className={style.top}>Rating</p>
                        <p className={style.bottom}><RatingStars star={profile.rating} rateAllow={false} rate={rateUser}></RatingStars></p>

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
                {!isPersonal ?
                    <div className={style.profile_Buttons}>
                        <PopOver left={true} component={<button className={style.pbuttons}>Rate</button>} state={Rate} setState={setRate}>
                            <div className={style.Ratingcontainer}>

                                <RatingStars rateAllow={true} rate={rateUser}></RatingStars>

                            </div>
                        </PopOver>
                        <CommandButton commandTerm={"Message"} onClick={goToChat}/>

                    </div>
                    :
                    <div className={style.profile_Buttons}>
                        {/* <CommandButton commandTerm={"Edit"} onClick={goToChat}/> */}
                        <CommandButton commandTerm={"Logout"} onClick={logout}/>


                    </div>
                }
            </div>

            <div className={style.buttons}>
            <div className={style.filter_buttons}>
                <RadioButtons onSelect={handleCatageorySelect} selected={Category}>
                    <button value={"post"} className={`${style.fbuttons} ${Category === "post" ? style.selected : ""}`} onClick={() => setCategory("post")}>Post</button>
                    <button value={"job"} className={`${style.fbuttons} ${Category === "job" ? style.selected : ""}`} onClick={() => setCategory("job")}>Job</button>
                </RadioButtons>
            </div>

            {isPersonal &&
            <div className={style.selectButton}>
              { (!selectMode || (selectedPost.length === 0 && selectedJob.length === 0)) ?

              <MouseCircle size={"25px"} 
                color="var(--secondary-color)"
                variant = {selectMode? 'Bulk' : 'Outline'} 
                onClick={()=>{
                    setSelectMode(!selectMode)}}/>
                :
                <Trash size={"25px"} 
                color="var(--secondary-color)"
                variant='Outline'
                onClick={deleteSelection}/>
            }
            </div>
            }



            </div>



            {/* <div className={style.content_container}> */}
            {Category==="post" &&
                <div className={style.post_container}>

                    {(posts && posts.length>0) ?
                    posts.map((art)=>
                    
                    <div key={art.id} className={style.art_card}
                            onClick={()=>handlePostClick(art)}>
                        <div className={style.image_container}>
                        {selectMode &&( 
                        selectedPost.includes(art.id)?
                        <TickCircle className={style.tick} color="var(--highlight-color)" onClick={(e)=>selectPost(e,art.id)}/>
                        :
                        <NotificationCircle className={style.tick} color="var(--highlight-color)" onClick={(e)=>selectPost(e,art.id)} />
                        )}
                        <img src={`https://auth.bizawit.com/api/v1/upload/600/${art.post_thumbnail}`} className={style.art_image} alt="art" />
                        

                        </div>
                    </div>)
                    :
                    <div className={style.nothing}>No art posted</div>
                    }

                </div>
            }

            {Category==="job" &&
                <div className={style.job_container}>
                    {jobs &&
                    
                    jobs.length > 0 ?
                    (jobs.map((job)=> 
                    
                    

                    <div key={job.job_id} className={style.jobcard} 
                    onClick={()=>handleJobClicked(job.job_id)}>
                         {selectMode &&( 
                    selectedJob.includes(job.job_id)?
                    <TickCircle className={style.tick} size={"20px"} color="var(--dark-border-color)" onClick={(e)=>selectJob(e,job.job_id)}/>
                    :
                    <NotificationCircle className={style.tick} size={"20px"} color="var(--dark-border-color)" onClick={(e)=>selectJob(e,job.job_id)} />
                    )}
                    <ProfileImage userId={job.user_id} src={job.profile_picture} size='46px' />

                <div className={style.jobcard_content}>
                    <div className={style.line1}>
                        <div className={style.nameaddress}>
                            <p className={style.names}>{job.first_name + " " + job.last_name}</p> {/* Access name from user object */}
                            <p className={style.address}>{job.location}</p>
                        </div>
                        
                    </div>
                    

                    <p className={style.role}>
                        {job.job_title}
                        <span className={style.rate}>{job.job_price} <span>Birr/hr</span></span>
                    </p>


                    <div className={style.description}>
                        <p className={style.jobdescription}>
                            {job.job_description}
                        </p>
                    </div>
                   

                    
                    
                </div>
                
                </div>
                    ))
                :
                <div className={style.nothing}>No jobs posted</div>

                }
                </div>}

            



        </div>
    )


}

export default ProfilePageContainer
