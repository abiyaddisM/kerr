import SearchBar from '../../components/general/Search Bar/SearchBar'
import ButtonGroup from '../../components/buttons/Button Group/ButtonGroup'
import ArtContainer from '../../components/containers/Art Container/ArtContainer'
import './ArtPage.css'
import { useState } from 'react'
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons'


const image1 = 'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__'
const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
const image3 =  'https://s3-alpha-sig.figma.com/img/39fd/34f5/c68bfbf235ccdf7e982b59015f40b0d7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AGnSpJFOk5SzySbCsfmgYxkrRqX1C5HfRswwe7gyL5fY~908-xyrmk0LhJiYtNrsrRvNGbUxrkJ8GlVIFNXihuO1irz1RraoKJjfrCTBc3CrJYPHXrrMpuvZeTp79k6~3MUlfnVJ04NiiqJQmGTcWauD0bq4D4McIzF30xAXadHO1FnWhpfhhXuPZARWPyX6l21grslWzkkiDxNOQv-Nnms3rBy68NCfIteD~VExlS35usGEDLjBWVUR6GiFz8Ngnz5AQ6MkPTm7BMgL76GDP9dokRJcXGqCfrBilqswSXXBV5PcbcNw6Mb35CQcfrNKOngkO1c0HD59OXJvV7Ehuw__'
const arts = [
    {
    id: 1,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 7300,
    postDate: new Date('2024-03-17')
  },
  {
    id: 2,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 695,
    postDate: new Date('2024-07-17')
  },
  {
    id: 3,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 800,
    postDate: new Date('2024-08-17')
  },
  {
    id: 4,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 250,
    postDate: new Date('2023-06-16')
  },
  {
    id: 5,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 5395,
    postDate: new Date('2022-01-03')
  },
  {
    id: 6,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 1234,
    postDate: new Date('2024-06-10')
  },
  {
    id: 7,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 230,
    postDate: new Date('2023-10-17')
  },
  {
    id: 8,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 9898,
    postDate: new Date('2024-09-10')
  },
  {
    id: 9,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 1833,
    postDate: new Date('2020-12-20')
  },
  {
    id: 10,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 2999,
    postDate: new Date('2024-09-17')
  },
  {
    id: 11,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 3468,
    postDate: new Date('2023-09-27')

    
  },
  {
    id: 12,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
    views: 2599,
    postDate: new Date('2022-03-17')
  }
]



const ArtPage = () =>{
  const keywords = ['Trending', 'Recent', 'All Time Popular', 'Most Views', 'Oldest']


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
            <ArtContainer arts={filterArts(types)}/>
        </div>
    )
}

export default ArtPage
