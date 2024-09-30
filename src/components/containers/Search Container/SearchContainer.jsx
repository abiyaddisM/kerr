import CommandButton from '../../buttons/Command Buttons/CommandButton'
import ButtonGroup from '../../buttons/Button Group/ButtonGroup'
import RadioButtons from '../../buttons/RadioButtons/RadioButtons'
import SearchBar from '../../general/Search Bar/SearchBar'
import styles from './SearchContainer.module.css'
import ArtContainer from '../Art Container/ArtContainer'
import ProfileContainer from '../Profile Container/ProfileContainer'
import JobContainer from '../JobContainer/JobContainer'
import { useState } from 'react'




const image1 = 'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__'
const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
const image3 =  'https://s3-alpha-sig.figma.com/img/39fd/34f5/c68bfbf235ccdf7e982b59015f40b0d7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AGnSpJFOk5SzySbCsfmgYxkrRqX1C5HfRswwe7gyL5fY~908-xyrmk0LhJiYtNrsrRvNGbUxrkJ8GlVIFNXihuO1irz1RraoKJjfrCTBc3CrJYPHXrrMpuvZeTp79k6~3MUlfnVJ04NiiqJQmGTcWauD0bq4D4McIzF30xAXadHO1FnWhpfhhXuPZARWPyX6l21grslWzkkiDxNOQv-Nnms3rBy68NCfIteD~VExlS35usGEDLjBWVUR6GiFz8Ngnz5AQ6MkPTm7BMgL76GDP9dokRJcXGqCfrBilqswSXXBV5PcbcNw6Mb35CQcfrNKOngkO1c0HD59OXJvV7Ehuw__'

const posts = [
    {
    id: 1,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 2,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 3,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 4,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 5,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 6,
    image:image2,
    title: 'greener',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 7,
    image:image2,
    title: 'creation',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 8,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 9,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 10,
    image:image2,
    title: 'greenery',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 11,
    image:image2,
    title: 'that pic',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 12,
    image:image2,
    title: 'Tree',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: '2.5K',
    duration: '4 weeks'
  }
]


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

const jobs = [
  {
      id: '1',
      title: 'Tech Start Up Logo Design',
      description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
      rating: 3,
      user: profiles[1],
      keywords: ['Portrait', 'Futuristic', '3D', 'Sketch', 'Oil'],
      hourlyrate: 650,
      totalPrice: 3000,
      successrate: 80
      

  },
  {
      id: '2',
      title: 'Tech Start Up Logo Design',
      description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
      rating: 5,
      user: profiles[0],
      keywords: ['Futuristic', '3D', 'Sketch', 'Oil'],
      hourlyrate: 170,
      totalPrice: 3000,
      successrate: 60


  }, 
  {
      id: '3',
      title: 'Tech Start Up Logo Design',
      description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
      rating: 2,
      user: profiles[2],
      keywords: ['Realistic', 'Sketch', 'Oil'],
      hourlyrate: 950,
      totalPrice: 3000,
      successrate: 90

  },
  {
      id: '4',
      title: 'Tech Start Up Logo Design',
      description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
      rating: 2,
      user: profiles[2],
      keywords: ['Realistic', 'Portrait', '3D', 'Oil'],
      hourlyrate: 950,
      totalPrice: 3000,
      successrate: 90
  },
]







const SearchContainer = () => {

    const keywords=['Post', 'Profile', 'Job']
    const [category, setCategory] = useState(keywords[0])
    const [searchTerm, setSearchTerm] = useState('')


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
        return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
      }
      else if(category === 'Profile'){
        return profiles.filter(profile => profile.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }
      else{
        return jobs.filter(job => 
          job.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))||
          job.title.toLowerCase().includes(searchTerm.toLowerCase()))
      }
    }
  

    const buttons = keywords.map((k, index)=>{
        return <CommandButton 
            key={index} 
            commandTerm={k} 
            selected={category===k} 
            onClick={()=>handleCategorySelect(index)}/>
    })


  
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
            <div className={styles.search_result}>
                {category === keywords[0] && <ArtContainer arts={searchCategory(category, searchTerm)}/>}
                {category === keywords[1] && <ProfileContainer profiles={searchCategory(category, searchTerm)}/> }
                {category === keywords[2] && <JobContainer jobs={searchCategory(category, searchTerm)}/> }
            </div>
            
        </div>
    )
}

export default SearchContainer