import SideBar from "../../components/general/Sidebar/Sidebar";
import JobFilter from "../../components/Job Filter/JobFilter";
import JobContainer from "../../components/containers/JobContainer/JobContainer";
import TopBar from "../../components/general/Top Bar/TopBar";
import Notification from "../../components/general/Notification/Notification";
import './JobPage.css'
import { useEffect, useState } from "react";
import axios from "axios";



const user = [
    {
        id: '1',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Aaron Mesfin'
    },
    {
        id:'2',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Some Guy'
    },
    {
        id: '3',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Kate Smith'
    }
]


let jobs = [
    {
        id: '1',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 3,
        user: user[1],
        keywords: ['Portrait', 'Futuristic', '3D', 'Sketch', 'Oil'],
        hourlyrate: 650,
        totalPrice: 3000,
        successrate: 80
        

    },
    {
        id: '2',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 5,
        user: user[0],
        keywords: ['Futuristic', '3D', 'Sketch', 'Oil'],
        hourlyrate: 170,
        totalPrice: 3000,
        successrate: 60


    }, 
    {
        id: '3',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 2,
        user: user[2],
        keywords: ['Realistic', 'Sketch', 'Oil'],
        hourlyrate: 950,
        totalPrice: 3000,
        successrate: 90

    },
    {
        id: '4',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 2,
        user: user[2],
        keywords: ['Realistic', 'Portrait', '3D', 'Oil'],
        hourlyrate: 950,
        totalPrice: 3000,
        successrate: 90
    },
]




const JobPage = () => {

    // const [jobs, setJobs] = useState([])

//     useEffect (()=>{
//         const fetchJobs = async () =>{
//             try{
//             const res = await axios.get('https://auth.bizawit.com/api/v1/job')
//             setJobs(res.data[0])
//             console.log(res)


//             }catch(e){console.log(e)}
//     }
//     fetchJobs();

// },[])
    
    
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
