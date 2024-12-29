
import ArtContainer from '../../components/containers/Art Container/ArtContainer'
import './ArtPage.css'
import {useEffect, useState} from 'react'
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons'
import axios from 'axios'



const ArtPage = () =>{
  const keywords = ['Trending', 'Recent', 'All Time Popular', 'Most Views', 'Oldest']
  const [isLoading,setIsLoading] = useState(true);

  const [arts, setArts] = useState([])


    const [types, setTypes] = useState(keywords[0])

    function handleTypeSelect(index){
      setTypes(keywords[index])
    }

  useEffect(() => {
    axios.get("https://auth.bizawit.com/api/v1/post?page=1")
        .then(res => {
          setTimeout(()=>{
            setArts(res.data.data)
            setIsLoading(false)
          },0);
        })
  }, []);

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
            <ArtContainer arts={arts} isLoading={isLoading} />

        </div>
    )
}

export default ArtPage
