import { useLocation, useNavigate } from 'react-router-dom';
import style from './ShareContainer.module.css';
import { Copy, Snapchat, Whatsapp } from 'iconsax-react';
import ProfileContainer from '../Profile Container/ProfileContainer';
import { useEffect, useState } from 'react';
import SearchBar from '../../general/Search Bar/SearchBar';
import { useAuth } from '../../../utils/AuthContext';
import axios from 'axios';



const ShareContainer = ({ id , onProfileClick=()=>{}}) => {
    const [location, setLocation] = useState('');
    const [profiles, setProfiles] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const {user} = useAuth()


    const navigate = useNavigate()

   

    function handleSearch (event){
        setSearchTerm(event.target.value)
    }

    function handleCopyClick() {
        navigator.clipboard.writeText(location)
            .then(() => {
                console.log('Copied to clipboard:', location);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    function goToMessage(profileId) {



        navigate(`/chat/${profileId}`)
    }


    useEffect(()=>{
        const fetchUser = async () =>{
            try{
            const res = await axios.get(`https://auth.bizawit.com/api/v1/search/user?search=${searchTerm }`)
            const filteredProfiles = res.data.data.filter(profile=> profile.id !== user.id)
            setProfiles(filteredProfiles);
            }catch(e){console.log(e)}
      }
      fetchUser()
    },[searchTerm])

    return (
        <div className={style.container}>
            <SearchBar
              searchTerm={searchTerm}
              onChange={handleSearch}
              focus = {true}
            />
            <div className={style.share}>
                <div className={style.internal_share}>
                    <ProfileContainer 
                    profiles={profiles}
                    onProfileClick={(profileId)=>goToMessage(profileId)}
                     />
                </div>
                
            </div>
        </div>
    );
};

export default ShareContainer;
