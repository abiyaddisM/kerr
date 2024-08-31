import SideBar from "../../components/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/JobContainer/JobContainer";
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
            <div className="jobcontainer">
                <JobContainer />
            </div>
        </div>
    )
}
export default JobPage