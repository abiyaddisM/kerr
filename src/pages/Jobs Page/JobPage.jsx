import SideBar from "../../components/general/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/containers/JobContainer/JobContainer";
import TopBar from "../../components/general/Top Bar/TopBar";
import Notification from "../../components/general/Notification/Notification";
import './JobPage.css'
import { useEffect, useState } from "react";
import axios from "axios";




const JobPage = () => {

    const [jobs, setJobs] = useState([])

    useEffect (()=>{
        const fetchJobs = async () =>{
            try{
            const res = await axios.get('https://auth.bizawit.com/api/v1/job')
            setJobs(res.data[0])
            console.log(res.data[0])


            }catch(e){console.log(e)}
    }
    fetchJobs();
    console.log(jobs)

},[])
    
    
    const [filteredJobs, setFilteredJobs] = useState(jobs);


    const handleJobFilter = ({searchTerm, artStyles, location, clientRating, timeline, hourlyRange}) => {
        let updatedJobs = jobs;

        console.log(searchTerm)
        console.log(location)
        console.log(hourlyRange);
        console.log(clientRating)
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
                artStyles.some(style => 
                    job.keywords.includes(style)
                )
            )
            console.log(updatedJobs)

        }

        if(location) {
            updatedJobs = jobs.filter(job => 
                job.location.toLowerCase().includes(location.toLowerCase())
            )
        }

        // if(clientRating && clientRating.length > 0){
        //     updatedJobs = jobs.filter(job => 
        //         clientRating.includes(job.rating.toString())
        //     )
        // }


        // if(hourlyRange && hourlyRange.length > 0){
        //     updatedJobs = jobs.filter(job => 
        //         hourlyRange.some(range => {
        //             const [lower, upper] = range
        //             return job.hourlyrate >= lower && job.hourlyrate <= upper
        //         }
        //     ))
        // }

        //ADD TIMELINE SEARCH
        setFilteredJobs(updatedJobs)

    }

    return(
        <div className="jobpage">
            <div className="jobcontainer">
                <JobContainer jobs={jobs}/>
            </div>
            <div className="jobfilter">
                <JobFilter  onStateChange={handleJobFilter}
                 />
            </div>
            
        </div>
    )
}
export default JobPage;
