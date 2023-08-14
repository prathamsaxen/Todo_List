import React,{useState} from 'react';
import Box from '@mui/material/Box';
import {ImCross} from 'react-icons/im'

import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
function EDIT_TODO(props) {
    const {taskList, setTaskList } = useContext(TASKCONTEXT);
    const [todo_task,setTODOTASK]=useState({todo_name:taskList[props.task].todo_name,todo_date:taskList[props.task].todo_date,todo_description:taskList[props.task].todo_description,completed:taskList[props.task].completed});
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
      const SUBMIT_FUNCTION=(event)=>{
        event.preventDefault();
        if(todo_task.todo_name==="" && todo_task.todo_date==="" && todo_task.todo_description==="")
        {
          console.log("PLease Fill all the fields");
        }
        else
        {
          setTaskList( taskList.map((todo,index) =>
            props.task === index ? todo_task : todo
          )
          )
          props.handleEdit();
        }
      }
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
  return (
    <div className='EDIT_TODO'>
      <div className='myModal' style={{background:'blue'}}>
        <Box sx={{ ...style, maxWidth: 600, width:'100%',zIndex:'1000',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'25px',border:'none' }}>
       <form className="form" onSubmit={SUBMIT_FUNCTION}>
       <ImCross style={{position:'absolute',top:'0',left:'0',color:'black'}} onClick={()=>props.handleEdit()}/>
       <label>

    <input required type="text" placeholder="Enter Todo..." className="input" id='todo_name' value={todo_task.todo_name} onChange={onChangeFunction}/>
  </label>
  <label>
    <input required type="date" className="input" id='todo_date' value={todo_task.todo_date} onChange={onChangeFunction} placeholder="Enter due date..."/>
  </label> 
 
  <label>
    <textarea required rows={3} className="input01" defaultValue={""} placeholder="Description" id='todo_description' value={todo_task.todo_description} onChange={onChangeFunction}/>
  </label>
  <button className="fancy">
    <span className="text">Submit</span>
  </button>
</form>
        </Box>
    </div>
    </div>
  )
}

export default EDIT_TODO
