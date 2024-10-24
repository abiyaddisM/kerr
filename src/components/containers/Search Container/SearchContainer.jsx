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
                    onSelect={handleCategorySelect}
                    // keywords={keywords}
                    >
                      
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
