import SideBar from "../../components/general/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/containers/JobContainer/JobContainer";
import SearchBar from "../../components/Search Bar/SearchBar";
import Notification from "../../components/Notification/Notification";
import './JobPage.css'
import { useState } from "react";


const JobPage = () => {

    const [isFilterCollapsed, setIsFilterCollapsed] = useState(false)

    function toggleFilterCollapse(){
        setIsFilterCollapsed(prev => !prev)
        document.documentElement.style.setProperty(
            '--filter-width',
            isFilterCollapsed ? 'minmax(150px, 1fr' : '0'
        );
    }

    return(

        <div className="jobpage">
            <div className="jobfilter">
                <JobFilter />
            </div>

        <div className="page">

            <div className="searchbar">
                <SearchBar/>
                <Notification/>
            <div className="jobcontainer">
                <JobContainer />
            </div>
        </div>
    )
}
export default JobPage