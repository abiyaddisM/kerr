import { useEffect, useState } from 'react';
import LibraryContainer from '../../components/containers/Library Container/LibraryContainer';
import styles from './LibraryPage.module.css';
import { useAuth } from '../../utils/AuthContext';
import axios from 'axios';

const LibraryPage = () => {

    const {user} = useAuth()
    const [arts, setArts] = useState(null)

      useEffect(()=>{
        const fetchPosts = async () => {
          const response = await axios.get(`https://auth.bizawit.com/api/v1/gallery/${user.id}`)
          setArts(response.data.data);
          
        }
        fetchPosts()
        
      },[])

    return(
        <div className={styles.libraryPage}>
            <LibraryContainer arts={arts}/>
        </div>
    )

}
export default LibraryPage;
