import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatPage from "./pages/Chat Page/ChatPage.jsx";
import {PopUp} from "./components/pops/Pop Up/PopUp.jsx";
import {useState} from "react";

function App () {
    let [state1,setState1] = useState(false);
    let [state2,setState2] = useState(false);

  return (
    <Router>
        {/*<ChatPage></ChatPage>*/}
        <PopUp component={<button >Pop up 1</button>} state={state1} setState={setState1}>
            <h1 onClick={()=>{alert('dd')}}>Hi from pop up 1</h1>
        </PopUp>
        <PopUp component={<button >Pop up 2</button>} state={state2} setState={setState2}>
            <h1 onClick={()=>{alert('dd')}}>Hi from pop up 2</h1>
        </PopUp>
    </Router>
  )
}

export default App
