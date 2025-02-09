import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'
import Spinner from '../component/Spinner'
const ShowBook = () => {
  const [book,SetBook]=useState({})
  const [loading,setLoading]=useState(false)
  const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res)=>{
      SetBook(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='py-2 text-3xl'>Book Info</h1>
      {loading? (<Spinner/>):(
        <div className='flex flex-col border-2 border-sky-400 text-xl rounded-md w-fit p-4'>
          <div className='my-2'>
              <span className='text-gray-500 mr-4 text-xl'>Id :</span>
              <span className=''>{book._id}</span>
          </div>
          <div className='my-2'>
              <span className='text-gray-500 mr-4 text-xl'>Title :</span>
              <span className=''>{book.title}</span>
          </div>
          <div className='my-2'>
              <span className='text-gray-500 mr-4 text-xl'>Author :</span>
              <span className=''>{book.author}</span>
          </div>
          <div className='my-2'>
              <span className='text-gray-500 mr-4 text-xl'>Publish year :</span>
              <span className=''>{book.publishYear}</span>
          </div>
          <div className='my-2'>
              <span className='text-gray-500 mr-4 text-xl'>Created time :</span>
              <span className=''>{book.createdAt}</span>
          </div>
          <div className='my-4'>
              <span className='text-gray-500 mr-4 text-xl'>Updated time :</span>
              <span className=''>{book.updatedAt}</span>
          </div>

        </div>
      )}
    </div>
  )
}

export default ShowBook