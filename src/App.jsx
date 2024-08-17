
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";
import MessageCard from "./components/Message Card/MessageCard.jsx";
import {MessageContainer} from "./components/Message Container/MessageContainer.jsx";
import JobFilter from './components/Job Filter/JobFilter.jsx';
import JobContainer from './components/JobContainer/JobContainer.jsx';
import JobPage from './pages/Jobs Page/JobPage.jsx';
function App () {
  
  return (
    <Router>
    {/* <ChatPage/> */}
    {/*<ChatPage></ChatPage>*/}
    {/* <MessageContainer/> */}
    {/* <JobFilter/> */}
    {/* <JobContainer/> */}
    <JobPage/>
    </Router>
  )

}

export default App
