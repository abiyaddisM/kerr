import './UserJobPage.css';
import JobContainer from '../../components/containers/JobContainer/JobContainer';
import UserJobsContainer from '../../components/containers/User Jobs Container/UserJobsContainer';
import Keywords from '../../components/buttons/Keywords Buttons/Keywords';
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons';
import SearchBar from '../../components/general/Search Bar/SearchBar';
import SideBar from '../../components/general/Sidebar/Sidebar';
import { useState } from 'react';

const keywords1 = ['Contracted', 'Unassigned'];
const keywords2 = ['All', 'Active', 'Completed', 'Cancelled'];
const keywords3 = ['Create Jobs', 'View Bids'];

const jobs = [
  {
  id: 1,
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
  userImage:'//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
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
