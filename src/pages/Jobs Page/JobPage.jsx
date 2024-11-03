import SideBar from "../../components/general/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/containers/JobContainer/JobContainer";
import TopBar from "../../components/general/Top Bar/TopBar";
import Notification from "../../components/general/Notification/Notification";
import './JobPage.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useFetcher } from "react-router-dom";
import {Filter} from "iconsax-react";




const JobPage = () => {

    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);

    useEffect (()=>{
        const fetchJobs = async () =>{
            try{
                setIsLoading(true)
                setTimeout(async ()=>{
                    const res = await axios.get('https://auth.bizawit.com/api/v1/job')
                    setIsLoading(false)

                    setJobs(res.data[0])
                    setFilteredJobs(res.data[0])
                    console.log(res.data[0])
                },2000)


            }catch(e){console.log(e)}
    }
    fetchJobs();
    // console.log(jobs)

},[])
    
    


    const handleJobFilter = ({searchTerm, artStyles, location, clientRating, timeline, hourlyRange}) => {
        let updatedJobs = jobs;

        
        
        console.log(hourlyRange);
        
        console.log(artStyles);
        console.log(timeline)

        if(searchTerm){
            updatedJobs = jobs.filter(job => 
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                job.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if(artStyles && artStyles.length > 0){
            
            updatedJobs = jobs.filter(job => 
                console.log(artStyles)
                // artStyles.some(style => 
                //     job.keywords.includes(style)
                // )
            )
            console.log(updatedJobs)

        }

        if(location) {
            updatedJobs = jobs.filter(job => 
                job.location.toLowerCase().includes(location.toLowerCase())
            )
        }


        if(hourlyRange && hourlyRange.length > 0){
            updatedJobs = jobs.filter(job => 
                
                hourlyRange.some(range => {
                if(range === 'Any')
                    return true;

                const [lower, upper] = range.split(',').map(Number); // Split and convert to numbers
                console.log(`Range: lower = ${lower}, upper = ${upper}`);
                return job.job_price >= lower && job.job_price <= upper;
                }
            ))

        }

        //ADD TIMELINE SEARCH
        setFilteredJobs(updatedJobs)

    }

    useEffect(()=>{
        console.log(filteredJobs)
    },[filteredJobs])
    const [isLoading,setIsLoading] = useState(false);
    return(
        <div className="jobpage">
            <div className="jobcontainer">
                <JobContainer jobs={filteredJobs} isLoading={isLoading}/>
            </div>
            <div className={filterVisible ? "jobfilter show_filter" : "jobfilter"}>
                <JobFilter  onStateChange={handleJobFilter}
                 />
            </div>
            <div className={"filter_icon_container"} onClick={() => setFilterVisible(!filterVisible)}>
                <Filter size="24" color="var(--secondary-color)"/>
            </div>
            
        </div>
    )
}
export default JobPage;
