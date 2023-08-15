import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { TASKCONTEXT } from './Context/ContextAPI';
import {GiHamburgerMenu} from 'react-icons/gi'
import Routes_Data from './Routes/Routes_Data';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
function App() {
  const [taskList,setTaskList]=useState([]);
  const [Toggle, setToggle] = useState(false)
  const successToast = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT
    });
  };
  const warnToast=(msg)=>{
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  const deleteToast=(msg)=>{
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  return (
    <TASKCONTEXT.Provider value={{taskList,setTaskList,successToast,warnToast,deleteToast}}>
    <BrowserRouter>
    <div className="App">
    <button className='toggle-sidebar' onClick={()=>setToggle(!Toggle)}><GiHamburgerMenu style={{color:'black'}}/></button>
      <Navbar Toggle={Toggle}/>
      <div className="Main">
      <Header/>
      <ToastContainer />
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
