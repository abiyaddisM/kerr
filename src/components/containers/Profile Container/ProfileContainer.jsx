import styles from './ProfileContainer.module.css'
import ProfileCard from '../../cards/Profile Card/ProfileCard';
import SearchBar from '../../general/Search Bar/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../utils/AuthContext';

const ProfileContainer = ({profiles=[], onProfileClick=()=>{}, share=false}) => {
    const [users, setUsers] =useState([])
    const navigate = useNavigate();
    const {id} = useParams()
    const [searchTerm, setSearchTerm] = useState('')
    const {user} = useAuth()


    // useEffect(()=>{
            
    //        const fetchUser = async () =>{
            
    //         try{
                
    //         const res = await axios.get(`https://auth.bizawit.com/api/v1/search/user?search=${searchTerm}`)
    //         setUsers(res.data.data.filter(u=>u.id !== user.id))
    //             console.log("jiii")
    //         }catch(e){console.log(e)}
    //      }
    //      if(share && profiles.length === 0) 
    //         fetchUser()
    //     // else
    //     //     setUsers(profiles)
    // },[searchTerm])


    // const handleProfileClick = (id) => {
    //     navigate(`/profile/${id}`)
    //     onProfileClick(id)
    // }
    useEffect(()=>{
        console.log(profiles)
        
    },[])

    const handleProfileClick = (id) => {
        if (share)
        {
            navigate(`/chat`)
            // onProfileClick()
        }
        else
            onProfileClick(id)
        
    }


    return (
        <div className={`${styles.container} ${!profiles? styles.empty: ''}`}>
            {share &&
            <div className={styles.searchContainer}>
                <SearchBar focus={true} 
                onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
}
            <div className={styles.content}>

            {profiles? 
            (
                profiles.map((profile) => 
                <ProfileCard 
                onClick={()=>handleProfileClick(profile.id)}
                key={profile.id}
                user={profile}/>
            )
            ):(
                <h1>No profiles available.</h1>

            )}
            </div>

        </div>
    )
}

export default ProfileContainer;