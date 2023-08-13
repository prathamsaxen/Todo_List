import React from 'react'
import MyAccordion from '../Components/Acoordion';
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
export default function Home() {
    document.title="HOME | TODO";
    const { taskList} = useContext(TASKCONTEXT);
    return (
    <div>
      {
      taskList.map((item,index)=>{
        return <MyAccordion key={index} task={item} />
      })
     }
    </div>
  )
}
