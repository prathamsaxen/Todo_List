
import React from 'react';
import MyAccordion from '../Components/Acoordion';
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
export default function All() {
    document.title="ALL | TODO";
    const { taskList } = useContext(TASKCONTEXT);
    return (
    <div className='All'>
     {
      taskList.map((item,index)=>{
        return <MyAccordion key={index} task={item} id={index}/>
      })
     }
    </div>
  )
}
