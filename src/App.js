import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TASKCONTEXT } from './Context/ContextAPI';
import {GiHamburgerMenu} from 'react-icons/gi'
import Routes_Data from './Routes/Routes_Data';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
function App() {
  const [taskList,setTaskList]=useState([]);
  const [Toggle, setToggle] = useState(false)
  return (
    <TASKCONTEXT.Provider value={{taskList,setTaskList}}>
    <BrowserRouter>
    <div className="App">
    <button className='toggle-sidebar' onClick={()=>setToggle(!Toggle)}><GiHamburgerMenu style={{color:'white'}}/></button>
      <Navbar Toggle={Toggle}/>
      <div className="Main">
      <Header/>
      <Routes>
        {Routes_Data.map((item,index)=>{
          return <Route path={item.path} element={item.component} key={index}/>
        })}
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </TASKCONTEXT.Provider>
  );
}

export default App;
