import SideBar from "../../components/general/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/containers/JobContainer/JobContainer";
import SearchBar from "../../components/Search Bar/SearchBar";
import Notification from "../../components/Notification/Notification";
import './JobPage.css'


const JobPage = () => {

    return(

        <div className="jobpage">
            <div className="sidebar">
                <SideBar />

            </div>

        <div className="page">

            <div className="searchbar">
                <SearchBar/>
                <Notification/>
            </div>
            <div className="container">
                <div className="jobfilter">
                    <JobFilter />
                </div>
                <div className="jobcontainer">
                    <JobContainer />
                </div>
            </div>
        </div>
        </div>
    )
}
export default JobPage
