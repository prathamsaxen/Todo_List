import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import {MdDelete,MdPendingActions } from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';


export default function Acoordion(props) {
  const [collapse,setCollapse]=useState(false);
  const CollapseSwitch=()=>{
    setCollapse(!collapse);
  }

  return (
    <>
    <div className='Accordion'>
      <div className="Task_Accordion">
            {props.task.todo_name}
        <div className="icons_accordion">
            <MdDelete className='del_icon' onClick={()=>{props.DEL()}}/>
            {props.task.todo_status===true?<MdPendingActions />:<AiOutlineFileDone/>}
            <Tooltip title="Click to Expand">
            <BsFillArrowDownCircleFill onClick={CollapseSwitch}/>
            </Tooltip>
        </div>
      </div>
      <Collapse isOpened={collapse}>
          <div className="upperCollapse">
            {props.task.todo_date}
          </div>
          <div className="mainCollapse">
          {props.task.todo_description}
          </div>
      </Collapse>
    </div>
    </>
  )
}
