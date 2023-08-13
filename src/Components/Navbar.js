import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Button from '@mui/material/Button';
import NAVITEMS from '../Configuration/Navbar';
import ADDTODO from './ADDTODO';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    console.log(props.Toggle)

    return (
        
        <>
        {open?<ADDTODO handleClose={handleClose} setOpen={setOpen} />:null}  
        <div className={`sidebar  ${props.Toggle?'active':''}`}>
            <div className="profile" style={{marginBottom:'30px'}}>
                <div className="avatar">A</div>
                <div className="name">Admin</div>
            </div>
            {NAVITEMS.map((menu, index) => (
                <NavLink 
                    key={index}
                    className="menu"
                    to={menu.path}
                >
                    <div className="menu-heading">
                        <i className={`fa fa-${menu.icon}`} /> {menu.heading}
                    </div>
                    
                </NavLink>
            ))}
            <div className="create-task">
                <button className="bottom-button" onClick={handleOpen}>
                    <i className="fa fa-plus" /> Create Task
                </button>
            </div>
        </div>
        </>
    );
};

export default Navbar;
