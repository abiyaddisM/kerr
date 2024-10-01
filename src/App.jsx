import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";

import JobPage from './pages/Jobs Page/JobPage.jsx';
import ArtPage from './pages/Art Page/ArtPage.jsx';
import UserJobPage from './pages/User Job Page/UserJobPage.jsx';
import {ProtectedRoutes} from "./utils/ProtectedRoutes.jsx";
import  './assets/css/iconsax-css/style.css';
import {LoginPage} from "./pages/Login Page/LoginPage.jsx";
import {PublicRoutes} from "./utils/PublicRoutes.jsx";
import {AuthProvider} from "./utils/AuthContext.jsx";
import {SignUpPage} from "./pages/Sign Up Page/SignUpPage.jsx";
import ViewPage from "./pages/View Page/ViewPage.jsx";
function App () {

  return (
      <>
      <AuthProvider>
        <Router>

          <Routes>

              <Route element={<ProtectedRoutes/>}>
                  <Route path='/' element={<ArtPage/>}/>
                  <Route path='/jobs' element={<JobPage/>}/>
                  <Route path='/user-jobs' element={<UserJobPage/>}/>
                  <Route path='/chat' element={<ChatPage/>}/>
                  <Route path='/other' element={<ViewPage/>}/>
                  <Route path='/chat/:id' element={<ChatPage/>}/>
              </Route>

              <Route element={<PublicRoutes/>}>
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='/sign-up' element={<SignUpPage/>}/>
              </Route>

          </Routes>

        </Router>
      </AuthProvider>
      </>

  )
}

export default App
