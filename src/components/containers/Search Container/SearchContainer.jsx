import axios from 'axios'
import CommandButton from '../../buttons/Command Buttons/CommandButton'
import ButtonGroup from '../../buttons/Button Group/ButtonGroup'
import RadioButtons from '../../buttons/RadioButtons/RadioButtons'
import SearchBar from '../../general/Search Bar/SearchBar'
import styles from './SearchContainer.module.css'
import ArtContainer from '../Art Container/ArtContainer'
import ProfileContainer from '../Profile Container/ProfileContainer'
import JobContainer from '../JobContainer/JobContainer'
import { useEffect, useState } from 'react'




const image1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28"
const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
const image3 =  "https://img3.wallspic.com/previews/4/6/0/4/6/164064/164064-cyberpunk_city-cyberpunk_2077-cyberpunk-science_fiction-digital_art-x750.jpg"
const image4 = "https://as1.ftcdn.net/v2/jpg/05/09/30/34/1000_F_509303404_Y49y3nSzoBInfbyCYTka4LAfyPGpXp8w.jpg"



const profiles = [
    {
        id: '1',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Aaron Mesfin'
    },
    {
        id:'2',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Some Guy'
    },
    {
        id: '3',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Kate Smith'
    }
]

// const jobs = [
//   {
//       id: '1',
//       title: 'Tech Start Up Logo Design',
//       description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
//       rating: 3,
//       user: profiles[1],
//       keywords: ['Portrait', 'Futuristic', '3D', 'Sketch', 'Oil'],
//       hourlyrate: 650,
//       totalPrice: 3000,
//       successrate: 80
      

//   },
//   {
//       id: '2',
//       title: 'Tech Start Up Logo Design',
//       description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
//       rating: 5,
//       user: profiles[0],
//       keywords: ['Futuristic', '3D', 'Sketch', 'Oil'],
//       hourlyrate: 170,
//       totalPrice: 3000,
//       successrate: 60


//   }, 
//   {
//       id: '3',
//       title: 'Tech Start Up Logo Design',
//       description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
//       rating: 2,
//       user: profiles[2],
//       keywords: ['Realistic', 'Sketch', 'Oil'],
//       hourlyrate: 950,
//       totalPrice: 3000,
//       successrate: 90

//   },
//   {
//       id: '4',
//       title: 'Tech Start Up Logo Design',
//       description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
//       rating: 2,
//       user: profiles[2],
//       keywords: ['Realistic', 'Portrait', '3D', 'Oil'],
//       hourlyrate: 950,
//       totalPrice: 3000,
//       successrate: 90
//   },
// ]







const SearchContainer = ({closeSearch}) => {


    const [isLoading,setIsLoading] = useState(true);


    const keywords=['Post', 'Profile', 'Job']
    const [category, setCategory] = useState(keywords[0])
    const [searchTerm, setSearchTerm] = useState('')

    const [jobs, setJobs] = useState([])
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])




    function handleCategorySelect(index) {
        setCategory(keywords[index])
        // category = keywords[index]
    }
    
    async function handleSearch(event) {
      const value = event.target.value
      setSearchTerm(value)
      searchCategory(category, value)
    }

    function searchCategory (category, searchTerm){
      if(category === 'Post'){
        return posts.filter(post => post.post_title.toLowerCase().includes(searchTerm.toLowerCase()))
      }
      else if(category === 'Profile'){
        return users.filter(profile => profile.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }
      else{
        return jobs.filter(job => {
    // Split the tags string into an array if it exists; otherwise, use an empty array
    const keywordsArray = job.tags ? job.tags.split(',').map(keyword => keyword.trim().toLowerCase()) : [];

    return keywordsArray.some(keyword => keyword.includes(searchTerm.toLowerCase())) ||
           job.job_title.toLowerCase().includes(searchTerm.toLowerCase());
});

      }
    }

    const fetchJobs = async () =>{
            console.log("job")

            try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/search/job?search=${searchTerm}`)
            setJobs(res.data.data)
            console.log(jobs)


            }catch(e){console.log(e)}
      }

      

   const fetchPost = async () =>{
            console.log("post")
            try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/search/post?search=${searchTerm}`)
            setPosts(res.data.data)
            setIsLoading(false)


            }catch(e){console.log(e)}
      }   
      
     const fetchUser = async () =>{
            try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/search/user?search=${searchTerm}`)
            setUsers(res.data.data)
            console.log(jobs)


            }catch(e){console.log(e)}
      }
  

    const buttons = keywords.map((k, index)=>{
        return <CommandButton 
            key={index} 
            commandTerm={k} 
            selected={category===k} 
            onClick={()=>handleCategorySelect(index)}/>
    })

    function handleResultClick(){
      closeSearch()
    }

    useEffect(()=>{
      if (category === 'Job')
        fetchJobs()
      else if(category === 'Post')
        fetchPost()
      else if(category === 'Profile')
        fetchUser()
    },[category, searchTerm])
  
    return (
        
        <div className={styles.container}>
            
            <SearchBar
              searchTerm={searchTerm}
              onChange={handleSearch}
              focus = {true}
            />
            <div className={styles.filter_buttons}>
                <RadioButtons
                    selected={category}
                    onSelect={handleCategorySelect}>
                    {buttons}
                </RadioButtons>
            </div>
            <div className={styles.search_result} onClick={handleResultClick}>
                {category === keywords[0] && <ArtContainer arts={posts} isLoading={isLoading}/>}
                {category === keywords[1] && <ProfileContainer profiles={users}/> }
                {category === keywords[2] && <JobContainer jobs={jobs} /> }
            </div>
            
        </div>
    )
}

export default SearchContainer