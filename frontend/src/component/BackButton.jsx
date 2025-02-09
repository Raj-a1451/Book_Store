import React from 'react'
import { Link } from 'react-router-dom'
import { TfiArrowLeft } from "react-icons/tfi";
const BackButton = ({destination ='/'}) => {
  return (
    <div className='flex'>
        <Link 
        to={destination}
        className='px-4 py-2 bg-sky-500 rounded-lg w-fit'
        >
            <TfiArrowLeft  className='text-2xl text-white'/>
        </Link>
    </div>
  )
}

export default BackButton