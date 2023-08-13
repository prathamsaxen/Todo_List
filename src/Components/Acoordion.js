import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import {MdDelete,MdPendingActions } from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';

export default function Acoordion(props) {
  const [collapse,setCollapse]=useState(false);
  const CollapseSwitch=()=>{
    setCollapse(!collapse);
  }
  return (
    <Tooltip title="Click to Expand">
    <div className='Accordion' onClick={CollapseSwitch}>
      <div className="Task_Accordion">
      {props.task.todo_name}
      <div className="icons_accordion">
      <MdDelete/>
      {props.task.todo_status===true?<MdPendingActions/>:<AiOutlineFileDone/>}
      </div>
      </div>
      <Collapse isOpened={collapse}>
          <div>{props.task.todo_description}</div>
      </Collapse>
    </div>
    </Tooltip>
  )
}
