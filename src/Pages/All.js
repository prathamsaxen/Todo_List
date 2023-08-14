
import React from 'react';
import Search from '../Components/Search';
import { useLocation } from 'react-router-dom';
export default function All() {
    document.title="ALL";
    console.log(useLocation().pathname);
    return (
    <div className='All'>
     <Search />
    </div>
  )
}
