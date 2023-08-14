import React, { useState } from 'react';
import { Collapse } from 'react-collapse';


// React ICONS
import {MdDelete} from 'react-icons/md';

// MUI
import Tooltip from '@mui/material/Tooltip';


// CONTEXT API -> FOR TODOS
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';


export default function Acoordion(props) {
  const [collapse,setCollapse]=useState(false);
  const {taskList, setTaskList } = useContext(TASKCONTEXT);
  const CollapseSwitch=()=>{
    setCollapse(!collapse);
  }

  const handleDeleteTodo = () => {
    const updatedTodos = taskList.filter((todo,index) => props.id !== index);

    setTaskList(updatedTodos);
  };
  return (
    <Tooltip title="Click to Expand">
    <div className='Accordion' onClick={CollapseSwitch}>
      <div className="Task_Accordion">
            {props.task.todo_name}
        <div className="icons_accordion">
            <MdDelete className='del_icon' onClick={handleDeleteTodo}/>
            
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
    </Tooltip>
  )
}
