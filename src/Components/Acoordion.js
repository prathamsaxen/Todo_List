import React, { useState } from 'react';
import { Collapse } from 'react-collapse';


// React ICONS
import { MdDelete, MdEdit} from 'react-icons/md';


// MUI
import Tooltip from '@mui/material/Tooltip';


// CONTEXT API -> FOR TODOS
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
import EDIT_TODO from './EDIT_TODO';



export default function Acoordion(props) {
  const [collapse,setCollapse]=useState(false);
  const {taskList, setTaskList } = useContext(TASKCONTEXT);
  const [edit,setEdit]=useState(false);
  const CollapseSwitch=()=>{
    setCollapse(!collapse);
  }
  const handleEdit=()=>{
    setEdit(!edit)
  }
  const handleDeleteTodo = () => {
    const updatedTodos = taskList.filter((todo,index) => props.id !== index);

    setTaskList(updatedTodos);
  };
  return (
    <>
    {edit?<EDIT_TODO task={props.id} handleEdit={handleEdit}/>:null}
    <Tooltip title="Click to Expand">
    <div className='Accordion' onClick={CollapseSwitch}>
      <div className="Task_Accordion">
            {props.task.todo_name}
        <div className="icons_accordion">
            <MdDelete className='del_icon' style={{color:'#b91056'}} onClick={handleDeleteTodo}/>
            <MdEdit style={{color:'#b9b9e0',marginRight:'5px',marginLeft:'10px'}} onClick={handleEdit}/>
        </div>
      </div>
      <Collapse isOpened={collapse}>
          <div className="upperCollapse">
        <span style={{color:'red'}}>Due Date</span>  :  {props.task.todo_date} 
          </div>
          <div className="mainCollapse">
          {props.task.todo_description}
          </div>
      </Collapse>
    </div>
    </Tooltip>
    </>
  )
}
