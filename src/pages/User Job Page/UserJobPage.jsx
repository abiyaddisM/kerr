import './UserJobPage.css';
import UserJobsContainer from '../../components/containers/User Jobs Container/UserJobsContainer';
import ButtonGroup from '../../components/buttons/Button Group/ButtonGroup'
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons';
import { useEffect, useState } from 'react';
import CommandButton from '../../components/buttons/Command Buttons/CommandButton';
import CreateJobContainer from '../../components/containers/Create Job Container/CreateJobContainer'
import ViewBidsContainer from '../../components/containers/View Bids Container/ViewBidsContainer'
import { PopUp } from '../../components/pops/Pop Up/PopUp';
import { IconButton } from '../../components/buttons/Icon Button/IconButton';
import addIcon from '../../assets/icons/add.svg'
import plusIcon from '../../assets/icons/plusIcon.svg'
import arrowrightIcon from '../../assets/icons/arrowrightIcon.svg'
import { AddCircle, ArrowCircleRight, ArrowCircleRight2 } from 'iconsax-react';
import axios from 'axios';
import { useAuth } from '../../utils/AuthContext';




const keywords1 = ['Contracted', 'Unassigned'];
const keywords2 = ['All', 'Active', 'Completed', 'Cancelled'];
const keywords3 = ['Create Job', 'View Bids'];

const UserJobPage = () => {

  const [selectedType, setSelectedType] = useState(keywords1[0]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isViewBidsOpen, setIsViewBidsOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  function handlePopup(button) {
    console.log(button)
    if (button === 'Create Job') {
      setIsCreateJobOpen(!isCreateJobOpen);
    } else if (button === 'View Bids') {
      setIsViewBidsOpen(!isViewBidsOpen);
    }
  }
  function handleTypeSelect(index) {
    setSelectedType(keywords1[index]);
  }

  function handleStatusSelect(index) {
    setSelectedStatus(keywords2[index]);
  }

  function closePopUp(){
    setIsViewBidsOpen(false)
  }

  const {user} = useAuth()

  const [jobs2, setJobs2] = useState([])

  useEffect(()=>{
    const fetchJobs = async ()=>{
    setJobs2([])
      setIsLoading(true)
    const url = `https://auth.bizawit.com/api/v1/job-contract`
    try{
    const response = await axios.get(url, 
      {
        params:{
          userID : user.id,
          page: 1
        }
      }
    )
     setTimeout(()=>{
       setIsLoading(false)

       setJobs2(response.data.data)
     },1000)
  }
  catch(error) {console.error(error);setIsLoading(false);}
  }

  const fetchUassignedJobs = async () => {
    setJobs2([])
    try{
      const url = `https://auth.bizawit.com/api/v1/user/${user.id}/job`
      const response = await axios.get(url,
        {
          params : {
            type: 1
          }
        }
      )
      setJobs2(response.data.data)
      

    }
    catch(error) {console.error(error)}

  }
  if(selectedType === 'Contracted'){
    fetchJobs()
  }
  else
    fetchUassignedJobs()
  console.log(jobs2)
  },[selectedType])

  
  const filteredJobs = jobs2.filter(job => {
    const typeFilter = (selectedType === 'Contracted' && !job.isAssigned) ||
    (selectedType === 'Unassigned' && job.isAssigned);

    // job.isAssigned === (selectedType === 'Contracted');
    const statusFilter = selectedStatus === 'All' || 
    (selectedStatus === 'Active' && job.contract_state === 1) ||
    (selectedStatus === 'Cancelled' && job.contract_state === 3) ||
    (selectedStatus === 'Completed' && job.contract_state === 2);
    
    return statusFilter &&  typeFilter;
  });

  


  return (
    <div className="user_job_page">
      <div className="buttons">
        <div className="filter_buttons">
          <RadioButtons 
            // className='type' 
            keywords={keywords1} 
            onSelect={handleTypeSelect} 
            selected={selectedType}
            border={true}
          />
        
        {selectedType === 'Contracted' &&
          <RadioButtons 
            // className='status'
            keywords={keywords2}
            onSelect={handleStatusSelect}
            selected={selectedStatus}
            border={true}
          />
        }
        </div>

        <div className="bid_buttons">
          <PopUp 
            maxHeight={550}
            maxWidth={1000}
            component={
               <button className='buttons2'>
              <p>{'Create Job'}</p>
              {<AddCircle size="20px" variant="Bulk" color="var(--dark-border-color)"/>}
              </button>
            } 
            state={isCreateJobOpen} setState={setIsCreateJobOpen}>
              <CreateJobContainer setIsOpen={setIsCreateJobOpen}/>
          </PopUp>

          <PopUp 
          maxHeight={550}
            maxWidth={800}
            component={
            <button className='buttons2'>
            <p>{'View Bids'}</p>
            {<ArrowCircleRight2 size="20px" variant="Bulk" color="var(--dark-border-color)"/>}
            </button>
          }
            state={isViewBidsOpen} setState={setIsViewBidsOpen}>
              <ViewBidsContainer userID={1} setIsOpen={closePopUp}/>
          </PopUp>
        </div>
        
      </div>
      {/* <JobContainer job = {filteredJobs}/> */}
      
      
      {filteredJobs.length !== 0 || isLoading?
        <UserJobsContainer userJobs={jobs2} assigned={selectedType === 'Contracted'}  isLoading={isLoading}/>
      :
      <div className="no_jobs">
        No jobs found
        </div>}
    </div>
  );
};

export default UserJobPage;
