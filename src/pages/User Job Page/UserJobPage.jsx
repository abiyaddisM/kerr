import './UserJobPage.css';
import JobContainer from '../../components/JobContainer/JobContainer';
import UserJobsContainer from '../../components/User Jobs Container/UserJobsContainer';
import Keywords from '../../components/Keywords Buttons/Keywords';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import SearchBar from '../../components/Search Bar/SearchBar';
import SideBar from '../../components/Sidebar/Sidebar';
import { useState } from 'react';

const keywords1 = ['Contracted', 'Unassigned'];
const keywords2 = ['All', 'Active', 'Completed', 'Cancelled'];
const keywords3 = ['Create Jobs', 'View Bids'];

const jobs = [
  {
  id: 1,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: true,
  isActive: true
},
{
  id: 2,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false,
  isActive: false
},
{
  id: 3,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: true,
  isActive: true
  
},
{
  id: 4,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: true

},
{
  id: 5,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false,

},
{
  id: 6,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 0,
  date:'24/3/2024', 
  isAssigned: false,
  isActive: false

},
{
  id: 7,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 0,
  date:'24/3/2024',
  isAssigned: false

},


]

const UserJobPage = () => {
  const [selectedType, setSelectedType] = useState('Contracted');
  const [selectedStatus, setSelectedStatus] = useState('All');

  function handleTypeSelect(term) {
    setSelectedType(term);
  }

  function handleStatusSelect(term) {
    setSelectedStatus(term);
  }

  const filteredJobs = jobs.filter(job => {
    const typeFilter = selectedType === 'all' ||
    (selectedType === 'Contracted' && job.isAssigned) ||
    (selectedType === 'Unassigned' && !job.isAssigned);

    // job.isAssigned === (selectedType === 'Contracted');
    const statusFilter = selectedStatus === 'All' || 
    (selectedStatus === 'Active' && job.isActive === true) ||
    (selectedStatus === 'Cancelled' && job.isActive === false) ||
    (selectedStatus === 'Completed' && job.isActive === undefined);
    
    return statusFilter;
  });

  return (
    <div className="user_job_page">
      <div className="buttons">
        <div className="filter_buttons">
          <RadioButtons 
            className='type' 
            keywords={keywords1} 
            onClick={handleTypeSelect} 
            selected={selectedType}
          />
        
        
          <Keywords 
            className='status'
            keywords={keywords2}
            onClick={handleStatusSelect}
          />
        </div>
        <div className="bid_buttons">
          <Keywords 
            className='bids'
            keywords={keywords3}
          />
        </div>
      </div>
      {/* <JobContainer job = {filteredJobs}/> */}
       <UserJobsContainer userJobs={filteredJobs} />
    </div>
  );
};

export default UserJobPage;
