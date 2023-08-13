import React from 'react'
import '../Header.css'
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';

const Header = () => {
  const { taskList } = useContext(TASKCONTEXT);
  return (
    
       <header id="navbar">
        <nav className="navbar-container container">
          <a href="/" className="home-link">
        <div className="navbar-logo" />
     Total Task :{taskList.length}
    </a>
    <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
    <div id="navbar-menu" aria-labelledby="navbar-toggle">
      <ul className="navbar-links">
        <li className="navbar-item"><p className="navbar-link" >Task Left(7)</p></li>
       
      </ul>
    </div>
  </nav>
</header>

   
  )
}

export default Header