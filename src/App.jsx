
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";

import JobPage from './pages/Jobs Page/JobPage.jsx';
import ArtPage from './pages/Art Page/ArtPage.jsx';
import UserJobPage from './pages/User Job Page/UserJobPage.jsx';
import PrivateLayout from './layouts/Private Layout/PrivateLayout.jsx';
import {ProtectedRoutes} from "./utils/ProtectedRoutes.jsx";
import LibraryPage from './pages/Library Page/LibraryPage.jsx';
import ViewPage from './pages/View Page/ViewPage.jsx';


function App () {

  return (
    <Router>

      <Routes>
        <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<ArtPage/>}/>
            <Route path='/jobs' element={<JobPage/>}/>
            <Route path='/user-jobs' element={<UserJobPage/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path='/library' element={<LibraryPage/>}/>
            <Route path='/view' element={<ViewPage/>}/>

        </Route>
      </Routes>

    </Router>

  )
}

export default App
