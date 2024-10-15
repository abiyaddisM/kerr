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



const images = [
    "https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a",
    "https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg",
    "https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg",
    "https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"
]

const image1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"
const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
const image3 =  "https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"
const image4 = "https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg"
const arts = [
    {
    id: 1,
    images:[image2, image1],
    title: 'A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 7300,
    saves: 100,
    postId: 1,
    postDate: new Date('2024-03-17')
  },
  {
    id: 2,
    images:[image1, image4],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 695,
    saves: 100,
    postId: 3,
    postDate: new Date('2024-07-17')
  },
  {
    id: 3,
    images:[image3, image4, image1, image2],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 800,
    saves: 100,
    postId: 2,
    postDate: new Date('2024-08-17')
  },
  {
    id: 4,
    images:[image1, image3, image2],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 250,
    saves: 100,
    postId: 1,
    postDate: new Date('2023-06-16')
  },
  {
    id: 5,
    images:[image4, image1],
    title: 'A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 5395,
    saves: 100,
    postId: 4,
    postDate: new Date('2022-01-03')
  },
  {
    id: 6,
    images:[image3, image2],
    title: 'A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 1234,
    saves: 100,
    postId: 3,
    postDate: new Date('2024-06-10')
  },
  {
    id: 7,
    images:[image2, image3, image4],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 230,
    saves: 100,
    postId: 2,
    postDate: new Date('2023-10-17')
  }]


const keywords=["post","job"]


const ProfilePageContainer = ({isPersonal=true})=>{
    
    const[Category,setCategory]=useState("post")
    const[Rate,setRate]=useState(false)
    const [content, setContent] = useState([])

    const [jobs, setJobs] = useState([])
    const [posts, setPosts] = useState([])
    const [selectMode, setSelectMode] = useState(false)
    const [selectedPost, setSelectedPost] = useState([])
    const [selectedJob, setSelectedJob] = useState([])
    
    const fetchPosts = () =>{
        setPosts(arts)
    }

    const fetchJobs = async () =>{
            try{
            const res = await axios.get('https://auth.bizawit.com/api/v1/job')
            setJobs(res.data[0])
            }catch(e){console.log(e)}
    }



    const selectPost = (e, id) => {
        // const updatedPost = posts.filter((post)=> post.id !== id)
        // setPosts(updatedPost)
        
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


    const navigate = useNavigate()

    useEffect (()=>{
        if(Category === 'job'){
            fetchJobs()
        }
        else
            fetchPosts()
    }, [Category])

    function handleCatageorySelect(index){
        setCategory('')
        setCategory(keywords[index])
        setSelectedPost([])
        setSelectedJob([])
        setSelectMode(false)
        console.log(Category)
    }

    function goToChat(){
        const id = 2
        navigate(`/chat`)
    }

    const handlePostClick = (art) => {
      console.log(art.id)  
      navigate(`/art/${art.id}`, {state: {art}});
    }

    const handleJobClicked = (jobId) => {
        // console.log(job)
        navigate(`/job/${jobId}`)
    }

    const deleteJob = async (id) => {
    try{
        const updatedContent = jobs.filter((job)=> job.job_id !== id)
        await setJobs(updatedContent)
        console.log(id)
        // await axios.delete(`https://auth.bizawit.com/api/v2/job/${id}`);

    }catch (error) {
    console.error("Error deleting job:", error);
    // setContent(content)
}    
}

    const deletePost = async (id) => {
        try{
            const updatedContent = jobs.filter((job)=> job.job_id !== id)
            await setJobs(updatedContent)
            console.log(id)
            // await axios.delete(`https://auth.bizawit.com/api/v2/job/${id}`);

        }catch (error) {
        console.error("Error deleting job:", error);
        // setContent(content)
    }    
    }
    
    const deleteSelection=()=>{
        if(Category === "post"){
            selectedPost?.length > 0
                selectedPost.map(p=>{
                    deletePost(p)
                }) 
            }
        else{
            selectedJob?.length > 0
                selectedJob.map(p=>{
                    deletePost(p)
                }) 
            }
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
                {!isPersonal &&
                <div className={style.profile_Buttons}>
                    <PopOver left={true} component={<button className={style.pbuttons}>Rate</button>} state={Rate} setState={setRate}>
                        <div className={style.Ratingcontainer}>

                        <div className={style.profilecontainer}>
                        <img className={style.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <p className={style.username}>Yom Fisseha</p>
                            <p className={style.address}>@YOMMMM</p>

                        </div>

                            <RatingStars star={1}></RatingStars>

                </div>
                    </PopOver>
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

            {/* {selectedPost.length !== 0 &&
                <div className={style.icon_buttons}>
                    <Trash variant='Broken' onClick={deleteSelection}/>
                    {Category==="job" &&
                    <Trash variant='Broken' onClick={deleteSelection}/>
                    }
                </div>
            } */}
            </div>
            


            {/* <div className={style.content_container}> */}
                {Category==="post" && 
                <div className={style.post_container}>
                    {/* <img className={style.pics} src="https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a" alt="" />
                    <img className={style.pics} src="https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"alt="" />
                    <img className={style.pics} src="https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg"alt="" />
                    <img className={style.pics} src="https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"alt="" />
                    <img className={style.pics} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"alt="" /> */}

                    {posts && posts.length>0 &&
                    posts.map((art)=>

                    // <ArtCard key={art.id} art={art} hideCaption={true} onClick={()=>handlePostClick(art)} selected={selectedPost.includes(art.id)} onSelect={(e)=>selectPost(e,art.id)}/>)}
                    
                    <div key={art.id} className={style.art_card}
                            onClick={()=>handlePostClick(art)}>
                        <div className={style.image_container}>
                        {selectMode &&( 
                        selectedPost.includes(art.id)?
                        <TickCircle className={style.tick} color="var(--highlight-color)" onClick={(e)=>selectPost(e,art.id)}/>
                        :
                        <NotificationCircle className={style.tick} color="var(--highlight-color)" onClick={(e)=>selectPost(e,art.id)} />
                        )}
                        <img src={art.images[0]} className={style.art_image} alt="art" />

                        </div>
                    </div>)
                }
                </div>
            }

            {Category==="job" && 
                <div className={style.job_container}>
                    {jobs &&
                    // <JobContainer jobs={content}/>
                    jobs.length > 0 &&
                    (jobs.map((job)=> 
                    // <JobCard key={job.id} job={job} onDelete={()=>deleteJob(job.job_id)}/>
                    

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
                            <p className={style.names}>{job.full_name}</p> {/* Access name from user object */}
                            <p className={style.address}>Ethiopia, Summit</p>
                        </div>
                        
                    </div>
                    

                    <p className={style.role}>
                        {job.job_title}
                        <span className={style.rate}>{"200"} <span>Birr/hr</span></span>
                    </p>

                    {/* <ul className={style.keywords}>
                        {job.tags &&
                        job.tags.split(',').map((k, index)=>
                        <li className={style.key}
                            key={index}>
                            {k}</li>
                    )}
                    </ul> */}

                    <div className={style.description}>
                        <p className={style.jobdescription}>
                            {job.job_description}
                        </p>
                    </div>
                   

                    
                    
                </div>
                
                </div>
                    ))}
                </div>}

            


        </div>
    )


}

export default ProfilePageContainer