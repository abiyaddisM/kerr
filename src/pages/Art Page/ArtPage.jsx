import SearchBar from '../../components/general/Search Bar/SearchBar'
import ButtonGroup from '../../components/buttons/Button Group/ButtonGroup'
import ArtContainer from '../../components/containers/Art Container/ArtContainer'
import './ArtPage.css'
import { useState } from 'react'
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons'
import { GalleryAdd, MouseCircle } from 'iconsax-react'
import axios from 'axios'


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
  },
  {
    id: 8,
    images:[image1, image3, image4],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 9898,
    saves: 100,
    postId: 4,
    postDate: new Date('2024-09-10')
  },
  {
    id: 9,
    images:[image3],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 1833,
    saves: 100,
    postId: 5,
    postDate: new Date('2020-12-20')
  },
  {
    id: 10,
    images:[image4],
    title: 'A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 2999,
    saves: 100,
    postId: 1,
    postDate: new Date('2024-09-17')
  },
  {
    id: 11,
    images:[image2, image3, image1],
    title: 'A cyberpunk-themed artwork often presents a dystopian future where advanced technology merges with a decaying urban landscape.',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 3468,
    saves: 100,
    postId: 3,
    postDate: new Date('2023-09-27')

    
  },
  {
    id: 12,
    images:[image1, image4],
    title: 'See of the eye',
    tags: ['3D', 'Futuristic', 'Neon', 'Landscape'],
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 2599,
    saves: 100,
    postId: 2,
    postDate: new Date('2022-03-17')
  }
]



const ArtPage = () =>{
  const keywords = ['Trending', 'Recent', 'All Time Popular', 'Most Views', 'Oldest']

    const [selectActivate, setSelectActivate] = useState(false)
    const [selectedPost, setSelectedPost] = useState([])


    const [types, setTypes] = useState(keywords[0])

    function handleTypeSelect(index){
      setTypes(keywords[index])
    }

    function filterArts(type) {
      let posts = []
      switch (type) {
        case 'Trending':
          //within month or week above a certain threshhold of views
          posts = arts.filter(art => art.views > 2000 && art.postDate > new Date('2024-01-01'))
                      .sort((a,b)=> new Date(b.postDate) - new Date(a.postDate))
          break;
        case 'Recent':
          //should be first 10 or so most recent posts
          posts = arts.filter(art => art.postDate > new Date('2024-01-01'))
                      .sort((a,b)=> new Date(b.postDate) - new Date(a.postDate))
          break;
        case 'All Time Popular':
          //all the posts with highst views
          posts = arts.filter(art => art.views > 3000) 
                      .sort((a,b)=> b.views - a.views)
          break;
        case 'Most Views':
          //all posts with highest views whithin a year
          posts = arts.filter(art => art.views > 2000 && art.postDate >= new Date('2023-09-17'))
                      .sort((a,b)=> b.views - a.views)
          break;
        case 'Oldest':
          //oldest most posts
          posts = arts.filter(art => art.postDate < new Date('2024-01-01'))
                      .sort((a, b) => new Date(a.postDate) - new Date(b.postDate))
          break;
        default:
          posts = arts
          break;
      }
      return posts
    }

    function addToGallery(){
      
      selectedPost.map(p=>{
        const post = {
        userID: 1,
        postID: p.id
      }
      axios.post('https://auth.bizawit.com/api/v1/gallery', post )
      .then(resp=>console.log(resp))
      .catch(err=>console.error(err))
    }) 
    console.log(selectedPost)
    }

    

    return(
        <div className='art_page'>
            <div className='keywords'>
            <RadioButtons 
            keywords={keywords}
            selected={types}
            onSelect={handleTypeSelect}
            border = {true}
            />
            </div>
            <ArtContainer arts={filterArts(types)}  />

        </div>
    )
}

export default ArtPage
