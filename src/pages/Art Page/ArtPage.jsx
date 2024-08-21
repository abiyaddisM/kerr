import SearchBar from '../../components/Search Bar/SearchBar'
import Keywords from '../../components/Keywords Buttons/Keywords'
import ArtContainer from '../../components/Art Container/ArtContainer'

import './ArtPage.css'

const ArtPage = () =>{
    return(
        <div className='art_page'>
            {/* <SearchBar/> */} 
            <Keywords/>
            <ArtContainer/>
        </div>
    )
}

export default ArtPage