import React, { useState } from 'react';
import { Collapse } from 'react-collapse';


// React ICONS
import {MdDelete,MdPendingActions } from 'react-icons/md';
import {AiOutlineFileDone} from 'react-icons/ai';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';

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
  const handleToggleStatus = (todoId) => {
    const updatedTodos = taskList.map((todo,index) =>
      props.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTaskList(updatedTodos);
  };

  const handleDeleteTodo = () => {
    const updatedTodos = taskList.filter((todo,index) => props.id !== index);

    setTaskList(updatedTodos);
  };
  return (
    <>
    <div className='Accordion'>
      <div className="Task_Accordion">
            {props.task.todo_name}
        <div className="icons_accordion">
            <MdDelete className='del_icon' onClick={handleDeleteTodo}/>
            {props.task.completed?<MdPendingActions onClick={handleToggleStatus}/>:<AiOutlineFileDone onClick={handleToggleStatus}/>}
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
