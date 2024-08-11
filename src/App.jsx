
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";
import MessageCard from "./components/Message Card/MessageCard.jsx";
import {MessageContainer} from "./components/Message Container/MessageContainer.jsx";

function App () {
  
  return (
    <Router>
    
    {/*<ChatPage></ChatPage>*/}
    <MessageContainer/>
    </Router>
  )

}

export default App
