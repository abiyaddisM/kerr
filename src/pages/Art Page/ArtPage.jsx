import SearchBar from '../../components/general/Search Bar/SearchBar'
import Keywords from '../../components/buttons/Keywords Buttons/Keywords'
import ArtContainer from '../../components/containers/Art Container/ArtContainer'

import './ArtPage.css'



const ArtPage = () =>{

    const keywords = ['Trending', 'Recent', 'All Time Popular', 'Most Views', 'Oldest']

    return(
        <div className='art_page'>
            {/* <SearchBar/>  */}
            <div className='keywords'>
            <Keywords keywords={keywords}/>
            </div>
            <ArtContainer/>
        </div>
    )
}

export default ArtPage
