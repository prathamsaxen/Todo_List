import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {ImCross} from 'react-icons/im'
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
export default function ADDTODO(props) {
  const [todo_task,setTODOTASK]=useState({todo_name:"",todo_date:"",todo_description:"",completed:false});
  const  onChangeFunction=(event)=>{
    if(event.target.id==="todo_name")
    {
      setTODOTASK({...todo_task,todo_name:event.target.value});
    }
    else if(event.target.id==="todo_date")
    {
      setTODOTASK({...todo_task,todo_date:event.target.value});
    }
    else{
      setTODOTASK({...todo_task,todo_description:event.target.value});
    }
  }
  const { setTaskList,successToast,warnToast } = useContext(TASKCONTEXT);
  const SUBMIT_FUNCTION=(event)=>{
    event.preventDefault();
    if(todo_task.todo_name==="" || todo_task.todo_date==="" || todo_task.todo_description==="")
    {
      console.log("PLease Fill all the fields");
      warnToast("Please fill all the fields");
    }
    else
    {
      setTaskList((data)=>{
        return [...data,todo_task]
      });
      setTODOTASK({todo_name:"",todo_date:"",todo_description:"",completed:false})
      successToast("Task Added!")
      props.setOpen(false);
    }
  }
  
  return (
    <div className='myModal' style={{background:'blue'}}>
        <Box sx={{ ...style, maxWidth: 600, width:'100%',zIndex:'1000',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'25px',border:'none' }}>
       <form className="form" onSubmit={SUBMIT_FUNCTION}>
       <ImCross style={{position:'absolute',top:'0',left:'0',color:'black'}} onClick={()=>props.setOpen(false)}/>
       <label>

    <input type="text" placeholder="Enter Todo..." className="input" id='todo_name' value={todo_task.todo_name} onChange={onChangeFunction}/>
  </label>
  <label>
    <input  type="date" className="input" id='todo_date' value={todo_task.todo_date} onChange={onChangeFunction} placeholder="Enter due date..."/>
  </label> 
 
  <label>
    <textarea  rows={3} className="input01" defaultValue={""} placeholder="Description" id='todo_description' value={todo_task.todo_description} onChange={onChangeFunction}/>
  </label>
  <button className="fancy">
    <span className="text">Submit</span>
  </button>
</form>
        </Box>
    </div>
  )
}
