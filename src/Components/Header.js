import React from 'react'
import '../Header.css'
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
const Header = () => {
  const { taskList } = useContext(TASKCONTEXT);
  return (
       <header id="navbar" className="navbar-container container" >
           <ul className="navbar-links container" style={{width:"100%"}} >
            <li className="navbar-item" ><p className="navbar-link" style={{justifyContent:"flex-end"}} >Task Left: {taskList.length} </p></li>
          </ul>
        </header>
  )
}

export default Header