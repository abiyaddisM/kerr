import styles from './ProfileContainer.module.css'
import ProfileCard from '../../cards/Profile Card/ProfileCard';
import SearchBar from '../../general/Search Bar/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = ({profiles=[], searchTerm='', onProfileClick=()=>{}, share=false}) => {
    const [users, setUsers] =useState([])
    const navigate = useNavigate();


    useEffect(()=>{
        console.log(share)
           const fetchUser = async () =>{
            try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/search/user?search=${searchTerm}`)
            setUsers(res.data.data)

            }catch(e){console.log(e)}
         }
         if(profiles.length === 0)
            fetchUser()
        else
            setUsers(profiles)
    })

    const handleProfileClick = (id) => {
        onProfileClick(id)
    }

    const handleProfileClicked = (id) => {
        if (share)
        {
            navigate(`/chat`)
            // onProfileClick()
        }
        else
            navigate(`/profile/${id}`)
        
    }


    return (
        <div className={`${styles.container} ${!profiles? styles.empty: ''}`}>
            {share &&
            <div className={styles.searchContainer}>
                <SearchBar focus={true}/>
            </div>
}
            <div className={styles.content}>

            {users? 
            (
                users.map((profile) => 
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