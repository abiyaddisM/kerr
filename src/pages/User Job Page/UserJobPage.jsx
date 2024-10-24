import './UserJobPage.css';
import UserJobsContainer from '../../components/containers/User Jobs Container/UserJobsContainer';
import ButtonGroup from '../../components/buttons/Button Group/ButtonGroup'
import RadioButtons from '../../components/buttons/RadioButtons/RadioButtons';
import { useState } from 'react';
import CommandButton from '../../components/buttons/Command Buttons/CommandButton';
import CreateJobContainer from '../../components/containers/Create Job Container/CreateJobContainer'
import ViewBidsContainer from '../../components/containers/View Bids Container/ViewBidsContainer'
import { PopUp } from '../../components/pops/Pop Up/PopUp';
import { IconButton } from '../../components/buttons/Icon Button/IconButton';
import addIcon from '../../assets/icons/add.svg'
import plusIcon from '../../assets/icons/plusIcon.svg'
import arrowrightIcon from '../../assets/icons/arrowrightIcon.svg'
import { AddCircle, ArrowCircleRight, ArrowCircleRight2 } from 'iconsax-react';




const keywords1 = ['Contracted', 'Unassigned'];
const keywords2 = ['All', 'Active', 'Completed', 'Cancelled'];
const keywords3 = ['Create Job', 'View Bids'];

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

const jobs = [
  {
  id: 1,
  user: user[0],
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false,
  isActive: true
},
{
  id: 2,
  user: user[2],
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
  user: user[1],
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false,
  isActive: true
  
},
{
  id: 4,
  user: user[0],
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false

},
{
  id: 5,
  user: user[2],
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024',
  isAssigned: false,

},
{
  id: 6,
  user: user[2],
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
  user: user[0],
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 0,
  date:'24/3/2024',
  isAssigned: false

},


]

const UserJobPage = () => {

  const [selectedType, setSelectedType] = useState(keywords1[0]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [isViewBidsOpen, setIsViewBidsOpen] = useState(false);

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
    setJobs2(response.data.data)
  }
  catch(error) {console.error(error)}
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
    (selectedStatus === 'Active' && job.isActive === true) ||
    (selectedStatus === 'Cancelled' && job.isActive === false) ||
    (selectedStatus === 'Completed' && job.isActive === undefined);
    
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
            component={
              <IconButton 
              src={<AddCircle size="20px" variant="Bulk" color="var(--dark-border-color)"/>} 
              term={'Create Job'}>
              </IconButton>
            } 
            state={isCreateJobOpen} setState={setIsCreateJobOpen}>
              <CreateJobContainer setIsOpen={setIsCreateJobOpen}/>
          </PopUp>
          <PopUp 
            component={
            <IconButton 
            src={<ArrowCircleRight2 size="20px" variant="Bulk" color="var(--dark-border-color)"/>} 
            term={'View Bids'}>
            </IconButton>
          }
            state={isViewBidsOpen} setState={setIsViewBidsOpen}>
              <ViewBidsContainer userID={1}/>
          </PopUp>
        </div>
        
      </div>
      {/* <JobContainer job = {filteredJobs}/> */}
      
        <UserJobsContainer userJobs={jobs2} assigned={selectedType === 'Contracted'}/> 
      
    </div>
  );
};

export default UserJobPage;
