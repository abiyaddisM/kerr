
import { BrowserRouter as Router, Route, Routes, UNSAFE_ViewTransitionContext } from 'react-router-dom'
import './App.css'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";

import MessageCard from "./components/Message Card/MessageCard.jsx";
import {MessageContainer} from "./components/Message Container/MessageContainer.jsx";
import JobFilter from './components/Job Filter/JobFilter.jsx';
import JobContainer from './components/JobContainer/JobContainer.jsx';
import JobPage from './pages/Jobs Page/JobPage.jsx';
import ArtCard from './components/Art Card/ArtCard.jsx';
import ArtContainer from './components/Art Container/ArtContainer.jsx';
import CommandButton from './components/Command Buttons/CommandButton.jsx';
import Keywords from './components/Keywords Buttons/Keywords.jsx';
import ArtPage from './pages/Art Page/ArtPage.jsx';
import UserJobCard from './components/User Job Card/UserJobCard.jsx';
import UserJobPage from './pages/User Job Page/UserJobPage.jsx';
import Layout from './Layout/Layout.jsx';

const art = {
  id: 1,
  image:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  title: 'See of the eye',
  userName: 'some guy',
  userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
  views: '2.5K',
  duration: '4 weeks'
}

const job = {
  id: 1,
  userImage:'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__',
  userName:'Some dude',
  location:'Addis Ababa, Ethiopia',
  jobTitle:'Some Drawing',
  jobDescription: 'A 6 piece billboard render for 2017 Ethiopian new years',
  messages: 3,
  date:'24/3/2024'
}
function App () {
    let [state1,setState1] = useState(false);
    let [state2,setState2] = useState(false);

  return (
    <Router>

      <Layout>
      <Routes>
        <Route path='/' element={<ArtPage/>}/>
        <Route path='/jobs' element={<JobPage/>}/>
        <Route path='/user-jobs' element={<UserJobPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
      </Layout>
    
    </Router>
  )
}

export default App
