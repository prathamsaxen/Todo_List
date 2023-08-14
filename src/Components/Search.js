import React,{useState} from 'react'
import MyAccordion from '../Components/Acoordion';
import { useContext } from 'react';
import { TASKCONTEXT } from '../Context/ContextAPI';
export default function Search() {
    const { taskList } = useContext(TASKCONTEXT);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredTodos = taskList.filter(todo =>
    todo.todo_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
    <div className="SearchBar">
        <input type="search" name="search_todo" id="search_todo" placeholder='Search todo here...' onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
     {
      filteredTodos.map((item,index)=>{
        return <MyAccordion key={index} task={item} id={index}/>
      })
     }
     </>
  )
}
