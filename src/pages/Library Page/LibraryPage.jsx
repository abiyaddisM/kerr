import { useEffect, useState } from 'react';
import LibraryContainer from '../../components/containers/Library Container/LibraryContainer';
import styles from './LibraryPage.module.css';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';

const LibraryPage = () => {

    const {user} = useAuth()
    const [arts, setArts] = useState(null)
    const [selectedPost, setSelectedPost] = useState([])

      const deleteArt = async (id) => {
        
        try{
          const url = `https://auth.bizawit.com/api/v1/gallery/${user.id}`
          const response = await axios.delete(url, {
            params: {postID: id}})
          console.log(response.data)
          
        }
        catch(e){console.error(e)}        
      }

      const removeFromGallery = async ()=>{
        for (const post of selectedPost) {
          
            await deleteArt(post);
        }

        setArts((prev) => prev.filter(art=> !selectedPost.includes(art.id)))

        
      }



      useEffect(()=>{
        const fetchPosts = async () => {
          const response = await axios.get(`https://auth.bizawit.com/api/v1/gallery/${user.id}`)
          setArts(response.data.data);
          
        }
        fetchPosts()
        
      },[])

    return(
        <div className={styles.libraryPage}>
            <LibraryContainer arts={arts} selectedPost={selectedPost} setSelectedPost={setSelectedPost} onDelete={removeFromGallery}/>
        </div>
    )

}
export default LibraryPage;
